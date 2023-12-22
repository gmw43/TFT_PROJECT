import * as React from 'react';
import logo from '../assets/images/sec-logo.png';

// import MUI icon
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



// pictures
import ceo from '../assets/images/law.jpg';
import instructor_1 from '../assets/images/arc.jpg';
import instructor_2 from '../assets/images/share.jpg';




const teamwork = [
    { id: 1, name: 'CEO', lecture: 'NABEEL SABIR, ', image: ceo },

    { id: 2, name: 'INSTRUCTOR 1', lecture: 'ABC, ', image: instructor_1 },

    { id: 3, name: 'INSTRUCTOR 2', lecture: 'ABC', image: instructor_2 },



];


export default function InstructorsInfo() {
    return (

        <>
            <div className="container  lg:w-[90%]" style={{ fontFamily: "Roboto Slab, sans-serif" }}>
                <div className="flex justify-center ">
                    <h1 className="text-4xl leading-normal">Component Instructors & Lecturers </h1>
                </div>
                <div className="flex justify-center my-5"><img src={logo} alt="" className="ml-4" /></div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6  ">
                    {teamwork.map((value) => (
                        <div key={value.id} >
                            <div className=" flex flex-col justify-center items-center border-1  border-gray-200 overflow-hidden">
                                <div className='py-8'>                               
                                     <div className=' rounded-[50%] h-[180px] w-[180px] overflow-hidden bg-gray-100'>
                                    <img className="object-cover h-full w-full" src={value.image} alt="" />
                                </div>

                                    <div className="text-md text-black sm:text-lg w-full text-center  mt-4">
                                        <h1 className=' text-xl'>{value.name}</h1>
                                        <p className='font-thin text-gray-500 text-[16px]'>{value.lecture}</p>

                                    </div>
                                </div>

                                <div className="flex justify-center text-white  w-full p-[20px] bg-[#880010]">
                                    <span className='mx-1'><GitHubIcon sx={{ fontSize: 20 }}/></span>
                                    <span className='mx-1'><LinkedInIcon sx={{ fontSize: 20 }}/></span>
                                    <span className='mx-1'><InstagramIcon sx={{ fontSize: 20 }}/></span>
                                    <span className='mx-1'><FacebookIcon sx={{ fontSize: 20 }}/></span>
                                </div>


                            </div>

                        </div>

                    ))}
                </div>
            </div>




        </>


    );
}
