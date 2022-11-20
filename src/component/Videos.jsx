import React from 'react'
// import { FetchApi } from './FetchApi'

import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index";
const Videos = ({ videos }) => {
  // console.log(videos)
  return(
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap='20px' borderRadius={'20px'} >
      {videos.map((items,index)=>(
        <Box key={index}>
          {items.id.videoId && <VideoCard video={items} />}
          {items.snippet.ChannelId && <ChannelCard channeldetails={items} />}
        </Box>
      ))}
    </Stack>

  );
};

export default Videos;
