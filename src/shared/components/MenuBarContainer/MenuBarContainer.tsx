import React, { useContext } from 'react';
import { MenuInput } from '../MenuInput/MenuInput.tsx';
import { MenuButton } from '../MenuButton/MenuButton.tsx';
import { TMenuButton } from '../../types/MenuButton.ts';
import { themeContext } from '../../../contexts/ThemeContext/context.ts';
import { MenuButtonTools } from '../MenuButtonTools/MenuButtonTools.tsx';
import { MenuContainerTools } from '../MenuContainerTools/MenuContainerTools.tsx';
import { tools } from '../MenuButtonTools/Tools.tsx';
import { FocusTool } from '../../../contexts/FocusTool/index.tsx';

export const MenuBarContainer: React.FC<TMenuButton> = ({
  visible,
  text,
  tVisible,
}) => {
  const { light } = useContext(themeContext);
  return (
    <FocusTool>
      <div
        className={`${light ? `bg-white` : `bg-zinc-700`} w-full p-3.5 shadow-md min-h-16 rounded-md flex justify-between`}
      >
        {<MenuInput visible={visible} />}
        {<MenuButton visible={visible} text={text} />}
        <MenuContainerTools visible={tVisible}>
          {tools.map((tool) => {
            return (
              <MenuButtonTools
                key={tool.text}
                text={tool.text}
                icon={tool.icon}
              />
            );
          })}
        </MenuContainerTools>
      </div>
    </FocusTool>
  );
};
