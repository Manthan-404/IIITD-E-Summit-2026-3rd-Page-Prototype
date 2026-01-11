# IIITD E-Summit 2026 - 3rd Page Prototype

This repository contains the high-fidelity animation prototype designed for the **3rd Scroll Page** of the **IIITD E-Summit 2026** website.

It features a custom-built, interactive 3D card carousel with complex SVG animations (Katanas, Gems, Gears) powered by React and Framer Motion.

## 🚀 Overview

* **Tech Stack:** React, Framer Motion, CSS Modules.
* **Key Animation:** "Scissor Snip" sword reveal sequence with synchronized gear rotation and card flipping physics.

## ✨ Features

* **Custom SVG Assets:** Hand-coded SVGs for Katanas (with curved blades & hamon details), Hexagonal Gems, and Sci-Fi Gears.
* **Sequenced Animation:**
    * State 1: Locked/Covered state with breathing gear animations.
    * State 2 (Interaction): Swords rotate and "snip" (135° → 110° → 135°).
    * State 3: Card flips 180° to reveal content.
* **Responsive Design:** Fully fluid layout using Framer Motion's `layout` prop.

## 🛠️ Installation & Run
Install react using node js and then copy all of these files to the folder.

1.  **Clone the repository**
    ```bash
    git clone <your-repo-url>
    ```

2.  **Install dependencies**
    ```bash
    npm install framer-motion lucide-react
    ```

3.  **Start the development server**
    ```bash
    npm start
    ```

## 📂 Project Structure

* `CarouselCard.jsx` - Handles the 3D flip logic and layout.
* `CardBack.jsx` - Contains the complex "Cover" animation (Swords/Gears).
* `assets.jsx` - Stores the custom SVG component definitions.
* `CardAnimate.module.css` - Scoped styles for the 3D perspective and gradients.

---
*Prototype developed for IIITD E-Summit 2026.*
