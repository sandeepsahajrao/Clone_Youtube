import React from 'react'
import { FetchApi } from './FetchApi'
import { Box } from '@mui/system'
import { Stack } from '@mui/material'
import {VideoCard,ChannelCard} from './index'
const Videos = ({videos}) => {
  return(
    <Stack direction='row' flexWrap='warp' justifyContent='start' gap='2'>
      {videos.map((items,index)=>{
        <Box key={index}>
          {items.id.videoId && <VideoCard video={items}/>}
          {items.id.ChannelId && <ChannelCard channeldetails={items}/>}
        </Box>
      })}
    </Stack>
  )
}

export default Videos