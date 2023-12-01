import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  
  const isMenuOpen= useSelector(store=> store.app.isMenuOpen)

  //Early Return Pattern
  if(!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg border-r border-gray-300 bg-gray-100m w-48">
      <ul className="mb-4 border-b pb-4">
        <li className="text-lg font-bold mb-2 ">Home</li>
        <li className="text-lg font-bold mb-2 ">Shorts</li>
        <li className="text-lg font-bold mb-2 ">Subscriptions</li>
      </ul>
      <ul className="mb-4 border-b pb-4">
        <h1 className="text-lg font-bold mb-2 ">You: </h1>
        <li>Your Channel</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Show More:</li>
      </ul>
      <ul className="mb-4 border-b pb-4">
      <h1 className="text-lg font-bold mb-2">Subscriptions</h1>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <ul className="mb-4 border-b pb-4"> 
        <h1 className="text-lg font-bold mb-2">More From YT: </h1>
        <li>YT Premium</li>
        <li>YT Studio</li>
        <li>YT Music</li>
        <li>YT Kids</li>
      </ul>
      <ul className="mb-4">
        <li className="text-lg font-bold mb-2 ">Settings</li>
        <li className="text-lg font-bold mb-2 ">Report History</li>
        <li className="text-lg font-bold mb-2 ">Help</li>
        <li className="text-lg font-bold mb-2 ">Send Feedback</li>
      </ul>
    </div>
  )
}

export default Sidebar;