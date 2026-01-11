import React from 'react';
import { motion } from 'framer-motion';
import styles from './CardAnimate.module.css';
import { GemIcon, GearIcon, KatanaIcon } from './assets';

const CardBack = ({ title, isActive, isFlipped }) => {
  return (
    <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
      
      {/* --- MECHANISM CONTAINER (Absolute Center) --- */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 0 }}>
        
        {/* === LEFT GEAR === */}
        <motion.div
          style={{ position: 'absolute', left: '30%', zIndex: -1, color: '#607d8b' }}
          animate={{ rotate: (isActive && isFlipped) ? -180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <GearIcon style={{ width: '50px', height: '50px', opacity: 0.6 }} />
        </motion.div>

        {/* === RIGHT GEAR === */}
        <motion.div
          style={{ position: 'absolute', right: '30%', zIndex: -1, color: '#607d8b' }}
          animate={{ rotate: (isActive && isFlipped) ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <GearIcon style={{ width: '50px', height: '50px', opacity: 0.6 }} />
        </motion.div>

        {/* === LEFT SWORD === */}
        <motion.div
          style={{ position: 'absolute', transformOrigin: 'center center', zIndex: 0 }}
          initial={{ rotate: 135 }}
          animate={{ rotate: (isActive && isFlipped) ? [135, 110, 135] : 135 }} 
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Katana centered at Guard, so rotation crosses at Guard */}
          <KatanaIcon width={50} height={260} />
        </motion.div>

        {/* === RIGHT SWORD === */}
        <motion.div
          style={{ position: 'absolute', transformOrigin: 'center center', zIndex: 0 }}
          initial={{ rotate: -135 }}
          animate={{ rotate: (isActive && isFlipped) ? [-135, -110, -135] : -135 }} 
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Mirrored horizontally for symmetry */}
          <div style={{ transform: 'scaleX(-1)' }}>
            <KatanaIcon width={50} height={260} />
          </div>
        </motion.div>

        {/* === CENTRAL GEM (Now perfectly centered on intersection) === */}
        <div style={{ position: 'absolute', zIndex: 10 }}>
          <GemIcon size={100} />
        </div>

      </div>

      {/* Title pushed down to bottom to avoid overlapping the centered gem */}
      <div className={styles.categoryLabel} style={{ marginTop: 'auto', paddingBottom: '30px', position: 'relative', zIndex: 20 }}>
        {title}
      </div>
    </div>
  );
};

export default CardBack;