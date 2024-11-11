// Create a new file called Button.tsx in your components folder

import React from 'react';

const WelcomeButton = () => {
  return (
    <button className="text-white font-bold px-6 py-1 bg-transparent border-l-2 border-r-2 border-white rounded-l-full rounded-r-full">
      Hi,<span className='text-yellow-400'>I&#39;m Faiza</span>
    </button>
  );
};

export default WelcomeButton;
