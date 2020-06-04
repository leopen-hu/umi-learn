import React, { FC } from 'react';
import SimpleSwitcher from './simpleSwitcher';
import MultipleSwitcher from './multipleSwitcher';
import { getAllLocales } from 'umi';

export interface LangSwitchProps {
  className: string;
}

export default ({ className }: LangSwitchProps) => {
  const allLocales: string[] = getAllLocales();

  let switcher = <div></div>;

  switch (allLocales.length) {
    case 0:
    case 1:
      break;
    case 2:
      switcher = <SimpleSwitcher locales={allLocales as [string, string]} />;
      break;
    default:
      switcher = <MultipleSwitcher />;
      break;
  }

  return <div className={className}>{switcher}</div>;
};
