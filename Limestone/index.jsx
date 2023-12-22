import React from "react";
import './index.css'

// import react slick slider 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// arrow icon
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import law from '../assets/images/law.jpg';
import arc from '../assets/images/arc.jpg';
import share from '../assets/images/share.jpg';
import edu from '../assets/images/edu.jpg';
import eng from '../assets/images/eng.jpg';
import med from '../assets/images/med.jpg';
import quan from '../assets/images/quan.jpg';
import geo from '../assets/images/geo.jpg';
import sci from '../assets/images/sci.jpg';
import logo from '../assets/images/sec-logo.png';



const products = [
  {
    id: 1,
    title: 'Application',
    image: law, desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.'
  },

  {
    id: 2,
    title: 'Architecture',
    image: arc, desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.'
  },

  {
    id: 3,
    title: 'Arts',
    image: share, desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.'
  },

  {
    id: 4,
    title: 'Education',
    image: edu, desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.'
  },

  {
    id: 5,
    title: 'Engeenring',
    image: eng, desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.'
  },

  {
    id: 6,
    title: 'Medical',
    image: med, desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.'
  },

  {
    id: 7,
    title: 'Physics',
    image: quan, desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.'
  },
  { id: 8, title: 'Research', image: geo, desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.' },
  { id: 9, title: 'Science', image: sci, desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.' },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: null, // Set to null to remove the previous arrow
    nextArrow: null, // Set to null to remove the next arrow
    style: {
      marginLeft: '0', // Set margin-left to 0
      marginRight: '0', // Set margin-right to 0
    },

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },

    ]
  };

  return (
    <>
      <div style={{ fontFamily: "Roboto Slab, sans-serif" }}>
        <div className="flex justify-center ">
          <h1 className="text-4xl leading-normal">Choose Your Field of Study</h1>
        </div>
        <div className="flex justify-center my-5"><img src={logo} alt="" className="ml-4" /></div>
        <Slider {...settings}>

          {products.map((value) => (
            <div key={value.id} >
              <div className="flex flex-col overflow-hidden mx-2   w-[calc(300px - 2rem)] ">

                <img className="w-250 object-contain" src={value.image} alt="" />

                <div className="flex flex-col w-full border-2 px-6 text-left ">
                  {/* <div className="text-md text-black sm:text-lg w-full text-center flex fle items-center"> */}
                  <h3 className='my-3 text-3xl font-medium'>{value.title}</h3>
                  <p className='font-thin text-gray-500 text-[16px]'>{value.desc}</p>
                  <div><button className="bg-[#880010] text-white text-sm  my-4 p-[12px] px-[20px] border-l-8 border-yellow-500  ">Read More <span>
                    <ArrowForwardIosIcon sx={{ fontSize: 10 }} />
                  </span>
                  </button></div>
                </div>
              </div>
            </div>
            // </div>
          ))}

        </ Slider>
      </div >

    </>
  );
}

export default Testimonials;
