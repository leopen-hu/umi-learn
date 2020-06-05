import React, { ReactElement } from 'react';
import { useIntl, getLocale, setLocale } from 'umi';
import umi from 'umi';
import { Button } from 'antd';

export interface SimpleLangSwitchProps {
  locales: [string, string];
}

export default ({ locales }: SimpleLangSwitchProps) => {
  console.log(umi, useIntl, getLocale, setLocale);
  const currentLocale = getLocale();

  const handleClick = () => {
    const nextLocale = locales.find(
      locale => locale !== currentLocale,
    ) as string;

    setLocale(nextLocale, false);
  };

  return (
    <Button onClick={handleClick}>
      {useIntl().formatMessage({ id: 'app.nextLang' })}
    </Button>
  );
};
