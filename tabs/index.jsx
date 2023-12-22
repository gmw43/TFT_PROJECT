import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import law from '../assets/images/law.jpg';
import arc from '../assets/images/arc.jpg';

const products = [
  {
     id: 1,
      title: 'Excepteur Sint Occaecat Cupidatat Non', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea.commodo consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,',
       image: law },
  { 
    id: 2,
     title: 'Excepteur Sint Occaecat Cupidatat Non', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea.commodo consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,',
   image: arc },
  { 
    id: 3,
     title: 'Excepteur Sint Occaecat Cupidatat Non', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea.commodo consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,',
   image: law },
  {
     id: 4,
     title: 'Excepteur Sint Occaecat Cupidatat Non', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea.commodo consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,',
   image: arc },
  {
     id: 5,
     title: 'Excepteur Sint Occaecat Cupidatat Non', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea.commodo consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,',
   image: law },
  { 
    id: 6,
     title: 'Excepteur Sint Occaecat Cupidatat Non', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea.commodo consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,',
   image: arc },
  {
     id: 7,
     title: 'Excepteur Sint Occaecat Cupidatat Non', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea.commodo consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,',
   image: law },
];

const CustomBox = ({ title, desc, image, style  }) => (
  <div className="  flex flex-row overflow-hidden w-full">
    <div className="w-1/2">
      <img className="h-full w-full" src={image} alt="" />
    </div>
    <div className="flex flex-col p-2 w-1/2">
      <div className=" text-black text-3xl font-medium">{title}</div>
      <div className="text-md text-black mt-2 ">
        <h3 className='leading-relaxed'>{desc}</h3>
      </div>
    </div>
  </div>
);

// const CenteredContent = ({ children }) => (
//   <div className="flex justify-center items-center min-h-screen">
//     {children}
//   </div>

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const getTabStyle = (tabIndex) => {
    // Define different styles for each tab
    switch (tabIndex) {
      case 0:
        return { backgroundColor: 'lightblue', padding: '10px', margin: '5px' };
      case 1:
        return { backgroundColor: 'lightgreen', padding: '15px', margin: '5px' };
      // Add more cases for other tabs if needed
      default:
        return {};
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>

    <Box sx={{ maxWidth: {width:850}, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>

      <Box>
        {products.map((product) => (
          <div key={product.id}>
            {value === product.id - 1 && <CustomBox {...product} />}
          </div>
        ))}
      </Box>
    </Box>
    </div>
  );
}
