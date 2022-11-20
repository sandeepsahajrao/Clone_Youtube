import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed,VideoDetails, ChannelDtails, SearchFeed } from './component';

import './App.css';


const App = () =>
(
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' exact element={<Feed></Feed>} />
        <Route path='/video/:id' element={<VideoDetails />} />
        <Route path='/channel/:id' element={<ChannelDtails />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>

)


export default App
