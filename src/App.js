

import React from 'react';
import { Box } from '@mui/material';
import Home from './Components/Home';
import Hero from './Components/Hero';
import About from './Components/About';
import Product from './Components/Product';
import Work from './Components/Work';
import End  from './Components/End';
import Test from './Components/Test';


function App() {
  return (
    <Box sx={{overflowX:"hidden"}} >
      <Home />
      <Hero />
      <About />
      <Product />
      <Work />
      < Test />
    < End />
    </Box>
     
  );
}

export default App;
