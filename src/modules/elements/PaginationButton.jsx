import React from 'react';
import styles from '../../styles/MoviesList.module.css';

const PaginationButton = ({ onClick, disabled, ariaLabel, children }) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
