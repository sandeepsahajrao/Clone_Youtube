import React from 'react';
import { useState,useEffect } from 'react';
import { Box,Typography,Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import {Videos} from './index'
import { FetchApi } from './FetchApi';
import {Sidebar} from './index'


const SearchFeed = () => {
  const [videos, setvideos] = useState([])
  const {searchTerm}=useParams()
  const [selectedCategery, setselectedCategery] = useState('New')
    useEffect(()=>{
      FetchApi(`search?part=snippet&q=${searchTerm}`)
      .then((data)=>
        setvideos(data.items)
      )
    },[searchTerm])

    useEffect(()=>{
      FetchApi(`search?part=snippet&q=${selectedCategery}`)
      .then((data)=>
        setvideos(data.items)
      )
    },[selectedCategery])

  return (


    <Stack  style={{overFlow:"auto"}}  sx={{flexDirection:{sx:'column',md:'row'}}}>
    <Box sx={
      {
        height:{sx:'auto',md:'92%', lg:'98%'},
        
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
      
    <Box p={2} sx={{flex:'2',height:'90vh'}}>
    <Typography fontWeight='bold' variant='h4' md={2} sx={{color:'white'}}>
      {searchTerm} <span style={{color:"red"}}>Video</span>
    </Typography>
    <Videos videos={videos}></Videos>
    </Box>

  </Stack>



     

  )
}
export default SearchFeed;


