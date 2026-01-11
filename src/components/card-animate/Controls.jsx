import React from 'react';
import styles from './CardAnimate.module.css';

const Controls = ({ onNext, onPrev, onToggle, isFlipped }) => {
  return (
    <div className={styles.controlsContainer}>
      <button className={styles.navBtn} onClick={onPrev}>
        &lt;&lt; Prev
      </button>
      
      <button className={styles.navBtn} onClick={onToggle}>
        {isFlipped ? 'Close Info' : 'View Stats'}
      </button>
      
      <button className={styles.navBtn} onClick={onNext}>
        Next &gt;&gt;
      </button>
    </div>
  );
};

export default Controls;