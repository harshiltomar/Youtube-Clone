import React from 'react';
import { HAMBURGERMENU, USERICON, YOUTUBELOGO } from '../utils/Const';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const Head = () => {

  const dispatch= useDispatch();

  const toggleMenuHandler= ()=> {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img 
        onClick={()=> toggleMenuHandler()}
        className="h-8 cursor-pointer" 
        alt="menu" 
        src={HAMBURGERMENU} />

        <a href='/'>
        <img 
        className="h-8 mx-2" 
        alt="youtube-logo" 
        src={YOUTUBELOGO} />
        </a>
      </div>
      <div className="col-span-10">
        <input 
        className="w-1/2 border border-gray-400 p-2 rounded-l-full" 
        type="text" 
      />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
      </div>
      <div className="col-span-10 flex justify-end items-center">
        <img 
        className="h-8" 
        alt="user" 
        src={USERICON} />
      </div>
    </div>
  );
};

export default Head;
