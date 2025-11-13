document.addEventListener("DOMContentLoaded", () => {
  // --- Sample Vocabulary Data ---
  const CATEGORIES = {
    Basics: [
      {
        jp: "こんにちは",
        rom: "konnichiwa",
        en: "hello",
        img: "https://img.freepik.com/free-photo/friendly-positive-blonde-female-smiling-broadly-happily-greeting-with-hand-pleased-meet-them-positive-emotions-feelings-face-expression_176420-15009.jpg?t=st=1762423095~exp=1762426695~hmac=07236769dd2586ccde19a96a2e35c084dd0d3f416202654d48cd1246898c801f&w=1480",
      },
      {
        jp: "おはよう",
        rom: "ohayou",
        en: "good morning",
        img: "https://img.freepik.com/free-photo/good-morning-letter-wooden-blocks_23-2148101449.jpg?t=st=1762604581~exp=1762608181~hmac=b49af94ec20a4724aabb289ad9e35a01c7a1d8077d2216d0352a553aed5bc115&w=1480",
      },
      {
        jp: "こんばんは",
        rom: "konbanwa",
        en: "good evening",
        img: "https://img.freepik.com/premium-photo/3d-paper-cut-cloudsmoon-stars-night-sky-blue-backgroundsale-header-voucher-template-with-gold-moongood-night-sweet-dreams-bannerplace-text3d-rendering-illustration_654007-273.jpg?ga=GA1.1.12635749.1762585548&semt=ais_hybrid&w=740&q=80",
      },
      {
        jp: "ありがとう",
        rom: "arigatou",
        en: "thank you",
        img: "https://img.freepik.com/free-photo/top-view-hand-holding-pen_52683-96531.jpg?t=st=1762605813~exp=1762609413~hmac=35305623a3d9909ca359ccf585ebc693d2c88f94e324166ce1eb4d50363b0965&w=1480",
      },
      {
        jp: "さようなら",
        rom: "sayounara",
        en: "goodbye",
        img: "https://img.freepik.com/premium-vector/man-hands-illustration_652303-296.jpg?ga=GA1.1.12635749.1762585548&semt=ais_hybrid&w=740&q=80",
      },
      {
        jp: "すみません",
        rom: "sumimasen",
        en: "excuse me / sorry",
        img: "https://img.freepik.com/premium-vector/feeling-sorry-concept-illustration_114360-3618.jpg?ga=GA1.1.12635749.1762585548&semt=ais_hybrid&w=740&q=80",
      },
      {
        jp: "はい",
        rom: "hai",
        en: "yes",
        img: "https://img.freepik.com/free-photo/beautiful-teenage-girl-student-smiling-showing-okay-sign-likes-item-approve-praise-good-choice-guarantee-quality-recommend-product-standing-against-white-wall_176420-39332.jpg?t=st=1762606293~exp=1762609893~hmac=106fd20e93c10ffd60edea11b3cd4e341406b3e332a9c7fe02314aaea6027420&w=1480",
      },
      {
        jp: "いいえ",
        rom: "iie",
        en: "no",
        img: "https://img.freepik.com/free-photo/serious-looking-concerned-asian-male-student-showing-forbid-gesture-making-cross-sign-stop-someone-disagree-prohibit-action-telling-no-enough-being-fed-up-standing-white-background_1258-55663.jpg?t=st=1762606328~exp=1762609928~hmac=c6b47c5bc068725aa2a0fc0061925f4ceb2d3343b1d803e758bbad12e62f4f05&w=1480",
      },
      {
        jp: "おねがいします",
        rom: "onegaishimasu",
        en: "please",
        img: "https://img.freepik.com/free-photo/serious-looking-concerned-asian-male-student-showing-forbid-gesture-making-cross-sign-stop-someone-disagree-prohibit-action-telling-no-enough-being-fed-up-standing-white-background_1258-55663.jpg?t=st=1762606328~exp=1762609928~hmac=c6b47c5bc068725aa2a0fc0061925f4ceb2d3343b1d803e758bbad12e62f4f05&w=1480",
      },
      {
        jp: "わかりません",
        rom: "wakarimasen",
        en: "I don't understand",
        img: "https://img.freepik.com/free-vector/hand-drawn-compliment-illustration_23-2150161211.jpg?t=st=1762606498~exp=1762610098~hmac=ed6a3041ed176f0504d29a401e1397c3c263834bfe27a10606de70c5abc4ac27&w=1480",
      },
    ],

    Places: [
      {
        jp: "へや",
        rom: "heya",
        en: "room",
        img: "https://img.freepik.com/free-vector/cartoon-bedroom-interior-background-template-cozy-modern-house-room-morning-light_33099-171.jpg?t=st=1762606570~exp=1762610170~hmac=9dbcf4f45261830ebdcbc0ea1f71ccc7f38bebfb36cbd0e86253ae4a8dd2da8f&w=1480",
      },
      {
        jp: "いま",
        rom: "ima",
        en: "living room",
        img: "https://img.freepik.com/free-vector/vector-illustration-cozy-cartoon-interior-home-room-living-room_1441-387.jpg?t=st=1762606470~exp=1762610070~hmac=b487fd64059fb4f51d8fcfd40178c182dc6f4dfd5a869cec17e34f4f17573c83&w=1480",
      },
      {
        jp: "だいどころ",
        rom: "daidokoro",
        en: "kitchen",
        img: "https://img.freepik.com/free-vector/modern-kitchen-interior-design-with-furniture-tableware-vector-cartoon-illustration-morning-coffee-cup-table-brown-drawers-walls-fridge-microwave-oven-sun-shining-through-window_107791-22058.jpg?t=st=1762606683~exp=1762610283~hmac=d1f0491dcaa80d1ac4656964818d630f6aa294f98d3f9c1352fa8eb0066d5393&w=1480",
      },
      {
        jp: "がっこう",
        rom: "gakkou",
        en: "school",
        img: "https://img.freepik.com/free-vector/school-building-educational-institution-college_107791-1051.jpg?t=st=1762606733~exp=1762610333~hmac=b755490a109d519e74089d6fd4b071a05a0793be41de3fc631855a7378798888&w=1480",
      },
      {
        jp: "としょかん",
        rom: "toshokan",
        en: "library",
        img: "images/places/library.jpg",
      },
      {
        jp: "びょういん",
        rom: "byouin",
        en: "hospital",
        img: "images/places/hospital.jpg",
      },
      {
        jp: "えき",
        rom: "eki",
        en: "station",
        img: "images/places/station.jpg",
      },
      { jp: "みせ", rom: "mise", en: "shop", img: "images/places/shop.jpg" },
      {
        jp: "こうえん",
        rom: "kouen",
        en: "park",
        img: "images/places/park.jpg",
      },
      {
        jp: "いりぐち",
        rom: "iriguchi",
        en: "entrance",
        img: "images/places/entrance.jpg",
      },
    ],

    Family: [
      {
        jp: "おかあさん",
        rom: "okaasan",
        en: "mother",
        img: "images/family/mother.jpg",
      },
      {
        jp: "おとうさん",
        rom: "otousan",
        en: "father",
        img: "images/family/father.jpg",
      },
      {
        jp: "おにいさん",
        rom: "oniisan",
        en: "older brother",
        img: "images/family/older_brother.jpg",
      },
      {
        jp: "おねえさん",
        rom: "oneesan",
        en: "older sister",
        img: "images/family/older_sister.jpg",
      },
      {
        jp: "いもうと",
        rom: "imouto",
        en: "younger sister",
        img: "images/family/younger_sister.jpg",
      },
      {
        jp: "おとうと",
        rom: "otouto",
        en: "younger brother",
        img: "images/family/younger_brother.jpg",
      },
      {
        jp: "そふ",
        rom: "sofu",
        en: "grandfather",
        img: "images/family/grandfather.jpg",
      },
      {
        jp: "そぼ",
        rom: "sobo",
        en: "grandmother",
        img: "images/family/grandmother.jpg",
      },
      {
        jp: "いとこ",
        rom: "itoko",
        en: "cousin",
        img: "images/family/cousin.jpg",
      },
      {
        jp: "あに",
        rom: "ani",
        en: "older brother (short)",
        img: "images/family/older_brother2.jpg",
      },
    ],

    Colors: [
      { jp: "あか", rom: "aka", en: "red", img: "images/colors/red.jpg" },
      { jp: "あお", rom: "ao", en: "blue", img: "images/colors/blue.jpg" },
      {
        jp: "きいろ",
        rom: "kiiro",
        en: "yellow",
        img: "images/colors/yellow.jpg",
      },
      {
        jp: "みどり",
        rom: "midori",
        en: "green",
        img: "images/colors/green.jpg",
      },
      { jp: "くろ", rom: "kuro", en: "black", img: "images/colors/black.jpg" },
      { jp: "しろ", rom: "shiro", en: "white", img: "images/colors/white.jpg" },
      {
        jp: "ちゃいろ",
        rom: "chairo",
        en: "brown",
        img: "images/colors/brown.jpg",
      },
      {
        jp: "むらさき",
        rom: "murasaki",
        en: "purple",
        img: "images/colors/purple.jpg",
      },
      { jp: "ぴんく", rom: "pinku", en: "pink", img: "images/colors/pink.jpg" },
      {
        jp: "はいいろ",
        rom: "haiiro",
        en: "gray",
        img: "images/colors/gray.jpg",
      },
    ],

    Animals: [
      { jp: "ねこ", rom: "neko", en: "cat", img: "images/animals/cat.jpg" },
      { jp: "いぬ", rom: "inu", en: "dog", img: "images/animals/dog.jpg" },
      { jp: "とり", rom: "tori", en: "bird", img: "images/animals/bird.jpg" },
      { jp: "うま", rom: "uma", en: "horse", img: "images/animals/horse.jpg" },
      { jp: "うし", rom: "ushi", en: "cow", img: "images/animals/cow.jpg" },
      { jp: "ぶた", rom: "buta", en: "pig", img: "images/animals/pig.jpg" },
      {
        jp: "うさぎ",
        rom: "usagi",
        en: "rabbit",
        img: "images/animals/rabbit.jpg",
      },
      { jp: "とら", rom: "tora", en: "tiger", img: "images/animals/tiger.jpg" },
      {
        jp: "ぞう",
        rom: "zou",
        en: "elephant",
        img: "images/animals/elephant.jpg",
      },
      {
        jp: "さる",
        rom: "saru",
        en: "monkey",
        img: "images/animals/monkey.jpg",
      },
    ],

    Food: [
      { jp: "ごはん", rom: "gohan", en: "rice", img: "images/food/rice.jpg" },
      { jp: "パン", rom: "pan", en: "bread", img: "images/food/bread.jpg" },
      { jp: "りんご", rom: "ringo", en: "apple", img: "images/food/apple.jpg" },
      { jp: "さかな", rom: "sakana", en: "fish", img: "images/food/fish.jpg" },
      { jp: "にく", rom: "niku", en: "meat", img: "images/food/meat.jpg" },
      {
        jp: "やさい",
        rom: "yasai",
        en: "vegetable",
        img: "images/food/vegetable.jpg",
      },
      { jp: "みず", rom: "mizu", en: "water", img: "images/food/water.jpg" },
      { jp: "おちゃ", rom: "ocha", en: "tea", img: "images/food/tea.jpg" },
      {
        jp: "くだもの",
        rom: "kudamono",
        en: "fruit",
        img: "images/food/fruit.jpg",
      },
      { jp: "たまご", rom: "tamago", en: "egg", img: "images/food/egg.jpg" },
    ],

    Numbers: [
      { jp: "いち", rom: "ichi", en: "one", img: "images/numbers/one.jpg" },
      { jp: "に", rom: "ni", en: "two", img: "images/numbers/two.jpg" },
      { jp: "さん", rom: "san", en: "three", img: "images/numbers/three.jpg" },
      { jp: "よん", rom: "yon", en: "four", img: "images/numbers/four.jpg" },
      { jp: "ご", rom: "go", en: "five", img: "images/numbers/five.jpg" },
      { jp: "ろく", rom: "roku", en: "six", img: "images/numbers/six.jpg" },
      { jp: "なな", rom: "nana", en: "seven", img: "images/numbers/seven.jpg" },
      {
        jp: "はち",
        rom: "hachi",
        en: "eight",
        img: "images/numbers/eight.jpg",
      },
      { jp: "きゅう", rom: "kyuu", en: "nine", img: "images/numbers/nine.jpg" },
      { jp: "じゅう", rom: "juu", en: "ten", img: "images/numbers/ten.jpg" },
    ],

    Verbs: [
      {
        jp: "たべる",
        rom: "taberu",
        en: "to eat",
        img: "images/verbs/eat.jpg",
      },
      {
        jp: "のむ",
        rom: "nomu",
        en: "to drink",
        img: "images/verbs/drink.jpg",
      },
      { jp: "いく", rom: "iku", en: "to go", img: "images/verbs/go.jpg" },
      { jp: "みる", rom: "miru", en: "to see", img: "images/verbs/see.jpg" },
      {
        jp: "はなす",
        rom: "hanasu",
        en: "to speak",
        img: "images/verbs/speak.jpg",
      },
      {
        jp: "きく",
        rom: "kiku",
        en: "to listen",
        img: "images/verbs/listen.jpg",
      },
      {
        jp: "かく",
        rom: "kaku",
        en: "to write",
        img: "images/verbs/write.jpg",
      },
      { jp: "よむ", rom: "yomu", en: "to read", img: "images/verbs/read.jpg" },
      {
        jp: "ねる",
        rom: "neru",
        en: "to sleep",
        img: "images/verbs/sleep.jpg",
      },
      {
        jp: "おきる",
        rom: "okiru",
        en: "to wake up",
        img: "images/verbs/wakeup.jpg",
      },
    ],

    Adjectives: [
      {
        jp: "おおきい",
        rom: "ookii",
        en: "big",
        img: "images/adjectives/big.jpg",
      },
      {
        jp: "ちいさい",
        rom: "chiisai",
        en: "small",
        img: "images/adjectives/small.jpg",
      },
      {
        jp: "ながい",
        rom: "nagai",
        en: "long",
        img: "images/adjectives/long.jpg",
      },
      {
        jp: "みじかい",
        rom: "mijikai",
        en: "short",
        img: "images/adjectives/short.jpg",
      },
      {
        jp: "あたらしい",
        rom: "atarashii",
        en: "new",
        img: "images/adjectives/new.jpg",
      },
      {
        jp: "ふるい",
        rom: "furui",
        en: "old",
        img: "images/adjectives/old.jpg",
      },
      {
        jp: "たかい",
        rom: "takai",
        en: "tall / expensive",
        img: "images/adjectives/tall.jpg",
      },
      {
        jp: "やすい",
        rom: "yasui",
        en: "cheap",
        img: "images/adjectives/cheap.jpg",
      },
      {
        jp: "あつい",
        rom: "atsui",
        en: "hot",
        img: "images/adjectives/hot.jpg",
      },
      {
        jp: "さむい",
        rom: "samui",
        en: "cold",
        img: "images/adjectives/cold.jpg",
      },
    ],

    Weather: [
      { jp: "はれ", rom: "hare", en: "sunny", img: "images/weather/sunny.jpg" },
      {
        jp: "くもり",
        rom: "kumori",
        en: "cloudy",
        img: "images/weather/cloudy.jpg",
      },
      { jp: "あめ", rom: "ame", en: "rain", img: "images/weather/rain.jpg" },
      { jp: "ゆき", rom: "yuki", en: "snow", img: "images/weather/snow.jpg" },
      { jp: "かぜ", rom: "kaze", en: "wind", img: "images/weather/wind.jpg" },
      {
        jp: "あらし",
        rom: "arashi",
        en: "storm",
        img: "images/weather/storm.jpg",
      },
      {
        jp: "たいよう",
        rom: "taiyou",
        en: "sun",
        img: "images/weather/sun.jpg",
      },
      { jp: "つき", rom: "tsuki", en: "moon", img: "images/weather/moon.jpg" },
      {
        jp: "にじ",
        rom: "niji",
        en: "rainbow",
        img: "images/weather/rainbow.jpg",
      },
      { jp: "そら", rom: "sora", en: "sky", img: "images/weather/sky.jpg" },
    ],

    Time: [
      { jp: "いま", rom: "ima", en: "now", img: "images/time/now.jpg" },
      { jp: "あさ", rom: "asa", en: "morning", img: "images/time/morning.jpg" },
      { jp: "ひる", rom: "hiru", en: "noon", img: "images/time/noon.jpg" },
      { jp: "よる", rom: "yoru", en: "night", img: "images/time/night.jpg" },
      { jp: "きょう", rom: "kyou", en: "today", img: "images/time/today.jpg" },
      {
        jp: "あした",
        rom: "ashita",
        en: "tomorrow",
        img: "images/time/tomorrow.jpg",
      },
      {
        jp: "きのう",
        rom: "kinou",
        en: "yesterday",
        img: "images/time/yesterday.jpg",
      },
      {
        jp: "じかん",
        rom: "jikan",
        en: "time / hour",
        img: "images/time/time.jpg",
      },
      {
        jp: "とき",
        rom: "toki",
        en: "moment / when",
        img: "images/time/moment.jpg",
      },
      {
        jp: "しゅうまつ",
        rom: "shuumatsu",
        en: "weekend",
        img: "images/time/weekend.jpg",
      },
    ],

    Pointers: [
      { jp: "ここ", rom: "koko", en: "here", img: "images/pointers/here.jpg" },
      {
        jp: "そこ",
        rom: "soko",
        en: "there (near you)",
        img: "images/pointers/there_near_you.jpg",
      },
      {
        jp: "あそこ",
        rom: "asoko",
        en: "over there (far)",
        img: "images/pointers/over_there.jpg",
      },
      {
        jp: "こちら",
        rom: "kochira",
        en: "this way / this person",
        img: "images/pointers/this_way.jpg",
      },
      {
        jp: "そちら",
        rom: "sochira",
        en: "that way / that person (near you)",
        img: "images/pointers/that_way.jpg",
      },
      {
        jp: "あちら",
        rom: "achira",
        en: "that way / that person (over there)",
        img: "images/pointers/that_way_over_there.jpg",
      },
      {
        jp: "どこ",
        rom: "doko",
        en: "where",
        img: "images/pointers/where.jpg",
      },
      {
        jp: "これ",
        rom: "kore",
        en: "this (thing)",
        img: "images/pointers/this_thing.jpg",
      },
      {
        jp: "それ",
        rom: "sore",
        en: "that (thing near you)",
        img: "images/pointers/that_thing.jpg",
      },
      {
        jp: "あれ",
        rom: "are",
        en: "that (thing over there)",
        img: "images/pointers/that_thing_over_there.jpg",
      },
    ],
  };

  // --- Elements ---
  const categorySelect = document.getElementById("categorySelect");
  const directionSelect = document.getElementById("direction");
  const bigPrimary = document.getElementById("bigPrimary");
  const bigSub = document.getElementById("bigSub");
  const bigSecondary = document.getElementById("bigSecondary");
  const bigHint = document.getElementById("bigHint");
  const cardInner = document.getElementById("cardInner");
  const prevBtn = document.getElementById("prevV");
  const nextBtn = document.getElementById("nextV");
  const flipBtn = document.getElementById("flipV");
  const shuffleBtn = document.getElementById("shuffleVocab");
  const startQuizBtn = document.getElementById("startQuiz");
  const vocabQuizPanel = document.getElementById("vocabQuizPanel");
  const quizWord = document.getElementById("quizWord");
  const quizChoices = document.getElementById("quizChoices");
  const quizScoreEl = document.getElementById("quizScore");
  const quizProgressEl = document.getElementById("quizProgress");
  const endQuizBtn = document.getElementById("endQuiz");
  const showAllVocabBtn = document.getElementById("showAllVocab");
  const allVocabList = document.getElementById("allVocabList");
  const vocabImage = document.getElementById("vocabImage");

  // --- State ---
  let vocabList = [];
  let currentIndex = 0;
  let direction = "jp_en";
  let quizActive = false;
  let quizScore = 0;
  let quizProgress = 0;

  // --- Init ---
  function initCategories() {
    categorySelect.innerHTML = "";
    Object.keys(CATEGORIES).forEach((cat) => {
      const opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      categorySelect.appendChild(opt);
    });
    loadCategory(categorySelect.value);
  }

  function loadCategory(cat) {
    vocabList = [...CATEGORIES[cat]];
    currentIndex = 0;
    quizActive = false;
    allVocabList.classList.add("hidden");
    vocabQuizPanel.classList.add("hidden");
    enableCardButtons();
    updateCard();
  }

  function updateCard() {
    const item = vocabList[currentIndex];
    if (!item) return;

    if (direction === "jp_en") {
      bigPrimary.textContent = item.jp;
      bigSub.textContent = item.rom || "";
      bigSecondary.textContent = item.en;
      bigHint.textContent = "";
    } else {
      bigPrimary.textContent = item.en;
      bigSub.textContent = "";
      bigSecondary.textContent = item.jp;
      bigHint.textContent = item.rom || "";
    }

    vocabImage.src = item.img || "";
    vocabImage.alt = item.en || item.jp || "vocab image";

    document.getElementById("vocabProgress").textContent = `${
      currentIndex + 1
    } / ${vocabList.length}`;
    cardInner.classList.remove("flipped");
    cardInner.parentElement.classList.remove("hidden");
  }

  function disableCardButtons() {
    [prevBtn, nextBtn, flipBtn, shuffleBtn].forEach((btn) => {
      btn.disabled = true;
      btn.classList.add("opacity-50", "cursor-not-allowed");
    });
  }

  function enableCardButtons() {
    [prevBtn, nextBtn, flipBtn, shuffleBtn].forEach((btn) => {
      btn.disabled = false;
      btn.classList.remove("opacity-50", "cursor-not-allowed");
    });
  }

  // --- Flip ---
  flipBtn.addEventListener("click", () =>
    cardInner.classList.toggle("flipped")
  );

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + vocabList.length) % vocabList.length;
    updateCard();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % vocabList.length;
    updateCard();
  });

  shuffleBtn.addEventListener("click", () => {
    vocabList.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    updateCard();
  });

  categorySelect.addEventListener("change", () =>
    loadCategory(categorySelect.value)
  );
  directionSelect.addEventListener("change", () => {
    direction = directionSelect.value;
    updateCard();
  });

  // --- Quiz Mode ---
  startQuizBtn.addEventListener("click", () => {
    quizActive = true;
    cardInner.parentElement.classList.add("hidden");
    allVocabList.classList.add("hidden");
    disableCardButtons();
    vocabQuizPanel.classList.remove("hidden");

    // --- Generate 30 items quiz for selected category ---
    const baseList = [...CATEGORIES[categorySelect.value]];
    let repeatedList = [];
    while (repeatedList.length < 30) {
      repeatedList = repeatedList.concat(
        baseList.sort(() => 0.5 - Math.random())
      );
    }
    vocabList = repeatedList.slice(0, 30);

    currentIndex = 0;
    quizScore = 0;
    quizProgress = 0;
    renderQuiz();
  });

  function renderQuiz() {
    const item = vocabList[currentIndex];
    if (!item) return;

    quizWord.textContent = direction === "jp_en" ? item.jp : item.en;
    quizChoices.innerHTML = "";

    const correctAnswer = direction === "jp_en" ? item.en : item.jp;

    let wrongChoices = vocabList
      .map((v) => (direction === "jp_en" ? v.en : v.jp))
      .filter((v) => v !== correctAnswer);

    wrongChoices = wrongChoices.sort(() => 0.5 - Math.random()).slice(0, 3);

    const choices = [...wrongChoices, correctAnswer].sort(
      () => 0.5 - Math.random()
    );

    choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.className =
        "px-3 py-1 bg-slate-600 rounded hover:bg-indigo-600 transition";
      btn.addEventListener("click", () => checkAnswer(choice, correctAnswer));
      quizChoices.appendChild(btn);
    });

    quizProgressEl.textContent = `${quizProgress + 1} / ${vocabList.length}`;
  }

  function checkAnswer(selected, correct) {
    if (selected === correct) quizScore++;
    quizScoreEl.textContent = quizScore;
    quizProgress++;

    if (quizProgress < vocabList.length) {
      currentIndex++;
      renderQuiz();
    } else {
      alert(`🎉 Quiz finished! Your score: ${quizScore} / ${vocabList.length}`);
      vocabQuizPanel.classList.add("hidden");
      cardInner.parentElement.classList.remove("hidden");
      enableCardButtons();
      updateCard();
    }
  }

  endQuizBtn.addEventListener("click", () => {
    vocabQuizPanel.classList.add("hidden");
    cardInner.parentElement.classList.remove("hidden");
    enableCardButtons();
    updateCard();
  });

  // --- Show All Vocab ---
  showAllVocabBtn.addEventListener("click", () => {
    const isVisible = !allVocabList.classList.contains("hidden");

    if (!isVisible) {
      allVocabList.innerHTML = "";
      vocabList.forEach((item) => {
        const div = document.createElement("div");
        if (direction === "jp_en") {
          div.textContent = `${item.jp} (${item.rom}) → ${item.en}`;
        } else {
          div.textContent = `${item.en} → ${item.jp} (${item.rom})`;
        }
        div.className =
          "mb-1 px-2 py-1 rounded hover:bg-slate-600 transition cursor-default";
        allVocabList.appendChild(div);
      });

      allVocabList.classList.remove("hidden");
      cardInner.parentElement.classList.add("hidden");
      vocabQuizPanel.classList.add("hidden");
      disableCardButtons();
    } else {
      allVocabList.classList.add("hidden");
      cardInner.parentElement.classList.remove("hidden");
      enableCardButtons();
    }
  });

  initCategories();
});
