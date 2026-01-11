import React from 'react';
import styles from './CardAnimate.module.css';

const CardFront = ({ data }) => {
  return (
    <div className={`${styles.cardFace} ${styles.cardFaceFront}`}>
      <div className={styles.imageArea} style={{ borderColor: data.theme }}>
        <img src={data.image} alt={data.title} />
      </div>
      
      <div className={styles.contentArea}>
        <div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
          {data.stats.map((s, i) => (
             <div key={i}>
               <div style={{ fontSize: '0.7rem', color: data.theme, letterSpacing: '1px' }}>{s.label}</div>
               <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{s.value}</div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardFront;