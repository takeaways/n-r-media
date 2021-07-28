import React from 'react';
import style from './git-issue.module.css';

import useModal from '../../hooks/useModal';
import GitIssueForm from './git-issue-form.component';

function GitIssue() {
  const [onToggle, modal] = useModal(<GitIssueForm />);

  const handleOpenModal = () => {
    onToggle();
  };

  return (
    <>
      <button className={style.githubBtn} onClick={handleOpenModal}>
        <i className="fab fa-github"></i>
        <span>issue</span>
      </button>
      {modal}
    </>
  );
}

export default GitIssue;
