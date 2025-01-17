import React from 'react';

export const LoadComponent: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center min-w-full bg-yellow-400 h-2 rounded-md">
      <div className="absolute animate-ping  w-6/12 rounded-full">
        <div className="relative bg-orange-800 h-1 rounded-md "></div>
      </div>
    </div>
  );
};
