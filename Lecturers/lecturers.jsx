import * as React from 'react';
import logo from '../assets/images/sec-logo.png';

// import MUI icon

import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';




const teamwork = [
    { id: 1, title: 'Application', desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.', icon: <BookOutlinedIcon sx={{ fontSize: 60 }}/> },

    { id: 2, title: 'Architecture', desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.', icon: <DesktopWindowsOutlinedIcon sx={{ fontSize:60 }} /> },

    { id: 3, title: 'Arts', desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.', icon: <TimerOutlinedIcon sx={{ fontSize: 60 }} /> },

    { id: 4, title: 'Education', desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.', icon: <AccountCircleOutlinedIcon sx={{ fontSize: 60 }} /> },

    { id: 5, title: 'Engeenring', desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.', icon: <MouseOutlinedIcon sx={{ fontSize: 60 }} /> },

    { id: 6, title: 'Medical', desc: 'Nam vitae augue non nisi rhoncus cursus. Nunc nec posuere lorem. aecenas turpis dui, vestibulum in libero et, sollicitudin viverra leo.', icon: <BeachAccessIcon sx={{ fontSize: 60 }} /> },


];


export default function MultiActionAreaCard() {
    return (

        <>
            <div className="container  lg:w-[90%]" style={{ fontFamily: "Roboto Slab, sans-serif" }}>
                <div className="flex justify-center ">
                    <h1 className="text-4xl leading-normal">Component Instructors & Lecturers </h1>
                </div>
                <div className="flex justify-center my-5"><img src={logo} alt="" className="ml-4" /></div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10  ">
                    {teamwork.map((value) => (
                        <div key={value.id} >
                            <div className="flex flex-col border-1 border-gray-200 px-8 py-8 overflow-hidden w-[calc(300px - 2rem)]  ">

                            <div className="text-gray-600 ">{value.icon}</div>
                                <div className="text-md text-black sm:text-lg   w-full text-center pl-3 ">
                                    <h1 className='my-4 text-xl font-[600]'>{value.title}</h1>
                                    <p className='font-thin text-gray-500 text-[16px]'>{value.desc}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>




        </>


    );
}
