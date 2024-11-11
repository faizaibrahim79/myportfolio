"use client";
import React from 'react'
import { FaArrowRight } from "react-icons/fa";


interface IProps {
  text: string;
}

const ProfileButton = ({ text }: IProps) => {
  return (
    
      <div className="flex items-center space-x-4 mt-8 border-2 rounded-l-full rounded-r-full">
      {/* Main Button */}
      <button className="hover:yellow-500 text-blue-950 text-bold whitespace-nowrap text-sm bg-white px-4 py-2 rounded-lg hover:bg-yellow-600  hover:text-white rounded-l-full rounded-r-full">
      {text}
      </button>

      {/* Circular Button with Arrow Icon */}
      <button className="bg-yellow-500 text-white p-2 rounded-full flex items-center justify-center hover:bg-yellow-600">
        <FaArrowRight className="text-lg" />
      </button>
    </div>
  )
}

export default ProfileButton


