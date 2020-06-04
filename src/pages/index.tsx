import React from 'react';
import { Link, useIntl } from 'umi';
import LangSwitch from '@/components/LangSwitch';
import styles from './index.less';

export default () => {
  const content: string = useIntl().formatMessage({ id: 'indexPage.content' });
  const targetLinkText = useIntl().formatMessage({ id: 'testPage.content' });

  return (
    <div>
      <h1 className={styles.title}>
        {content}
        <LangSwitch className={styles.langSwitch} />
      </h1>
      <Link to="/testPage">{targetLinkText}</Link>
    </div>
  );
};
