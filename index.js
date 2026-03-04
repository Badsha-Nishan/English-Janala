const loadLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLessons(data.data));
};

const displayLessons = (lessons) => {
  // 1. Get the Container & empty
  const lessonContainer = document.getElementById("level-container");
  lessonContainer.innerHTML = "";
  // 2. Get into every lesson
  for (const lesson of lessons) {
    // 3. Create element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
                <button class="btn btn-outline btn-primary">
                    <i class="fa-solid fa-book-open"></i>
                    Lesson-${lesson.level_no}
                </button>
    `;
    // 4. Append element
    lessonContainer.append(btnDiv);
  }
};

loadLessons();
