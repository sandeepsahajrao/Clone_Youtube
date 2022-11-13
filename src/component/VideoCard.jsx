import React from 'react';
import { Card,CardContent,CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoChannelTitle,demoChannelUrl,demoThumbnailUrl,demoVideoTitle,demoVideoUrl } from '../extraUtils/Utils';

const VideoCard = ({video:{id:{videoId},snippet}}) => {
 
  return (
    <Card style={{width:'300px',height:'300px',overFlow:"hidden"}}    sx={{md:'300px',sm:'auto',lg:'300px',justifyContent:'flex-start'}}  >
      <Link to={videoId? `/video/${videoId}`: `video/demoVideoUrl` }>
      <CardMedia  image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '350px',lg:'300px'}, height: 180 }} >
      </CardMedia>
      </Link>

      <CardContent height='180px' width="25%">
      <Link to={videoId? `/video/${videoId}`: `video/demoVideoUrl` }>
        <Typography variant={'subtitle1'} sx={{fontWeight:'bold'}}>
          {snippet?.channelTitle.slice(0,60) || demoVideoTitle.slice(0,20)}
        </Typography>
        <span sx={{display:'flex',alignItem:'center', width:'100px'}} className='subscribe'>
        <Button variant="outlined" sx={{height:'25px' ,color:'white',mt:'4px',mb:'4px',background:'red', fontSize:'10px'}}>Subscribe 
        </Button><CheckCircle/>
        </span>   
          
        </Link>
      <Link to={videoId? `/video/${videoId}`: `video/demoVideoUrl` }>
        <Typography variant={'subtitle2'}>
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,20)}
        </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard;