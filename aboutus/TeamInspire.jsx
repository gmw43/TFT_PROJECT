import * as React from 'react';
import logo from '../assets/images/sec-logo.png';

// import MUI icon
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import law from '../assets/images/law.jpg';
import arc from '../assets/images/arc.jpg';
import share from '../assets/images/share.jpg';





const teamwork = [
    { id: 1, name: 'Application', position: 'Nam vitae ', image: law, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae diam non nibh tincidunt pulvinar lacinia eu odio.'},

    { id: 2, name: 'Architecture', position: 'Nam vitae ', image: arc, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae diam non nibh tincidunt pulvinar lacinia eu odio.' },

    { id: 3, name: 'Arts', position: 'Nam vitae ', image: share, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae diam non nibh tincidunt pulvinar lacinia eu odio.' }

];



export default function TeamsInspire() {
    return (

        <>
            <div className="container  my-8 lg:w-[90%]" style={{ fontFamily: "Roboto Slab, sans-serif" }}>
                <div className="flex justify-center ">
                    <h1 className="text-4xl leading-normal">Component Instructors & Lecturers </h1>
                </div>
                <div className="flex justify-center my-5"><img src={logo} alt="" className="ml-4" /></div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10  ">
                    {teamwork.map((value) => (
                        <div key={value.id} >
                            <div className="flex flex-col p-4 border-1 border-gray-200 overflow-hidden ">

                                <div className='flex flex-row '>

                                    <div className='w-[80px] h-[80px]' >
                                        <img className='w-full h-full object-fill object-cover' src={value.image} alt="" />
                                    </div>

                                    <div className='flex flex-col text-left mx-4'>
                                        <h1 className='text-xl font-semibold '>{value.name}</h1>
                                        <h3 className='my-2'>{value.position}</h3>
                                    </div>

                                </div>
                                <hr class="h-1 my-4  bg-gray-200 border-0   bg-red-900"></hr>


                                <div className="mt-2 text-left  ">
                                    <p className=' leading-relaxed '>{value.desc}</p>
                                </div>
                                <div className="flex justify-left text-black my-4 w-full  ">
                                    <span className='mx-1'><GitHubIcon sx={{ fontSize: 30 }}/></span>
                                    <span className='mx-1'><LinkedInIcon sx={{ fontSize: 30 }}/></span>
                                    <span className='mx-1'><InstagramIcon sx={{ fontSize: 30 }}/></span>
                                    <span className='mx-1'><FacebookIcon sx={{ fontSize: 30 }}/></span>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>




        </>


    );
}
