import { IoMdSave } from 'react-icons/io';
import { TbTrashFilled } from 'react-icons/tb';
import { PiPlusBold } from 'react-icons/pi';
import { IoMdArrowBack } from 'react-icons/io';

import React from 'react';

export const tools = [
  {
    text: 'Salvar',
    icon: <IoMdSave className="text-xl" />,
  },
  {
    text: 'Salvar e continuar',
    icon: <IoMdSave className="text-xl" />,
  },
  {
    text: 'Apagar',
    icon: <TbTrashFilled className="text-lg" />,
  },
  {
    text: 'novo',
    icon: <PiPlusBold className="text-xl" />,
  },
  {
    text: 'voltar',
    icon: <IoMdArrowBack className="text-lg" />,
  },
];
