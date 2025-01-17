import React, { useContext } from 'react';
import { MenuInput } from '../MenuInput/MenuInput';
import { MenuButton } from '../MenuButton/MenuButton';
import { themeContext } from '../../../contexts/ThemeContext/context';
import { MenuButtonTool } from '../MenuButtonTools/MenuButtonTool';
import { MenuContainerTools } from '../MenuContainerTools/MenuContainerTools';
import { tools } from '../MenuButtonTools/Tools';
import { FocusTool } from '../../../contexts/FocusTool/index';
import { TMenuButton } from '../../types/MenuButton';

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
              <MenuButtonTool
                key={tool.text}
                text={tool.text}
                icon={tool.icon}
                type={tool.type}
                loading={tool.loading}
              />
            );
          })}
        </MenuContainerTools>
      </div>
    </FocusTool>
  );
};
