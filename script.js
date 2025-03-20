// ----------------------
// Data Setup
// ----------------------

// Physics Chapters (use full URLs in your implementation)
const physicsChapters = [
  { name: "1 U & D", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-ruler.png&w=256&q=75" },
  { name: "2 Vectors", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-cartesian-axes.png&w=256&q=75" },
  { name: "3 Kinematics-1D", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-physics.png&w=256&q=75" },
  { name: "4 Kinematics-2D", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-luggage.png&w=256&q=75" },
  { name: "5 NLM", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-gravitation.png&w=256&q=75" },
  { name: "6 Friction", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-forcepng&w=256&q=75" },
  { name: "7 Circular motion", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-london-eye.png&w=256&q=75" },
  { name: "8 WPE", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-long-throw.png&w=256&q=75" },
  { name: "9 Center of Mass", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-spring.png&w=256&q=75" },
  { name: "10 Rotational Mech.", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-rotation.png&w=256&q=75" },
  { name: "11 Gravitation", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-handpng&w=256&q=75" },
  { name: "12 SHM", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-physics.png&w=256&q=75" },
  { name: "13 Calorimetry", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-Calorimetry.png&w=256&q=75" },
  { name: "14 Elasticity", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-elasticity.png&w=256&q=75" },
  { name: "15 Thermal Exp.", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-heat-system.png&w=256&q=75" },
  { name: "16 Heat transfer", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-hot-foodpng&w=256&q=75" },
  { name: "17 KTG", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-Kinetic-Theory-of-Gases-icon.png&w=256&q=75" },
  { name: "18 Thermodynamics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-thermodynamics.png&w=256&q=75" },
  { name: "19 Wave on string", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-physics-1.png&w=256&q=75" },
  { name: "20 Sound waves", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-voice.png&w=256&q=75" },
  { name: "21 Fluid Mechanics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-fluid-mechanicspng&w=256&q=75" },
  { name: "22 Electrostatic", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-magnetic-fields.png&w=256&q=75" },
  { name: "23 Current Electricity", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-electric-current.png&w=256&q=75" },
  { name: "24 Capacitance", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-capacitor.png&w=256&q=75" },
  { name: "25 MEC", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-Magnetic.png&w=256&q=75" },
  { name: "26 Magnetism", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-magnetic-1.png&w=256&q=75" },
  { name: "27 EMI", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-EMI).png&w=256&q=75" },
  { name: "28 AC", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-circuit.png&w=256&q=75" },
  { name: "29 Atomic Structure", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-atom.png&w=256&q=75" },
  { name: "30 Dual Nature", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-radiation.png&w=256&q=75" },
  { name: "31 X-Ray", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-x-rays.png&w=256&q=75" },
  { name: "32 Nuclear physics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-nuclear-bomb.png&w=256&q=75" },
  { name: "33 Radioactivity", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-atom.png&w=256&q=75" },
  { name: "34 Ray Optics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-prism.png&w=256&q=75" },
  { name: "35 EM Waves", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-electromagnetic.png&w=256&q=75" },
  { name: "36 Wave Optics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-optic.png&w=256&q=75" },
  { name: "37 Errors", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-graphic-designpng&w=256&q=75" },
  { name: "38 Semiconductor", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-ram.png&w=256&q=75" }
];

// Chemistry Chapters
const chemistryChapters = [
  { name: "Atomic Structure", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-atom.png&w=256&q=75" },
  { name: "Periodic Table", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-periodic-table(1).png&w=256&q=75" },
  { name: "Chemical Bonding", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-chemical-bond.png&w=256&q=75" },
  { name: "Mole Concept", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-mass.png&w=256&q=75" },
  { name: "States of Matter", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-state-of-matter.png&w=256&q=75" },
  { name: "Thermodynamics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-thermodynamic.png&w=256&q=75" },
  { name: "Thermochemistry", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-thermodynamics.png&w=256&q=75" },
  { name: "Chemical Equilibrium", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-exchange.png&w=256&q=75" },
  { name: "Ionic Equilibrium", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-ph-meter.png&w=256&q=75" },
  { name: "Redox Reaction", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-radiation.png&w=256&q=75" },
  { name: "IUPAC", img: "https://via.placeholder.com/80?text=IUPAC" },
  { name: "GOC", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-potassium-sorbate.png&w=256&q=75" },
  { name: "Isomerism", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-chemistry(5).png&w=256&q=75" },
  { name: "Hydrocarbons", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-molecule(3).png&w=256&q=75" },
  { name: "Environmental Chemistry", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-pollution.png&w=256&q=75" },
  { name: "Hydrogen", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-hydrogen.png&w=256&q=75" },
  { name: "s-Block Elements", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-hydrogen(1).png&w=256&q=75" },
  { name: "p-Block Elements", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-aluminum.png&w=256&q=75" },
  { name: "The Solid State", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-solid.png&w=256&q=75" },
  { name: "Liquid Solution", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-glass.png&w=256&q=75" },
  { name: "Chemical Kinetics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-catalyst.png&w=256&q=75" },
  { name: "Nuclear Chemistry", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-nuclear-energy.png&w=256&q=75" },
  { name: "Radioactivity", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-radiation.png&w=256&q=75" },
  { name: "Electro Chemistry", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-electrophoresis.png&w=256&q=75" },
  { name: "Surface Chemistry", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-rust.png&w=256&q=75" },
  { name: "Coordination Compounds", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-molecule(1).png&w=256&q=75" },
  { name: "Metallurgy", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-metallurgy.png&w=256&q=75" },
  { name: "d & f Block", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-scandium.png&w=256&q=75" },
  { name: "Optical Isomerism", img: "https://via.placeholder.com/80?text=Optical+Isomerism" },
  { name: "Halogen Derivative", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-adrenaline.png&w=256&q=75" },
  { name: "Alcohol, Phenol, Ether", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-adrenaline.png&w=256&q=75" },
  { name: "Aldehydes, Ketones", img: "https://via.placeholder.com/80?text=Aldehydes+Ketones" },
  { name: "Oxidation Reduction", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-rust.png&w=256&q=75" },
  { name: "Carboxylic Acids & Amines", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-molecule.png&w=256&q=75" },
  { name: "Biomolecules", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-compound.png&w=256&q=75" },
  { name: "Polymers", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-nanotechnology.png&w=256&q=75" },
  { name: "Chem. In Everyday Life", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-dental-hygiene.png&w=256&q=75" },
  { name: "p-Block(15-18)", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-phosphorus.png&w=256&q=75" },
  { name: "Salt Analysis", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com/your-full-url-research.png&w=256&q=75" }
];





// Biology chapters array (Class XI + Class XII)
const biologyChapters = [
  // Class XI
  { name: "1. The Living World", img: "https://via.placeholder.com/80?text=Living+World" },
  { name: "2. Biological Classification", img: "https://via.placeholder.com/80?text=Biological+Classification" },
  { name: "3. Plant Kingdom", img: "https://via.placeholder.com/80?text=Plant+Kingdom" },
  { name: "4. Animal Kingdom", img: "https://via.placeholder.com/80?text=Animal+Kingdom" },
  { name: "5. Morphology of Flowering Plants", img: "https://via.placeholder.com/80?text=Morphology+of+Flowering+Plants" },
  { name: "6. Anatomy of Flowering Plants", img: "https://via.placeholder.com/80?text=Anatomy+of+Flowering+Plants" },
  { name: "7. Structural Organization in Animals", img: "https://via.placeholder.com/80?text=Structural+Organization+in+Animals" },
  { name: "8. Cell: The Unit of Life", img: "https://via.placeholder.com/80?text=Cell+Unit+of+Life" },
  { name: "9. Biomolecules", img: "https://via.placeholder.com/80?text=Biomolecules" },
  { name: "10. Cell Cycle and Cell Division", img: "https://via.placeholder.com/80?text=Cell+Cycle+%26+Division" },
  { name: "11. Photosynthesis in Higher Plants", img: "https://via.placeholder.com/80?text=Photosynthesis" },
  { name: "12. Respiration in Plants", img: "https://via.placeholder.com/80?text=Respiration+in+Plants" },
  { name: "13. Plant Growth and Development", img: "https://via.placeholder.com/80?text=Plant+Growth" },
  { name: "14. Breathing and Exchange of Gases", img: "https://via.placeholder.com/80?text=Breathing+%26+Exchange" },
  { name: "15. Body Fluids and Circulation", img: "https://via.placeholder.com/80?text=Body+Fluids+%26+Circulation" },
  { name: "16. Excretory Products and their Elimination", img: "https://via.placeholder.com/80?text=Excretory+Products" },
  { name: "17. Locomotion and Movement", img: "https://via.placeholder.com/80?text=Locomotion+%26+Movement" },
  { name: "18. Neural Control and Coordination", img: "https://via.placeholder.com/80?text=Neural+Control" },
  { name: "19. Chemical Coordination and Integration", img: "https://via.placeholder.com/80?text=Chemical+Coordination" },

  // Class XII
  { name: "1. Reproduction in Organism", img: "https://via.placeholder.com/80?text=Reproduction+in+Organism" },
  { name: "2. Sexual Reproduction in Flowering Plants", img: "https://via.placeholder.com/80?text=Sexual+Reproduction+in+Plants" },
  { name: "3. Human Reproduction", img: "https://via.placeholder.com/80?text=Human+Reproduction" },
  { name: "4. Reproductive Health", img: "https://via.placeholder.com/80?text=Reproductive+Health" },
  { name: "5. Principles of Inheritance and Variation", img: "https://via.placeholder.com/80?text=Inheritance+%26+Variation" },
  { name: "6. Molecular Basis of Inheritance", img: "https://via.placeholder.com/80?text=Molecular+Basis+of+Inheritance" },
  { name: "7. Evolution", img: "https://via.placeholder.com/80?text=Evolution" },
  { name: "8. Human Health and Diseases", img: "https://via.placeholder.com/80?text=Human+Health+%26+Diseases" },
  { name: "9. Strategies for Enhancement in Food Production", img: "https://via.placeholder.com/80?text=Food+Production" },
  { name: "10. Microbes in Human Welfare", img: "https://via.placeholder.com/80?text=Microbes+in+Welfare" },
  { name: "11. Biotechnology- Principles and Processes", img: "https://via.placeholder.com/80?text=Biotech+Principles" },
  { name: "12. Biotechnology and its Application", img: "https://via.placeholder.com/80?text=Biotech+Applications" },
  { name: "13. Organism and Population", img: "https://via.placeholder.com/80?text=Organism+%26+Population" },
  { name: "14. Ecosystem", img: "https://via.placeholder.com/80?text=Ecosystem" },
  { name: "15. Biodiversity and its Conservation", img: "https://via.placeholder.com/80?text=Biodiversity+Conservation" },
  { name: "16. Environmental Issues", img: "https://via.placeholder.com/80?text=Environmental+Issues" }
];



















// Subjects Data: Physics, Chemistry, Biology
const subjectsData = {
  "Physics": { 
    img: "https://via.placeholder.com/80?text=Physics", 
    chapters: physicsChapters 
  },
  "Chemistry": { 
    img: "https://via.placeholder.com/80?text=Chemistry", 
    chapters: chemistryChapters 
  },
  "Biology": { 
    img: "https://via.placeholder.com/80?text=Biology", 
    chapters: biologyChapters 
  }
};

// ----------------------
// Subtopics for NEET (6 tasks)
// ----------------------
const subtopics = [
  { key: "ncert", label: "NCERT", type: "checkbox" },
  { key: "referenceBook", label: "Reference Book", type: "checkbox" },
  { key: "modules", label: "Coaching Modules", type: "checkbox" },
  { key: "pyqs", label: "PYQ's", type: "checkbox" },
  { key: "assertionReason", label: "Assertion & Reasoning", type: "checkbox" },
  { key: "handwrittenNotes", label: "Handwritten Notes", type: "checkbox" }
];

// Default data for a chapter: all subtopics unchecked
const defaultChapterData = {};
subtopics.forEach(task => {
  defaultChapterData[task.key] = false;
});

// Local Storage Key
const STORAGE_KEY = "neetStudyData";

// Colors for subtopic backgrounds
const subtopicColors = ["var(--subtopic-color-1)", "var(--subtopic-color-2)", "var(--subtopic-color-3)"];

// ----------------------
// DOM Elements
// ----------------------
const subjectsView = document.getElementById("subjects-view");
const subjectsContainer = document.getElementById("subjects-container");
const chaptersView = document.getElementById("chapters-view");
const chaptersContainer = document.getElementById("chapters-container");
const subjectTitleElem = document.getElementById("subject-title");
const chapterDetailView = document.getElementById("chapter-detail-view");
const chapterTitleElem = document.getElementById("chapter-title");
const chapterImageElem = document.getElementById("chapter-image");
const progressFillElem = document.getElementById("progress-fill");
const progressPercentElem = document.getElementById("progress-percent");
const subtopicsContainer = document.getElementById("subtopics-container");

const backToSubjectsBtn = document.getElementById("back-to-subjects");
const backToChaptersBtn = document.getElementById("back-to-chapters");
const resetSubjectBtn = document.getElementById("reset-subject");
const markAllCompleteBtn = document.getElementById("mark-all-complete");
const resetChapterBtn = document.getElementById("reset-chapter");

let currentSubject = "";
let currentChapter = "";

// ----------------------
// Data Initialization
// ----------------------
function initializeData() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    const initData = {};
    for (let subject in subjectsData) {
      initData[subject] = {};
      subjectsData[subject].chapters.forEach(ch => {
        initData[subject][ch.name] = { ...defaultChapterData };
      });
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initData));
  }
}

function getData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function updateData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ----------------------
// Utility: Calculate Progress
// ----------------------
function calculateProgress(chapterData) {
  let total = subtopics.length;
  let completed = 0;
  subtopics.forEach(task => {
    if (chapterData[task.key] === true) {
      completed++;
    }
  });
  return Math.round((completed / total) * 100);
}

// ----------------------
// Rendering Functions
// ----------------------

// Render Subjects
function renderSubjects() {
  console.log("Rendering subjects...");
  subjectsContainer.innerHTML = "";
  for (let subject in subjectsData) {
    const subjectObj = subjectsData[subject];
    const card = document.createElement("div");
    card.classList.add("card");
    if (subject === "Physics") card.classList.add("subject-physics");
    else if (subject === "Chemistry") card.classList.add("subject-chemistry");
    else if (subject === "Biology") card.classList.add("subject-biology");

    card.innerHTML = `
      <img src="${subjectObj.img}" alt="${subject}">
      <h3>${subject}</h3>
    `;
    card.addEventListener("click", () => {
      currentSubject = subject;
      subjectTitleElem.textContent = subject;
      renderChapters(subject);
      subjectsView.classList.add("hidden");
      chaptersView.classList.remove("hidden");
    });
    subjectsContainer.appendChild(card);
  }
  console.log("Subjects rendered", subjectsContainer.children);
}

// Render Chapters
function renderChapters(subject) {
  chaptersContainer.innerHTML = "";
  const data = getData();
  subjectsData[subject].chapters.forEach(ch => {
    const chapterData = data[subject][ch.name];
    const progress = calculateProgress(chapterData);
    const card = document.createElement("div");
    card.classList.add("card", "chapter-card");
    if (subject === "Physics") card.classList.add("subject-physics");
    else if (subject === "Chemistry") card.classList.add("subject-chemistry");
    else if (subject === "Biology") card.classList.add("subject-biology");

    card.innerHTML = `
      <img src="${ch.img}" alt="${ch.name}">
      <div>
        <h3>${ch.name}</h3>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
      </div>
    `;
    card.addEventListener("click", () => {
      currentChapter = ch.name;
      renderChapterDetail(subject, ch.name);
      chaptersView.classList.add("hidden");
      chapterDetailView.classList.remove("hidden");
    });
    chaptersContainer.appendChild(card);
  });
}

// Render Chapter Detail
function renderChapterDetail(subject, chapterName) {
  chapterTitleElem.textContent = chapterName;
  const chObj = subjectsData[subject].chapters.find(x => x.name === chapterName);
  chapterImageElem.src = chObj ? chObj.img.replace("80", "100") : "https://via.placeholder.com/100?text=No+Image";
  
  const data = getData();
  const chapterData = data[subject][chapterName];
  const progress = calculateProgress(chapterData);
  progressFillElem.style.width = `${progress}%`;
  progressPercentElem.textContent = `${progress}%`;

  subtopicsContainer.innerHTML = "";
  subtopics.forEach((task, index) => {
    const div = document.createElement("div");
    div.classList.add("subtopic");
    let color = (index % 3 === 0) ? "var(--subtopic-color-1)" :
                (index % 3 === 1) ? "var(--subtopic-color-2)" : "var(--subtopic-color-3)";
    div.style.backgroundColor = color;

    const label = document.createElement("label");
    label.textContent = task.label;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = chapterData[task.key];
    input.addEventListener("click", e => e.stopPropagation());
    input.addEventListener("change", () => {
      chapterData[task.key] = input.checked;
      saveChapterData(subject, chapterName, chapterData);
    });
    div.addEventListener("click", () => {
      input.checked = !input.checked;
      chapterData[task.key] = input.checked;
      saveChapterData(subject, chapterName, chapterData);
    });

    div.appendChild(label);
    div.appendChild(input);
    subtopicsContainer.appendChild(div);
  });
}

// ----------------------
// Data Saving Function
// ----------------------
function saveChapterData(subject, chapterName, chapterData) {
  let data = getData();
  data[subject][chapterName] = chapterData;
  updateData(data);
  const progress = calculateProgress(chapterData);
  progressFillElem.style.width = `${progress}%`;
  progressPercentElem.textContent = `${progress}%`;
  renderChapters(subject);
}

// ----------------------
// Mark All Complete
// ----------------------
function markAllComplete(subject, chapterName) {
  let data = getData();
  let chapterData = data[subject][chapterName];
  subtopics.forEach(task => {
    chapterData[task.key] = true;
  });
  updateData(data);
  renderChapterDetail(subject, chapterName);
  renderChapters(subject);
}

// ----------------------
// Reset Chapter & Subject
// ----------------------
function resetChapter(subject, chapterName) {
  let data = getData();
  data[subject][chapterName] = { ...defaultChapterData };
  updateData(data);
  renderChapterDetail(subject, chapterName);
  renderChapters(subject);
}

function resetSubject(subject) {
  let data = getData();
  subjectsData[subject].chapters.forEach(ch => {
    data[subject][ch.name] = { ...defaultChapterData };
  });
  updateData(data);
  renderChapters(subject);
}

// ----------------------
// Event Listeners
// ----------------------
backToSubjectsBtn.addEventListener("click", () => {
  chaptersView.classList.add("hidden");
  document.getElementById("subjects-view").classList.remove("hidden");
});

backToChaptersBtn.addEventListener("click", () => {
  chapterDetailView.classList.add("hidden");
  chaptersView.classList.remove("hidden");
});

resetSubjectBtn.addEventListener("click", () => {
  if (currentSubject && confirm("Reset all progress for this subject?")) {
    resetSubject(currentSubject);
  }
});

markAllCompleteBtn.addEventListener("click", () => {
  if (currentSubject && currentChapter) {
    markAllComplete(currentSubject, currentChapter);
  }
});

resetChapterBtn.addEventListener("click", () => {
  if (currentSubject && currentChapter && confirm("Reset this chapter?")) {
    resetChapter(currentSubject, currentChapter);
  }
});

// ----------------------
// Data Initialization & Versioning
// ----------------------
const CURRENT_VERSION = '1.0';

function initializeData() {
  const storedVersion = localStorage.getItem("neetStudyVersion");
  if (storedVersion !== CURRENT_VERSION) {
    localStorage.clear();
    localStorage.setItem("neetStudyVersion", CURRENT_VERSION);
  }
  if (!localStorage.getItem(STORAGE_KEY)) {
    const initData = {};
    for (let subject in subjectsData) {
      initData[subject] = {};
      subjectsData[subject].chapters.forEach(ch => {
        initData[subject][ch.name] = { ...defaultChapterData };
      });
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initData));
  }
}

// ----------------------
// Initialization on DOMContentLoaded
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  initializeData();
  renderSubjects();
});
