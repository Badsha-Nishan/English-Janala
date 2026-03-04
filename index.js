const loadLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLessons(data.data));
};

const loadLevelWord = (id) => {
  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
  // 1. Get the Container and empty
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  //   2. Get into every word
  for (const word of words) {
    // 3.Create element
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="bg-white space-y-4 rounded py-8">
          <h2 class="text-3xl font-bold">${word.word}</h2>
          <p class="text-xl font-medium"> Meaning / Pronunciation</p>
          <h2 class="font-bangla font-semibold text-3xl">"${word.meaning} / ${word.pronunciation}"</h2>
          <div class="flex justify-between px-12">
            <button class="btn bg-[#1A91FF20]">
              <i class="fa-solid fa-circle-info"></i>
            </button>
            <button class="btn bg-[#1A91FF20]"><i class="fa-solid fa-volume-high"></i></button>
          </div>
        </div>
    `;
    wordContainer.append(card);
  }
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
                <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
                    <i class="fa-solid fa-book-open"></i>
                    Lesson-${lesson.level_no}
                </button>
    `;
    // 4. Append element
    lessonContainer.append(btnDiv);
  }
};

loadLessons();
