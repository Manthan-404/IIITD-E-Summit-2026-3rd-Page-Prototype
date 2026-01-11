import React from 'react';

// --- 1. THE GEM (Table-Cut Geometry) ---
export const GemIcon = ({ size = 100, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="mainFaceGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFCC80" />
        <stop offset="40%" stopColor="#E91E63" />
        <stop offset="100%" stopColor="#C2185B" />
      </linearGradient>
      <linearGradient id="lightBevel" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFD54F" />
        <stop offset="100%" stopColor="#FFA726" />
      </linearGradient>
      <linearGradient id="shadowBevel" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#C2185B" />
        <stop offset="100%" stopColor="#880E4F" />
      </linearGradient>
      <linearGradient id="frameGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5E35B1" />
        <stop offset="100%" stopColor="#311B92" />
      </linearGradient>
    </defs>

    {/* Frame */}
    <path d="M50 5 L95 28 V92 L50 115 L5 92 V28 Z" fill="#1A1025" stroke="url(#frameGrad)" strokeWidth="6" strokeLinejoin="round"/>
    <path d="M5 60 L12 55 V65 Z" fill="#5D437E" />
    <path d="M95 60 L88 55 V65 Z" fill="#5D437E" />

    {/* Gemstone */}
    <g transform="translate(0, 0)"> 
      <path d="M50 10 L90 30 V90 L50 110 L10 90 V30 Z" fill="#4A148C" />
      <path d="M10 30 L50 10 L35 35 L20 45 Z" fill="url(#lightBevel)" /> 
      <path d="M50 10 L90 30 L80 45 L65 35 Z" fill="#EC407A" /> 
      <path d="M10 30 L10 90 L20 75 L20 45 Z" fill="#F48FB1" opacity="0.8" />
      <path d="M90 90 L50 110 L65 85 L80 75 Z" fill="url(#shadowBevel)" />
      <path d="M50 110 L10 90 L20 75 L35 85 Z" fill="#AD1457" />
      <path d="M90 30 L90 90 L80 75 L80 45 Z" fill="#880E4F" />
      <path d="M35 35 L65 35 L80 45 L80 75 L65 85 L35 85 L20 75 L20 45 Z" fill="url(#mainFaceGrad)" stroke="#F8BBD0" strokeWidth="0.5" strokeOpacity="0.5"/>
      <path d="M35 35 L65 35" stroke="white" strokeWidth="2" strokeOpacity="0.8" strokeLinecap="round" />
      <path d="M25 40 L45 50" stroke="white" strokeWidth="3" strokeOpacity="0.4" strokeLinecap="round" />
    </g>
  </svg>
);

// --- 2. THE SINGLE KATANA (Centered Geometry) ---
// Note: Geometry adjusted so the Guard is at center (Y=110)
export const KatanaIcon = ({ width = 40, height = 220, className = "", style }) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 40 220" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs>
      <linearGradient id="bladeGradVert" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#E2E8F0" />
        <stop offset="50%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
      <filter id="katanaShadow">
        <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.5"/>
      </filter>
    </defs>
    
    <g filter="url(#katanaShadow)">
      {/* Handle (Tsuka) - Now starts from center (110) downwards */}
      <rect x="14" y="115" width="12" height="55" rx="2" fill="#1A1025" stroke="#333" strokeWidth="0.5" />
      
      {/* Diamond Wrap Pattern */}
      <path d="M20 120 L24 124 L20 128 L16 124 Z" fill="#ECEFF1" opacity="0.8"/>
      <path d="M20 130 L24 134 L20 138 L16 134 Z" fill="#ECEFF1" opacity="0.8"/>
      <path d="M20 140 L24 144 L20 148 L16 144 Z" fill="#ECEFF1" opacity="0.8"/>
      <path d="M20 150 L24 154 L20 158 L16 154 Z" fill="#ECEFF1" opacity="0.8"/>
      <path d="M20 160 L24 164 L20 168 L16 164 Z" fill="#ECEFF1" opacity="0.8"/>

      {/* Pommel (End Cap) */}
      <rect x="13" y="170" width="14" height="5" fill="#FFB300" />

      {/* Guard (Tsuba) - CENTERED AT Y=110 */}
      <rect x="8" y="108" width="24" height="8" rx="1" fill="#FFB300" stroke="#E65100" strokeWidth="0.5" />

      {/* Blade - Goes Upwards from 108 */}
      <path 
        d="M16 109 
           Q 10 50, 16 10 
           L 20 0 
           L 24 10 
           Q 30 50, 24 109 
           Z" 
        fill="url(#bladeGradVert)" 
        stroke="#546E7A" strokeWidth="0.5"
      />
      
      {/* Hamon */}
      <path 
        d="M18 105 Q 14 50, 19 20" 
        stroke="#CFD8DC" strokeWidth="1" strokeDasharray="4 2" opacity="0.6" fill="none"
      />
    </g>
  </svg>
);

// --- 3. THE GEAR ---
export const GearIcon = ({ className, style, color = "currentColor", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="8" strokeDasharray="10 4" />
    <circle cx="50" cy="50" r="25" stroke={color} strokeWidth="2" />
    <path d="M50 25 L50 10" stroke={color} strokeWidth="4" />
    <path d="M50 90 L50 75" stroke={color} strokeWidth="4" />
    <path d="M25 50 L10 50" stroke={color} strokeWidth="4" />
    <path d="M90 50 L75 50" stroke={color} strokeWidth="4" />
    <circle cx="50" cy="50" r="10" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" />
  </svg>
);