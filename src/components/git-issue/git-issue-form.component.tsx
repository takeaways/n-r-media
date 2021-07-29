import React, { useCallback } from 'react';
import { Octokit } from '@octokit/core';
import styles from './git-issue-form.module.css';
import { useState } from 'react';
import { useLoadingDispatch } from '../../providers/loading';

type Props = {
  onToggle?: () => void;
};
function GitIssueForm({ onToggle }: Props) {
  const setLoading = useLoadingDispatch();

  const [state, setState] = useState({
    title: '',
    body: '',
    labels: [] as string[],
  });

  const handleCheck = useCallback<React.ChangeEventHandler<HTMLInputElement>>(e => {
    e.stopPropagation();
    const { value, checked } = e.target;
    setState(prev => {
      const labels = [...prev.labels];
      if (checked) {
        labels.push(value);
      } else {
        labels.splice(
          labels.findIndex(label => label === value),
          1,
        );
      }
      return {
        ...prev,
        labels,
      };
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = e;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitIssue = async (e: React.FormEvent) => {
    const octokit = new Octokit({
      auth: process.env.REACT_APP_ISSUE ?? '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',
    });
    e.preventDefault();

    if (onToggle) {
      if (confirm('문의를 남기시겠습니까?')) {
        setLoading(true);
        try {
          await octokit.request('POST /repos/takeaways/n-r-media/issues', {
            owner: 'takeaways',
            repo: 'n-r-media',
            assignees: ['takeaways'],
            ...state,
          });
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
          onToggle();
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmitIssue} className={styles.form}>
      <div className={styles.title}>
        <i className="fab fa-github"></i>
        <span>문의 사항을 남겨 주세요...</span>
      </div>
      <div className={`${styles.formGroup} ${styles.labels}`}>
        <label>
          <input name="labels" type="checkbox" value={'bug'} hidden onChange={handleCheck} />
          <span>버그</span>
        </label>
        <label>
          <input name="labels" type="checkbox" value={'question'} hidden onChange={handleCheck} />
          <span>문의</span>
        </label>
        <label>
          <input name="labels" type="checkbox" value={'etc'} hidden onChange={handleCheck} />
          <span>기타</span>
        </label>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="title">제목</label>
        <input
          name="title"
          id="title"
          type="text"
          placeholder="제목을 입력하세요..."
          value={state.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">내용</label>
        <textarea
          name="body"
          id="description"
          placeholder="내용을 입력하세요..."
          required
          value={state.body}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className={styles.submit} type="submit">
        문의하기
      </button>
    </form>
  );
}

export default GitIssueForm;
