import React from 'react';
import Loader from './Loader';
// import { FetchApi } from './FetchApi'

import { Stack ,Box} from '@mui/material'
import {VideoCard,ChannelCard} from './index'
const Videos = ({videos}) => {
  // console.log(videos)
  if(!videos?.length) return <Loader />;
  return(
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap='20px' borderRadius={'20px'} sx={{justifyContent:"center"}} >
      {videos.map((items,index)=>(
        <Box key={index}>
          {items.id.videoId && <VideoCard video={items}/>}
          {items.id.ChannelId && <ChannelCard channeldetails={items}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos