import React from 'react';

type TPath = {
  path: string;
};

export const ImgContainer: React.FC<TPath> = ({ path }) => {
  return (
    <div className="flex w-full h-44 border-b-2 items-center justify-center">
      <img
        alt={'profile image'}
        className="w-24 h-24 rounded-full"
        src={path}
      />
    </div>
  );
};
