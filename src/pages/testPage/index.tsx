import React from 'react';
import { Link, useIntl } from 'umi';
import styles from './index.less';

export default () => {
  const targetLinkText: string = useIntl().formatMessage({
    id: 'indexPage.content',
  });
  const content: string = useIntl().formatMessage({ id: 'testPage.content' });

  return (
    <div>
      <h1 className={styles.title}>{content}</h1>
      <Link to="/">{targetLinkText}</Link>
    </div>
  );
};
