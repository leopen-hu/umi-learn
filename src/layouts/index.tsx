import React, { ReactChildren, ReactElement, FC } from 'react';
import { useLocation } from 'umi';
import styles from './index.less';

type Props = {};

export default ({ children }: { children: ReactChildren }) => {
  const location = useLocation();
  const currentPathName: string = location.pathname;
  const testPagePathName: string = '/testPage';

  const baseLayout: ReactElement = (
    <div>
      <h1 className={styles.title}>layout-Index</h1>
      {children}
    </div>
  );

  const testLayout: ReactElement = (
    <div>
      <h1 className={styles.title}>layout-Test</h1>
      {children}
    </div>
  );

  return currentPathName === testPagePathName ? testLayout : baseLayout;
};
