import React from 'react';

type TContainerTools = {
  visible?: boolean;
  children: React.ReactNode;
};
export const MenuContainerTools: React.FC<TContainerTools> = ({
  visible,
  children,
}) => {
  return (
    visible && (
      <div className="flex gap-3 sm:gap-2 md:gap-3 xl:gap-5 flex-wrap">
        {children}
      </div>
    )
  );
};
