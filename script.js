// ----------------------
// Data Setup
// ----------------------

// Physics (with images you provided)
const physicsChapters = [
  { name: "1 U & D", img: "https://app.esaral.com/_next/image?...ruler.png&w=256&q=75" },
  { name: "2 Vectors", img: "https://app.esaral.com/_next/image?...cartesian-axes.png&w=256&q=75" },
  { name: "3 Kinematics-1D", img: "https://app.esaral.com/_next/image?...physics.png&w=256&q=75" },
  { name: "4 Kinematics-2D", img: "https://app.esaral.com/_next/image?...luggage.png&w=256&q=75" },
  { name: "5 NLM", img: "https://app.esaral.com/_next/image?...gravitation.png&w=256&q=75" },
  { name: "6 Friction", img: "https://app.esaral.com/_next/image?...forcepng&w=256&q=75" },
  { name: "7 Circular motion", img: "https://app.esaral.com/_next/image?...london-eye.png&w=256&q=75" },
  { name: "8 WPE", img: "https://app.esaral.com/_next/image?...long-throw.png&w=256&q=75" },
  { name: "9 Center of Mass", img: "https://app.esaral.com/_next/image?...spring.png&w=256&q=75" },
  { name: "10 Rotational Mech.", img: "https://app.esaral.com/_next/image?...rotation.png&w=256&q=75" },
  { name: "11 Gravitation", img: "https://app.esaral.com/_next/image?...handpng&w=256&q=75" },
  { name: "12 SHM", img: "https://app.esaral.com/_next/image?...physics.png&w=256&q=75" },
  { name: "13 Calorimetry", img: "https://app.esaral.com/_next/image?...Calorimetry.png&w=256&q=75" },
  { name: "14 Elasticity", img: "https://app.esaral.com/_next/image?...elasticity.png&w=256&q=75" },
  { name: "15 Thermal Exp.", img: "https://app.esaral.com/_next/image?...heat-system.png&w=256&q=75" },
  { name: "16 Heat transfer", img: "https://app.esaral.com/_next/image?...hot-foodpng&w=256&q=75" },
  { name: "17 KTG", img: "https://app.esaral.com/_next/image?...Kinetic-Theory-of-Gases-icon.png&w=256&q=75" },
  { name: "18 Thermodynamics", img: "https://app.esaral.com/_next/image?...thermodynamics.png&w=256&q=75" },
  { name: "19 Wave on string", img: "https://app.esaral.com/_next/image?...physics-1.png&w=256&q=75" },
  { name: "20 Sound waves", img: "https://app.esaral.com/_next/image?...voice.png&w=256&q=75" },
  { name: "21 Fluid Mechanics", img: "https://app.esaral.com/_next/image?...fluid-mechanicspng&w=256&q=75" },
  { name: "22 Electrostatic", img: "https://app.esaral.com/_next/image?...magnetic-fields.png&w=256&q=75" },
  { name: "23 Current Electricity", img: "https://app.esaral.com/_next/image?...electric-current.png&w=256&q=75" },
  { name: "24 Capacitance", img: "https://app.esaral.com/_next/image?...capacitor.png&w=256&q=75" },
  { name: "25 MEC", img: "https://app.esaral.com/_next/image?...Magnetic.png&w=256&q=75" },
  { name: "26 Magnetism", img: "https://app.esaral.com/_next/image?...magnetic-1.png&w=256&q=75" },
  { name: "27 EMI", img: "https://app.esaral.com/_next/image?...EMI).png&w=256&q=75" },
  { name: "28 AC", img: "https://app.esaral.com/_next/image?...circuit.png&w=256&q=75" },
  { name: "29 Atomic Structure", img: "https://app.esaral.com/_next/image?...atom.png&w=256&q=75" },
  { name: "30 Dual Nature", img: "https://app.esaral.com/_next/image?...radiation.png&w=256&q=75" },
  { name: "31 X-Ray", img: "https://app.esaral.com/_next/image?...x-rays.png&w=256&q=75" },
  { name: "32 Nuclear physics", img: "https://app.esaral.com/_next/image?...nuclear-bomb.png&w=256&q=75" },
  { name: "33 Radioactivity", img: "https://app.esaral.com/_next/image?...atom.png&w=256&q=75" },
  { name: "34 Ray Optics", img: "https://app.esaral.com/_next/image?...prism.png&w=256&q=75" },
  { name: "35 EM Waves", img: "https://app.esaral.com/_next/image?...electromagnetic.png&w=256&q=75" },
  { name: "36 Wave Optics", img: "https://app.esaral.com/_next/image?...optic.png&w=256&q=75" },
  { name: "37 Errors", img: "https://app.esaral.com/_next/image?...graphic-designpng&w=256&q=75" },
  { name: "38 Semiconductor", img: "https://app.esaral.com/_next/image?...ram.png&w=256&q=75" }
];

// Chemistry (with images you provided)
const chemistryChapters = [
  { name: "Atomic Structure", img: "https://app.esaral.com/_next/image?...atom.png&w=256&q=75" },
  { name: "Periodic Table", img: "https://app.esaral.com/_next/image?...periodic-table%20(1).png&w=256&q=75" },
  { name: "Chemical Bonding", img: "https://app.esaral.com/_next/image?...chemical-bond.png&w=256&q=75" },
  { name: "Mole Concept", img: "https://app.esaral.com/_next/image?...mass.png&w=256&q=75" },
  { name: "States of Matter", img: "https://app.esaral.com/_next/image?...state-of-matter.png&w=256&q=75" },
  { name: "Thermodynamics", img: "https://app.esaral.com/_next/image?...thermodynamic.png&w=256&q=75" },
  { name: "Thermochemistry", img: "https://app.esaral.com/_next/image?...thermodynamics.png&w=256&q=75" },
  { name: "Chemical Equilibrium", img: "https://app.esaral.com/_next/image?...exchange.png&w=256&q=75" },
  { name: "Ionic Equilibrium", img: "https://app.esaral.com/_next/image?...ph-meter.png&w=256&q=75" },
  { name: "Redox Reaction", img: "https://app.esaral.com/_next/image?...radiation.png&w=256&q=75" },
  { name: "IUPAC", img: "https://via.placeholder.com/80?text=IUPAC" },
  { name: "GOC", img: "https://app.esaral.com/_next/image?...potassium-sorbate.png&w=256&q=75" },
  { name: "Isomerism", img: "https://app.esaral.com/_next/image?...chemistry%20(5).png&w=256&q=75" },
  { name: "Hydrocarbons", img: "https://app.esaral.com/_next/image?...molecule%20(3).png&w=256&q=75" },
  { name: "Environmental Chemistry", img: "https://app.esaral.com/_next/image?...pollution.png&w=256&q=75" },
  { name: "Hydrogen", img: "https://app.esaral.com/_next/image?...hydrogen.png&w=256&q=75" },
  { name: "s-Block Elements", img: "https://app.esaral.com/_next/image?...hydrogen%20(1).png&w=256&q=75" },
  { name: "p-Block Elements", img: "https://app.esaral.com/_next/image?...aluminum.png&w=256&q=75" },
  { name: "The Solid State", img: "https://app.esaral.com/_next/image?...solid.png&w=256&q=75" },
  { name: "Liquid Solution", img: "https://app.esaral.com/_next/image?...glass.png&w=256&q=75" },
  { name: "Chemical Kinetics", img: "https://app.esaral.com/_next/image?...catalyst.png&w=256&q=75" },
  { name: "Nuclear Chemistry", img: "https://app.esaral.com/_next/image?...nuclear-energy.png&w=256&q=75" },
  { name: "Radioactivity", img: "https://app.esaral.com/_next/image?...radiation.png&w=256&q=75" },
  { name: "Electro Chemistry", img: "https://app.esaral.com/_next/image?...electrophoresis.png&w=256&q=75" },
  { name: "Surface Chemistry", img: "https://app.esaral.com/_next/image?...rust.png&w=256&q=75" },
  { name: "Coordination Compounds", img: "https://app.esaral.com/_next/image?...molecule%20(1).png&w=256&q=75" },
  { name: "Metallurgy", img: "https://app.esaral.com/_next/image?...metallurgy.png&w=256&q=75" },
  { name: "d & f Block", img: "https://app.esaral.com/_next/image?...scandium.png&w=256&q=75" },
  { name: "Optical Isomerism", img: "https://via.placeholder.com/80?text=Optical+Isomerism" },
  { name: "Halogen Derivative", img: "https://app.esaral.com/_next/image?...adrenaline.png&w=256&q=75" },
  { name: "Alcohol, Phenol, Ether", img: "https://app.esaral.com/_next/image?...adrenaline.png&w=256&q=75" },
  { name: "Aldehydes, Ketones", img: "https://via.placeholder.com/80?text=Aldehydes+Ketones" },
  { name: "Oxidation Reduction", img: "https://app.esaral.com/_next/image?...rust.png&w=256&q=75" },
  { name: "Carboxylic Acids & Amines", img: "https://app.esaral.com/_next/image?...molecule.png&w=256&q=75" },
  { name: "Biomolecules", img: "https://app.esaral.com/_next/image?...compound.png&w=256&q=75" },
  { name: "Polymers", img: "https://app.esaral.com/_next/image?...nanotechnology.png&w=256&q=75" },
  { name: "Chem. In Everyday Life", img: "https://app.esaral.com/_next/image?...dental-hygiene.png&w=256&q=75" },
  { name: "p-Block(15-18)", img: "https://app.esaral.com/_next/image?...phosphorus.png&w=256&q=75" },
  { name: "Salt Analysis", img: "https://app.esaral.com/_next/image?...research.png&w=256&q=75" }
];

// Biology (chapters you provided)
const biologyChapters = [
  // 1. Class XI chapters
  { name: "1. The Living World", img: "https://via.placeholder.com/80?text=Living+World" },
  { name: "2. Biological Classification", img: "https://via.placeholder.com/80?text=Bio+Classif." },
  { name: "3. Plant Kingdom", img: "https://via.placeholder.com/80?text=Plant+Kingdom" },
  { name: "4. Animal Kingdom", img: "https://via.placeholder.com/80?text=Animal+Kingdom" },
  { name: "5. Morphology of Flowering Plants", img: "https://via.placeholder.com/80?text=Morphology" },
  { name: "6. Anatomy of Flowering Plants", img: "https://via.placeholder.com/80?text=Anatomy" },
  { name: "7. Structural Organization in Animals", img: "https://via.placeholder.com/80?text=Organization" },
  { name: "8. Cell: The Unit of Life", img: "https://via.placeholder.com/80?text=Cell" },
  { name: "9. Biomolecules", img: "https://via.placeholder.com/80?text=Biomolecules" },
  { name: "10. Cell Cycle and Cell Division", img: "https://via.placeholder.com/80?text=Cell+Division" },
  { name: "11. Photosynthesis in Higher Plants", img: "https://via.placeholder.com/80?text=Photosynthesis" },
  { name: "12. Respiration in Plants", img: "https://via.placeholder.com/80?text=Respiration" },
  { name: "13. Plant Growth and Development", img: "https://via.placeholder.com/80?text=Plant+Growth" },
  { name: "14. Breathing and Exchange of Gases", img: "https://via.placeholder.com/80?text=Breathing" },
  { name: "15. Body Fluids and Circulation", img: "https://via.placeholder.com/80?text=Fluids+Circulation" },
  { name: "16. Excretory Products and Elimination", img: "https://via.placeholder.com/80?text=Excretory" },
  { name: "17. Locomotion and Movement", img: "https://via.placeholder.com/80?text=Locomotion" },
  { name: "18. Neural Control and Coordination", img: "https://via.placeholder.com/80?text=Neural+Control" },
  { name: "19. Chemical Coordination and Integration", img: "https://via.placeholder.com/80?text=Chemical+Coord." },

  // 2. Class XII chapters
  { name: "1. Reproduction in Organism", img: "https://via.placeholder.com/80?text=Reproduction" },
  { name: "2. Sexual Reproduction in Flowering Plants", img: "https://via.placeholder.com/80?text=Flowering+Plants" },
  { name: "3. Human Reproduction", img: "https://via.placeholder.com/80?text=Human+Repro" },
  { name: "4. Reproductive Health", img: "https://via.placeholder.com/80?text=Repro+Health" },
  { name: "5. Principles of Inheritance and Variation", img: "https://via.placeholder.com/80?text=Inheritance" },
  { name: "6. Molecular Basis of Inheritance", img: "https://via.placeholder.com/80?text=Molecular+Inherit" },
  { name: "7. Evolution", img: "https://via.placeholder.com/80?text=Evolution" },
  { name: "8. Human Health and Diseases", img: "https://via.placeholder.com/80?text=Human+Health" },
  { name: "9. Strategies for Enhancement in Food Production", img: "https://via.placeholder.com/80?text=Food+Production" },
  { name: "10. Microbes in Human Welfare", img: "https://via.placeholder.com/80?text=Microbes" },
  { name: "11. Biotechnology- Principles and Processes", img: "https://via.placeholder.com/80?text=Biotech+Principles" },
  { name: "12. Biotechnology and its Application", img: "https://via.placeholder.com/80?text=Biotech+App" },
  { name: "13. Organism and Population", img: "https://via.placeholder.com/80?text=Organism+Pop" },
  { name: "14. Ecosystem", img: "https://via.placeholder.com/80?text=Ecosystem" },
  { name: "15. Biodiversity and its Conservation", img: "https://via.placeholder.com/80?text=Biodiversity" },
  { name: "16. Environmental Issues", img: "https://via.placeholder.com/80?text=Environment" }
];

// Subtopics for NEET (common to all chapters in Physics, Chemistry, Biology)
const subtopics = [
  { key: "ncert", label: "NCERT", type: "checkbox" },
  { key: "referenceBook", label: "Reference Book", type: "checkbox" },
  { key: "modules", label: "Coaching Modules", type: "checkbox" },
  { key: "pyqs", label: "PYQ's", type: "checkbox" },
  { key: "assertionReason", label: "Assertion & Reasoning", type: "checkbox" },
  { key: "handwrittenNotes", label: "Handwritten Notes", type: "checkbox" }
];

// Default data
const defaultChapterData = {};
subtopics.forEach(task => {
  defaultChapterData[task.key] = false; // all checkboxes
});

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

// Local Storage Key
const STORAGE_KEY = "neetStudyData";

// DOM Elements
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

// Track current subject and chapter
let currentSubject = "";
let currentChapter = "";

// Initialization
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

// Utility: Calculate completion
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

// Render Subjects
function renderSubjects() {
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
}

// Render Chapters
function renderChapters(subject) {
  chaptersContainer.innerHTML = "";
  const data = getData();
  subjectsData[subject].chapters.forEach(ch => {
    let chapterData = data[subject][ch.name];
    let progress = calculateProgress(chapterData);
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
  chapterImageElem.src = chObj ? chObj.img : "https://via.placeholder.com/100?text=No+Image";

  const data = getData();
  const chapterData = data[subject][chapterName];
  const progress = calculateProgress(chapterData);
  progressFillElem.style.width = `${progress}%`;
  progressPercentElem.textContent = `${progress}%`;

  subtopicsContainer.innerHTML = "";
  subtopics.forEach((task, index) => {
    const div = document.createElement("div");
    div.classList.add("subtopic");
    // color cycling
    let colorVar;
    if (index % 3 === 0) colorVar = "var(--subtopic-color-1)";
    else if (index % 3 === 1) colorVar = "var(--subtopic-color-2)";
    else colorVar = "var(--subtopic-color-3)";
    div.style.backgroundColor = colorVar;

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
    // Make entire subtopic clickable
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

// Save Chapter Data
function saveChapterData(subject, chapterName, chapterData) {
  const data = getData();
  data[subject][chapterName] = chapterData;
  updateData(data);

  // Update progress bar in detail view
  const progress = calculateProgress(chapterData);
  progressFillElem.style.width = `${progress}%`;
  progressPercentElem.textContent = `${progress}%`;

  // Also update chapters view
  renderChapters(subject);
  // If you have a "weak areas" feature, call its rendering function here.
}

// Mark All Complete
function markAllComplete(subject, chapterName) {
  const data = getData();
  const chapterData = data[subject][chapterName];
  // Mark all subtopics as true
  subtopics.forEach(task => {
    chapterData[task.key] = true;
  });
  updateData(data);
  renderChapterDetail(subject, chapterName);
  renderChapters(subject);
}

// Reset Chapter
function resetChapter(subject, chapterName) {
  const data = getData();
  data[subject][chapterName] = { ...defaultChapterData };
  updateData(data);
  renderChapterDetail(subject, chapterName);
  renderChapters(subject);
}

// Reset Subject
function resetSubject(subject) {
  const data = getData();
  subjectsData[subject].chapters.forEach(ch => {
    data[subject][ch.name] = { ...defaultChapterData };
  });
  updateData(data);
  renderChapters(subject);
}

// Event Listeners
backToSubjectsBtn.addEventListener("click", () => {
  chaptersView.classList.add("hidden");
  subjectsView.classList.remove("hidden");
});

backToChaptersBtn.addEventListener("click", () => {
  chapterDetailView.classList.add("hidden");
  chaptersView.classList.remove("hidden");
});

resetSubjectBtn.addEventListener("click", () => {
  if (currentSubject) {
    if (confirm("Reset all progress for this subject?")) {
      resetSubject(currentSubject);
    }
  }
});

markAllCompleteBtn.addEventListener("click", () => {
  if (currentSubject && currentChapter) {
    markAllComplete(currentSubject, currentChapter);
  }
});

resetChapterBtn.addEventListener("click", () => {
  if (currentSubject && currentChapter) {
    if (confirm("Reset this chapter?")) {
      resetChapter(currentSubject, currentChapter);
    }
  }
});

// On Load
document.addEventListener("DOMContentLoaded", () => {
  initializeData();
  renderSubjects();
});
