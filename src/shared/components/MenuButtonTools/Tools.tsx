import { IoMdSave } from 'react-icons/io';
import { TbTrashFilled } from 'react-icons/tb';
import { BsPlus } from 'react-icons/bs';
import { IoMdArrowBack } from 'react-icons/io';

import React from 'react';

export const tools = [
  {
    text: 'Salvar',
    visible: true,
    icon: <IoMdSave className="text-xl" />,
  },
  {
    text: 'Salvar e continuar',
    visible: true,
    icon: <IoMdSave className="text-xl" />,
  },
  {
    text: 'Apagar',
    visible: true,
    icon: <TbTrashFilled className="text-lg" />,
  },
  {
    text: 'novo',
    visible: true,
    icon: <BsPlus className="text-2xl" />,
  },

  {
    text: 'voltar',
    visible: true,
    icon: <IoMdArrowBack className="text-lg" />,
  },
];
