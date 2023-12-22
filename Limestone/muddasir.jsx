/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CarouselSection = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleNext = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };

    return (
        <section
            className="relative  h-screen overflow-hidden m-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-500 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        backgroundImage: `url(${image.background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <div className=' w-full h-full  object-contain flex flex-col justify-center '>
                        <div>
                            <h1 className="text-4xl md:text-7xl font-bold text-white">{image.headingOne} <span className='text-[#FFDE59]'>{image.headingTwo}</span></h1>
                            <p className="text-sm   text-white my-4">{image.text}</p>
                        </div>
                        <div className='flex justify-center text-white space-x-20'>
                            <div className='flex items-center mx-4'>
                                <span  >{image.icons1}</span>
                                <h4 className='text-xl md:text-xl mx-2'>{image.icontext}</h4>
                            </div>
                            <div className='flex items-center mx-4'>
                                <span  >{image.icons2}</span>
                                <h4 className='text-xl md:text-xl mx-2'>{image.icontext1}</h4>
                            </div>

                            <div className='flex items-center mx-4'>
                                <span  >{image.icons3}</span>
                                <h4 className='text-xl md:text-xl mx-2'>{image.icontext2}</h4>
                            </div>
                        </div>
                        <div className='flex justify-center mt-8  '>  <button className="relative  text-white bg-transparent border-2 border-gradient rounded-3xl py-2 px-4 ">
                            Apply Now
                        </button></div>
                    </div>

                </div>
            ))}

            {isHovered && (
                <>
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-xl md:text-2xl text-white"
                        onClick={handlePrev}
                    >
                        <ArrowBackIosIcon sx={{ fontSize: 32 }} />
                    </button>

                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-xl md:text-2xl text-white"
                        onClick={handleNext}
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: 32 }} />
                    </button>
                </>
            )}
        </section>
    );
};

export default CarouselSection;