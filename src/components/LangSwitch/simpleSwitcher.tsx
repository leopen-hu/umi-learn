import React, { ReactElement } from 'react';
import { useIntl, getLocale, setLocale } from 'umi';
import { Button } from 'antd';

export interface SimpleLangSwitchProps {
  locales: [string, string];
}

export default ({ locales }: SimpleLangSwitchProps) => {
  const currentLocale = getLocale();

  const handleClick = () => {
    const nextLocale = locales.find(
      locale => locale !== currentLocale,
    ) as string;

    setLocale(nextLocale, true);
    console.log(`currentLang: ${nextLocale}`);
  };

  return (
    <Button onClick={handleClick}>
      {useIntl().formatMessage({ id: 'app.nextLang' })}
    </Button>
  );
};
