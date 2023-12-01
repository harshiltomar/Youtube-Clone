import React from 'react';
import Button from './Button';

const List= ["All", "Live", "Gaming", "Songs", "Live", "Cricket", "Cooking", "News", "Lofi", "Workout", "Anime", "Black Clover", "Jujutsu Kaisen"]

const ButtonList = () => {
  return (
    <div className="overflow-x-auto scrollable-container">
      <div className="flex space-x-3">
        {List.map((name,index)=> (
          <Button key={index} name= {name}/>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;