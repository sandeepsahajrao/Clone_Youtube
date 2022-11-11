import React from 'react';
import { useState,useEffect } from 'react';
import { Box,Typography,Stack } from '@mui/material';
import {Sidebar,Videos} from './index'
import { FetchApi } from './FetchApi';


const Feed = () => {
  const [selectedCategery, setselectedCategery] = useState('New')
  const [videos, setvideos] = useState([])

    useEffect(()=>{
      FetchApi(`search?part=snippet&q=${selectedCategery}`)
      .then((data)=>
        setvideos(data.items)
      )
    },[selectedCategery])
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
      <Box sx={
        {
          height:{sx:'auto',md:'92vh'},
          borderRight:'1px solid #3d3d3d',
          px:{sx:0,md:2}
          }}>
        <Sidebar
        selectedCategery={selectedCategery} setselectedCategery={setselectedCategery}
        ></Sidebar>
        
        <Typography className='copyRight' variant='body2' sx={{mt:1.5,color:'#fff'}} >
        © 2022 by Sandeep Sahajrao
        </Typography>
      </Box>
      <Box p={2} sx={{overFlowY:"auto",height:"90vh",flex:'2'}}>
        <Typography fontWeight='bold' variant='h4' md={2} sx={{color:'white'}}>
          {selectedCategery} <span style={{color:"red"}}>Video</span>
        </Typography>
        <Videos videos={videos}></Videos>
      </Box>

    </Stack>
  )
}

export default Feed