import React from 'react'
import { useState,useEffect } from 'react';
import { Box,Typography,Stack } from '@mui/material';
import {Sidebar,Videos} from './index'
import { FetchApi } from './FetchApi';


const VideoDtails = () => {
  const [selectedCategery, setselectedCategery] = useState('New')
  const [videos, setvideos] = useState([])

    useEffect(()=>{
      FetchApi(`search?part=snippet&q=${selectedCategery}`)
      .then((data)=>
        setvideos(data.items)
      )
    },[selectedCategery])

  return (
    <Stack  style={{overFlow:"auto"}}  sx={{flexDirection:{sx:'column',md:'row'}}}>
      <Box p={2} sx={{flex:'2',height:'90vh'}}>
        <Typography fontWeight='bold' variant='h4' md={2} sx={{color:'white'}}>
          {selectedCategery} <span style={{color:"red"}}>Video</span>
        </Typography>
        <Videos videos={videos}></Videos>
      </Box>

    </Stack>
  )
}


export default VideoDtails;