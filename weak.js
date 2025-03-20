const STORAGE_KEY = "neetStudyData";

function getData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

const backBtn = document.getElementById("back-btn");
const weakAreasContainer = document.getElementById("weak-areas-container");

function renderWeakAreas() {
  weakAreasContainer.innerHTML = "";
  let data = getData();
  if (!data) return;
  // Loop through subjects and chapters
  for (let subject in data) {
    for (let chapter in data[subject]) {
      let chapterData = data[subject][chapter];
      if (chapterData.tag === "Weak") {
        const card = document.createElement("div");
        card.classList.add("card", "weak-area-card");
        card.innerHTML = `<h3>${subject} - ${chapter}</h3>`;
        card.addEventListener("click", () => {
          // Redirect to main page; user can select the subject/chapter.
          window.location.href = "index.html";
        });
        weakAreasContainer.appendChild(card);
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderWeakAreas();
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
