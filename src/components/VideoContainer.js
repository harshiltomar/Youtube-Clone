import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/Const';
import VideoCart from './VideoCart';

const VideoContainer = () => {

  const [videos, SetVideos]= useState([]);

  useEffect(()=>{
    getVideos();
  },[])
  
  const getVideos= async()=> {
    const data= await fetch(YOUTUBE_VIDEOS_API);
    const json= await data.json();
    SetVideos(json.items);
  }

  return (
    <div className="flex flex-wrap">
      {videos.map(video=> 
        <VideoCart key={video.id} info={video}/>)}
    </div>
  )
}

export default VideoContainer;