import React from 'react';

export const MenuInput: React.FC<{ visible?: boolean }> = ({
  visible = false,
}) => {
  {
    return (
      visible && (
        <input
          placeholder="Pesquisar..."
          type="search"
          className="outline-none text-lg border rounded-r-md p-2 font-medium sm:w-96"
        />
      )
    );
  }
};
