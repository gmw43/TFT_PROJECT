/* eslint-disable no-unused-vars */
import React from 'react';
import img from "./blue-bg.png";
import CarouselSection from './muddasir'

import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';// import Building from "./components/HeroSection/images/building.png";
// import ClassRoom from "./components/HeroSection/images/Classroom.png";
// import Calender from "./components/HeroSection/images/Calender.png";
const images = [
  {
    background: img,
    headingOne: 'Web',
    headingTwo: 'Development',
    text: 'A Comprehensive Training that addresses essential components required for achieving success within the field of data science',
    icons1: < BusinessOutlinedIcon sx={{ fontSize: 40 }} />,
    icons2: <CalendarMonthOutlinedIcon sx={{ fontSize: 40 }} />,
    icons3: <DvrOutlinedIcon sx={{ fontSize: 40 }} />,
    icontext: 'OnSite',
    icontext1: '4-8 Months',
    icontext2: '32-64 Lectures',
  },
  {
    background: img,
    headingOne: 'Mobile App',
    headingTwo: 'Development',
    text: 'A Comprehensive Training that addresses essential components required for achieving success within the field of data science',
    icons1: < BusinessOutlinedIcon sx={{ fontSize: 40 }} />,
    icons2: <CalendarMonthOutlinedIcon sx={{ fontSize: 40 }} />,
    icons3: <DvrOutlinedIcon sx={{ fontSize: 40 }} />,
    icontext: 'OnSite',
    icontext1: '4-8 Months',
    icontext2: '32-64 Lectures',
  },  
  {
    background: img,
    headingOne: 'Game',
    headingTwo: 'Development',
    text: 'A Comprehensive Training that addresses essential components required for achieving success within the field of data science',
    icons1: < BusinessOutlinedIcon sx={{ fontSize: 40 }} />,
    icons2: <CalendarMonthOutlinedIcon sx={{ fontSize: 40 }} />,
    icons3: <DvrOutlinedIcon sx={{ fontSize: 40 }} />,
    icontext: 'OnSite',
    icontext1: '4-8 Months',
    icontext2: '32-64 Lectures',
  },
  {
    background: img,
    headingOne: 'Python',
    headingTwo: 'Development',
    text: 'A Comprehensive Training that addresses essential components required for achieving success within the field of data science',
    icons1: < BusinessOutlinedIcon sx={{ fontSize: 40 }} />,
    icons2: <CalendarMonthOutlinedIcon sx={{ fontSize: 40 }} />,
    icons3: <DvrOutlinedIcon sx={{ fontSize: 40 }} />,
    icontext: 'OnSite',
    icontext1: '4-8 Months',
    icontext2: '32-64 Lectures',
  },  
  {
    background: img,
    headingOne: 'Android',
    headingTwo: 'Development',
    text: 'A Comprehensive Training that addresses essential components required for achieving success within the field of data science',
    icons1: < BusinessOutlinedIcon sx={{ fontSize: 40 }} />,
    icons2: <CalendarMonthOutlinedIcon sx={{ fontSize: 40 }} />,
    icons3: <DvrOutlinedIcon sx={{ fontSize: 40 }} />,
    icontext: 'OnSite',
    icontext1: '4-8 Months',
    icontext2: '32-64 Lectures',
  },
  // Add more images as needed
];

function Final() {
  return (
    <div className='m-0'>
      <CarouselSection images={images} />
    </div>
  );
}

export default Final;