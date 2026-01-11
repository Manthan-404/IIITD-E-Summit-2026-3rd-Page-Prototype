import React, { useState, useEffect } from 'react';
import CarouselCard from './CarouselCard';
import Controls from './Controls';
import { cardData } from './data';
import styles from './CardAnimate.module.css';

const CardAnimate = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === ' ' || e.key === 'Enter') toggleFlip();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getIndex = (offset) => {
    const len = cardData.length;
    return (activeIndex + offset + len) % len;
  };

  const handleNext = () => {
    setIsFlipped(false);
    setActiveIndex((prev) => (prev + 1) % cardData.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setActiveIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.scene}>
        {[-1, 0, 1].map((offset) => {
          const itemIndex = getIndex(offset);
          const item = cardData[itemIndex];
          const isActive = offset === 0;

          return (
            <CarouselCard
              key={`${item.id}-${offset}`} 
              data={item}
              offset={offset}
              isActive={isActive}
              isFlipped={isActive ? isFlipped : false}
              onClick={isActive ? toggleFlip : undefined}
            />
          );
        })}
      </div>

      <Controls 
        onNext={handleNext} 
        onPrev={handlePrev} 
        onToggle={toggleFlip} 
        isFlipped={isFlipped}
      />
    </div>
  );
};

export default CardAnimate;