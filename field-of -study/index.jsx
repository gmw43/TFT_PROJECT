import React from "react";
import '../field-of -study/index.css'

import frontend from '../field-of -study/images/FRONT END.png'
import mern from '../field-of -study/images/MERN.png';
import python from '../field-of -study/images/PYTHON.png';
import graphics from '../field-of -study/images/GRAPHIC DESIGN.png';
import computing from '../field-of -study/images/computing course.png';
// import med from '../assets/images/med.jpg';
// import quan from '../assets/images/quan.jpg';
// import geo from '../assets/images/geo.jpg';
// import sci from '../assets/images/sci.jpg';
import logo from '../assets/images/sec-logo.png';

// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import GavelIcon from '@mui/icons-material/Gavel';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faGavel } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
// import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
// import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
// import { faAtom } from '@fortawesome/free-solid-svg-icons';

const products = [
    { id: 1, title: 'FORNT END', image: frontend, icon: <FontAwesomeIcon icon={faGavel} /> },
    { id: 2, title: 'MERN STACK', image: mern, icon: <FontAwesomeIcon icon={faBuilding} /> },
    { id: 3, title: 'PYTHON', image: python, icon: <FontAwesomeIcon icon={faChartLine} /> },
    { id: 4, title: 'GRAPHIC DEISNING', image: graphics, icon: <GavelIcon /> },
    { id: 5, title: 'COMPUTING COURSE', image: computing, icon: <FontAwesomeIcon icon={faMicrochip} /> },
    { id: 6, title: 'FORNT END', image: frontend, icon: <FontAwesomeIcon icon={faGavel} /> },
    // { id: 6, title: 'Medical', image: med, icon: <FontAwesomeIcon icon={faUserDoctor} /> },
    // { id: 7, title: 'Physics', image: quan, icon: <FontAwesomeIcon icon={faAsterisk} /> },
    // { id: 8, title: 'Research', image: geo, icon: <GavelIcon /> },
    // { id: 9, title: 'Science', image: sci, icon: <FontAwesomeIcon icon={faAtom} /> },
];

const Fields = () => {
    return (
        <>
            <div className="container w-[90%] " style={{ fontFamily: "Roboto Slab, sans-serif" }}>
                <div className="flex justify-center ">
                    <h1 className="text-4xl leading-normal">Choose Your Field of Study</h1>
                </div>
                <div className="imgcss flex justify-center my-5"><img src={logo} alt="" className="ml-4" /></div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-[35px] gap-x-[20PX] ">
                    {products.map((value) => (
                        <div key={value.id} >
                            <div className=" custom flex flex-col overflow-hidden relative   w-[calc(300px - 2rem)] ">
                                <div className="lg:h-[235px] md:h-[200px] ">
                                    <img className="custom-img h-full w-full" src={value.image} alt="" />
                                </div>

                                <div className="flex absolute bottom-0 w-full ">
                                    <div className="bg-[#ffcb05] w-[60px] py-[12px] px-3 text-black text-md" >{value.icon}</div>
                                    <div className="text-md text-white sm:text-lg  bg-[#880010] w-full text-left pl-3 flex items-center">
                                        <h3>{value.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Fields;
