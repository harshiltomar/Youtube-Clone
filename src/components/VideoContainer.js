import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/Const';
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom';

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
      {videos.map((video)=> (
        <Link to={"watch?v="+ video.id}>
          <VideoCart key={video.id} info={video}/>
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer;