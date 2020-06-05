import React, { FC } from 'react';
import SimpleSwitch from './simpleSwitch';
import MultipleSwitch from './multipleSwitch';
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
      switcher = <SimpleSwitch locales={allLocales as [string, string]} />;
      break;
    default:
      switcher = <MultipleSwitch />;
      break;
  }

  return <div className={className}>{switcher}</div>;
};
