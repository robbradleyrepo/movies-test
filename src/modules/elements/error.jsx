import React from 'react';
import styles from '../../styles/MoviesList.module.css';

const ErrorMessage = ({ message, onReload }) => {
  return (
    <div className={styles.error_container}>
      <div className={styles.error_message}>{message}</div>
      <button
        onClick={onReload}
      >
        Reload Page
      </button>
    </div>
  );
};

export default ErrorMessage;
