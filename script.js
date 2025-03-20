// ----------------------
// Data Setup
// ----------------------

// Physics chapters – use full image URLs in your implementation
const physicsChapters = [
  { name: "1 U & D", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-ruler.png&w=256&q=75" },
  { name: "2 Vectors", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-cartesian-axes.png&w=256&q=75" },
  { name: "3 Kinematics-1D", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-physics.png&w=256&q=75" },
  { name: "4 Kinematics-2D", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-luggage.png&w=256&q=75" },
  { name: "5 NLM", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-gravitation.png&w=256&q=75" },
  { name: "6 Friction", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-forcepng&w=256&q=75" },
  { name: "7 Circular motion", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-london-eye.png&w=256&q=75" },
  { name: "8 WPE", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-long-throw.png&w=256&q=75" },
  { name: "9 Center of Mass", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-spring.png&w=256&q=75" },
  { name: "10 Rotational Mech.", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-rotation.png&w=256&q=75" },
  { name: "11 Gravitation", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-handpng&w=256&q=75" },
  { name: "12 SHM", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-physics.png&w=256&q=75" },
  { name: "13 Calorimetry", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-Calorimetry.png&w=256&q=75" },
  { name: "14 Elasticity", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-elasticity.png&w=256&q=75" },
  { name: "15 Thermal Exp.", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-heat-system.png&w=256&q=75" },
  { name: "16 Heat transfer", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-hot-foodpng&w=256&q=75" },
  { name: "17 KTG", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-Kinetic-Theory-of-Gases-icon.png&w=256&q=75" },
  { name: "18 Thermodynamics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-thermodynamics.png&w=256&q=75" },
  { name: "19 Wave on string", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-physics-1.png&w=256&q=75" },
  { name: "20 Sound waves", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-voice.png&w=256&q=75" },
  { name: "21 Fluid Mechanics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-fluid-mechanicspng&w=256&q=75" },
  { name: "22 Electrostatic", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-magnetic-fields.png&w=256&q=75" },
  { name: "23 Current Electricity", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-electric-current.png&w=256&q=75" },
  { name: "24 Capacitance", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-capacitor.png&w=256&q=75" },
  { name: "25 MEC", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-Magnetic.png&w=256&q=75" },
  { name: "26 Magnetism", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-magnetic-1.png&w=256&q=75" },
  { name: "27 EMI", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-EMI).png&w=256&q=75" },
  { name: "28 AC", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-circuit.png&w=256&q=75" },
  { name: "29 Atomic Structure", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-atom.png&w=256&q=75" },
  { name: "30 Dual Nature", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-radiation.png&w=256&q=75" },
  { name: "31 X-Ray", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-x-rays.png&w=256&q=75" },
  { name: "32 Nuclear physics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-nuclear-bomb.png&w=256&q=75" },
  { name: "33 Radioactivity", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-atom.png&w=256&q=75" },
  { name: "34 Ray Optics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-prism.png&w=256&q=75" },
  { name: "35 EM Waves", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-electromagnetic.png&w=256&q=75" },
  { name: "36 Wave Optics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-optic.png&w=256&q=75" },
  { name: "37 Errors", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-graphic-designpng&w=256&q=75" },
  { name: "38 Semiconductor", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-ram.png&w=256&q=75" }
];

// Chemistry chapters (use full URLs in your implementation)
const chemistryChapters = [
  { name: "Atomic Structure", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-atom.png&w=256&q=75" },
  { name: "Periodic Table", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-periodic-table%20(1).png&w=256&q=75" },
  { name: "Chemical Bonding", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-chemical-bond.png&w=256&q=75" },
  { name: "Mole Concept", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-mass.png&w=256&q=75" },
  { name: "States of Matter", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-state-of-matter.png&w=256&q=75" },
  { name: "Thermodynamics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-thermodynamic.png&w=256&q=75" },
  { name: "Thermochemistry", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/…-thermodynamics.png&w=256&q=75" },
  { name: "Chemical Equilibrium", img: "https://app.esaral.com/_next/image?url=https%3A%2_
