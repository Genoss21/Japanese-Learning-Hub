document.addEventListener("DOMContentLoaded", () => {
  const hLevelSelect = document.getElementById("hLevel");
  const startQuizBtn = document.getElementById("startQuiz");
  const shuffleBtn = document.getElementById("shuffleQuiz");
  const quizCard = document.getElementById("quizCard");
  const quizChoices = document.getElementById("quizChoices");
  const quizText = document.getElementById("quizText");
  const quizScoreEl = document.getElementById("quizScore");
  const quizProgressEl = document.getElementById("quizProgress");
  const quizFinishMsg = document.getElementById("quizFinishMsg");
  const finalScoreEl = document.getElementById("finalScore");
  const restartQuizBtn = document.getElementById("restartQuiz");
  const chooseLevelBtn = document.getElementById("chooseLevel");
  const progressContainer = document.getElementById("progressContainer");
  const progressBar = document.getElementById("quizProgressBar");

  const levelModal = document.getElementById("levelModal");
  const closeLevelModalBtn = document.getElementById("closeLevelModal");

  let quizList = [];
  let quizScore = 0;
  let quizProgress = 0;

  const hiraganaAll = [
    ["あ", "a"],
    ["い", "i"],
    ["う", "u"],
    ["え", "e"],
    ["お", "o"],
    ["か", "ka"],
    ["き", "ki"],
    ["く", "ku"],
    ["け", "ke"],
    ["こ", "ko"],
    ["さ", "sa"],
    ["し", "shi"],
    ["す", "su"],
    ["せ", "se"],
    ["そ", "so"],
    ["た", "ta"],
    ["ち", "chi"],
    ["つ", "tsu"],
    ["て", "te"],
    ["と", "to"],
    ["な", "na"],
    ["に", "ni"],
    ["ぬ", "nu"],
    ["ね", "ne"],
    ["の", "no"],
    ["は", "ha"],
    ["ひ", "hi"],
    ["ふ", "fu"],
    ["へ", "he"],
    ["ほ", "ho"],
    ["ま", "ma"],
    ["み", "mi"],
    ["む", "mu"],
    ["め", "me"],
    ["も", "mo"],
    ["や", "ya"],
    ["ゆ", "yu"],
    ["よ", "yo"],
    ["ら", "ra"],
    ["り", "ri"],
    ["る", "ru"],
    ["れ", "re"],
    ["ろ", "ro"],
    ["わ", "wa"],
    ["を", "wo"],
    ["ん", "n"],
  ];

  const youonGroups = {
    Kya: [
      ["きゃ", "kya"],
      ["きゅ", "kyu"],
      ["きょ", "kyo"],
    ],
    Sha: [
      ["しゃ", "sha"],
      ["しゅ", "shu"],
      ["しょ", "sho"],
    ],
    Cha: [
      ["ちゃ", "cha"],
      ["ちゅ", "chu"],
      ["ちょ", "cho"],
    ],
    Nyu: [
      ["にゃ", "nya"],
      ["にゅ", "nyu"],
      ["にょ", "nyo"],
    ],
    Hya: [
      ["ひゃ", "hya"],
      ["ひゅ", "hyu"],
      ["ひょ", "hyo"],
    ],
    Mya: [
      ["みゃ", "mya"],
      ["みゅ", "myu"],
      ["みょ", "myo"],
    ],
    Rya: [
      ["りゃ", "rya"],
      ["りゅ", "ryu"],
      ["りょ", "ryo"],
    ],
    Gya: [
      ["ぎゃ", "gya"],
      ["ぎゅ", "gyu"],
      ["ぎょ", "gyo"],
    ],
    Ja: [
      ["じゃ", "ja"],
      ["じゅ", "ju"],
      ["じょ", "jo"],
    ],
    Bya: [
      ["びゃ", "bya"],
      ["びゅ", "byu"],
      ["びょ", "byo"],
    ],
    Pya: [
      ["ぴゃ", "pya"],
      ["ぴゅ", "pyu"],
      ["ぴょ", "pyo"],
    ],
  };

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  function getHiraganaLevel(level) {
    let list = [];
    switch (level) {
      case "a":
        list = hiraganaAll.slice(0, 5);
        break;
      case "ka":
        list = hiraganaAll.slice(5, 10);
        break;
      case "sa":
        list = hiraganaAll.slice(10, 15);
        break;
      case "ta":
        list = hiraganaAll.slice(15, 20);
        break;
      case "na":
        list = hiraganaAll.slice(20, 25);
        break;
      case "ha":
        list = hiraganaAll.slice(25, 30);
        break;
      case "ma":
        list = hiraganaAll.slice(30, 35);
        break;
      case "ya":
        list = hiraganaAll.slice(35, 38);
        break;
      case "ra":
        list = hiraganaAll.slice(38, 43);
        break;
      case "wa":
        list = hiraganaAll.slice(43, 46);
        break;

      case "a_ko":
        list = hiraganaAll.slice(0, 10);
        break;
      case "sa_to":
        list = hiraganaAll.slice(10, 20);
        break;
      case "na_ho":
        list = hiraganaAll.slice(20, 30);
        break;
      case "ma_yo":
        list = hiraganaAll.slice(30, 38);
        break;
      case "ra_n":
        list = hiraganaAll.slice(38, 46);
        break;

      case "youon":
        Object.values(youonGroups).forEach((g) => list.push(...g));
        break;
      case "all":
        list = [...hiraganaAll];
        Object.values(youonGroups).forEach((g) => list.push(...g));
        break;
    }

    let targetCount = 30;
    if (["a_ko", "sa_to", "na_ho", "ma_yo", "ra_n", "youon"].includes(level))
      targetCount = 50;
    else if (level === "all") targetCount = 100;

    while (list.length < targetCount) list = list.concat(list);
    return shuffleArray(list).slice(0, targetCount);
  }

  function startQuiz() {
    quizScore = 0;
    quizProgress = 0;
    quizScoreEl.textContent = quizScore;
    quizProgressEl.textContent = `0 / ${quizList.length}`;
    quizFinishMsg.classList.add("hidden");
    progressContainer.classList.remove("hidden");
    renderQuiz();
  }

  function renderQuiz() {
    if (quizProgress >= quizList.length) {
      quizFinishMsg.classList.remove("hidden");
      quizCard.textContent = "";
      quizChoices.innerHTML = "";
      quizText.textContent = "";
      finalScoreEl.textContent = quizScore;
      progressContainer.classList.add("hidden");
      return;
    }

    const item = quizList[quizProgress];
    quizCard.textContent = item[0];
    quizText.textContent = "Pick the correct romaji";

    const choicesSet = new Set();
    choicesSet.add(item[1]);
    const others = quizList.map((v) => v[1]).filter((v) => v !== item[1]);
    shuffleArray(others);
    while (choicesSet.size < 4 && others.length > 0)
      choicesSet.add(others.pop());
    const choices = shuffleArray([...choicesSet]);

    quizChoices.innerHTML = "";
    choices.forEach((c) => {
      const btn = document.createElement("button");
      btn.textContent = c;
      btn.className =
        "px-4 py-2 bg-slate-600 rounded hover:bg-indigo-600 transition font-semibold text-lg";
      btn.addEventListener("click", () => checkAnswer(c, item[1]));
      quizChoices.appendChild(btn);
    });

    quizProgressEl.textContent = `${quizProgress + 1} / ${quizList.length}`;
    progressBar.style.width = `${Math.floor(
      (quizProgress / quizList.length) * 100
    )}%`;
  }

  function checkAnswer(selected, correct) {
    if (selected === correct) quizScore++;
    quizScoreEl.textContent = quizScore;
    quizProgress++;
    renderQuiz();
  }

  startQuizBtn.addEventListener("click", () => {
    quizList = getHiraganaLevel(hLevelSelect.value);
    startQuiz();
  });

  shuffleBtn.addEventListener("click", () => {
    quizList = shuffleArray(quizList);
    quizProgress = 0;
    startQuiz();
  });

  restartQuizBtn.addEventListener("click", () => {
    startQuiz();
  });

  chooseLevelBtn.addEventListener("click", () => {
    levelModal.classList.remove("hidden");
  });

  closeLevelModalBtn.addEventListener("click", () => {
    levelModal.classList.add("hidden");
  });

  levelModal.addEventListener("click", (e) => {
    if (e.target === levelModal) levelModal.classList.add("hidden");
  });
});
