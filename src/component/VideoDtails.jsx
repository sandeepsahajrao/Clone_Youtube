import React from 'react';
import { useState,useEffect } from 'react';
import { Box,Typography,Stack } from '@mui/material';
import { useParams,Link} from 'react-router-dom';
import {Videos} from './index'
import { FetchApi } from './FetchApi';
import ReactPlayer from 'react-player'


const VideoDtails = () => {
  const [videoDetails, setvideoDetails] = useState(null)
  const {id}=useParams();
  useEffect(()=>{
    FetchApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setvideoDetails(data.items[1]))
  },[id]);
  
  // const {snippet}=videoDetails
    // console.log(videoDetails.snippet)
  return (
    <Box minHeight={'95vh'}>
      <Stack sx={{xs:'column',md:'row'}}>
        <Box flex={1}>

          <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player'
            controls />
            <Typography variant='h5' >
              {/* {snippet.title} */}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDtails