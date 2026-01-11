import React, { useMemo } from 'react';
import { motion } from 'framer-motion'; 
import CardFront from './CardFront';
import CardBack from './CardBack';
import styles from './CardAnimate.module.css';

const CarouselCard = ({ data, offset, isActive, isFlipped, onClick }) => {
  const X_DIST = 105; 
  const ROTATION = 20; 
  const SCALE_SIDE = 0.85; 

  const style = useMemo(() => {
    const xOffset = offset * X_DIST;
    const scale = isActive ? 1 : SCALE_SIDE;
    const opacity = isActive ? 1 : 0.5;
    const zIndex = isActive ? 10 : 5;
    const rotateY = isActive ? 0 : (offset > 0 ? -ROTATION : ROTATION);

    return {
      transform: `translateX(${xOffset}%) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex,
      opacity
    };
  }, [offset, isActive]);

  return (
    <div 
      className={styles.cardWrapper} 
      style={style}
      onClick={onClick}
    >
      <motion.div 
        className={styles.cardInner}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          duration: 2.3, // FLIP DURATION: 1.2s
          ease: [0.7, 0, 0.5, 1],
          delay: 0
        }}
      >
        <CardFront data={data} />
        
        <CardBack 
          title={data.category} 
          isActive={isActive}
          isFlipped={isFlipped}
        />
      </motion.div>
    </div>
  );
};

export default CarouselCard;