import React from 'react';
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (

  <Card className='w-full' sx={{ backgroundColor: "rgb(30 41 59)", boxShadow: "none", borderRadius: 3 }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <div className='relative'>
        <div className='opacity-0 hover:opacity-100 transition-opacity duration-200 grid items-center justify-center absolute h-full w-full z-10'>
          <p className='text-gray-200 font-bold'>
            <PlayCircleOutlineIcon sx={{fontSize: "4rem"}}/>
          </p>
        </div>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
          sx={{ filter: "brightness(70%)",  width: { xs: '100%', sm: '358px'}, height: 180 }} 
        />
      </div>
    </Link>
    <CardContent sx={{ backgroundColor: "transparent", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" className='text-gray-300'>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
