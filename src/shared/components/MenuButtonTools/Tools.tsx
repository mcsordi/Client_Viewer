import { IoMdSave } from 'react-icons/io';
import { TbTrashFilled } from 'react-icons/tb';
import { PiPlusBold } from 'react-icons/pi';
import { IoMdArrowBack } from 'react-icons/io';
import * as types from '../MenuButtonTools/useReducer/action.ts';

import React from 'react';

export const tools = [
  {
    text: 'Salvar',
    icon: <IoMdSave className="text-xl" />,
    type: types.SAVE_TYPE,
  },
  {
    text: 'Salvar e voltar',
    icon: <IoMdSave className="text-xl" />,
    type: types.SAVE_BACK_TYPE,
  },
  {
    text: 'Apagar',
    icon: <TbTrashFilled className="text-lg" />,
    type: types.DELETE_TYPE,
  },
  {
    text: 'novo',
    icon: <PiPlusBold className="text-xl" />,
    type: types.NEW_TYPE,
  },
  {
    text: 'voltar',
    icon: <IoMdArrowBack className="text-lg" />,
    type: types.BACK_TYPE,
  },
];
