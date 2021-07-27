import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import styles from './page.module.css';
type Props = {
  page: number;
  total: number;
};

function Paging({ page, total }: Props) {
  const history = useHistory();
  const location = useLocation();

  const handleControlPage = (page: number) => {
    history.push({
      pathname: location.pathname,
      search: `?page=${page}`,
    });
  };

  return (
    <div className={styles.paging}>
      <div className={styles.left} onClick={() => handleControlPage(page - 1 < 1 ? 1 : page - 1)}>
        &lt;
      </div>
      <div className={styles.page}>
        {page} / {total}
      </div>
      <div
        className={styles.right}
        onClick={() => handleControlPage(page + 1 > total ? total : page + 1)}
      >
        &gt;
      </div>
    </div>
  );
}

export default Paging;
