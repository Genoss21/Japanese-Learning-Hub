document.addEventListener("DOMContentLoaded", () => {
  // --- Data ---
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

  const toggleChartBtn = document.getElementById("toggleChartBtn");
  const chartContainer = document.getElementById("hiraganaChartContainer");

  toggleChartBtn.addEventListener("click", () => {
    chartContainer.classList.toggle("hidden");
    toggleChartBtn.textContent = chartContainer.classList.contains("hidden")
      ? "Show"
      : "Hide";
  });

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

  // --- Additional Hiragana Tables ---
  // Voiced consonants
  const voicedGroups = {
    G: [
      ["が", "ga"],
      ["ぎ", "gi"],
      ["ぐ", "gu"],
      ["げ", "ge"],
      ["ご", "go"],
    ],
    Z: [
      ["ざ", "za"],
      ["じ", "ji"],
      ["ず", "zu"],
      ["ぜ", "ze"],
      ["ぞ", "zo"],
    ],
    D: [
      ["だ", "da"],
      ["ぢ", "ji"],
      ["づ", "zu"],
      ["で", "de"],
      ["ど", "do"],
    ],
    B: [
      ["ば", "ba"],
      ["び", "bi"],
      ["ぶ", "bu"],
      ["べ", "be"],
      ["ぼ", "bo"],
    ],
    P: [
      ["ぱ", "pa"],
      ["ぴ", "pi"],
      ["ぷ", "pu"],
      ["ぺ", "pe"],
      ["ぽ", "po"],
    ],
  };

  // Yōon (combined sounds)
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

  // Function to render button groups
  function renderHiraganaButtons(containerId, groups) {
    const container = document.getElementById(containerId);

    Object.keys(groups).forEach((grp) => {
      // Group title
      const title = document.createElement("div");
      title.className = "text-lg font-bold mt-4 mb-2";
      title.textContent = grp;
      container.appendChild(title);

      // Button container (flex wrap)
      const btnContainer = document.createElement("div");
      btnContainer.className = "grid grid-cols-5 gap-2 mb-4"; // 5 per row

      // groups[grp] is an array of [ch, rom] pairs
      groups[grp].forEach(([ch, rom]) => {
        const btn = document.createElement("button");
        btn.className = "p-2 rounded bg-slate-700 hover:bg-slate-600 w-full";
        btn.innerHTML = `<div class="text-xl font-semibold">${ch}</div><div class="text-xs text-slate-300">${rom}</div>`;
        btn.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(rom);
          } catch (e) {}
          playTone(400);
        });
        btnContainer.appendChild(btn);
      });

      container.appendChild(btnContainer);
    });
  }

  // Render voiced & yōon groups
  renderHiraganaButtons("hiraganaChartContainer", voicedGroups);
  renderHiraganaButtons("hiraganaChartContainer", youonGroups);

  // DOM refs
  const tabBtns = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".panel");
  const categorySelect = document.getElementById("categorySelect");
  const direction = document.getElementById("direction");
  const shuffleVocab = document.getElementById("shuffleVocab");
  const studyAll = document.getElementById("studyAll");
  const studyList = document.getElementById("studyList");

  const bigPrimary = document.getElementById("bigPrimary");
  const bigSub = document.getElementById("bigSub");
  const bigKanji = document.getElementById("bigKanji");
  const bigSecondary = document.getElementById("bigSecondary");
  const bigHint = document.getElementById("bigHint");
  const cardInner = document.getElementById("cardInner");
  const prevV = document.getElementById("prevV");
  const nextV = document.getElementById("nextV");
  const flipV = document.getElementById("flipV");
  const vocabProgress = document.getElementById("vocabProgress");
  const vocabCategoryCount = document.getElementById("vocabCategoryCount");

  // Quiz refs
  const hLevel = document.getElementById("hLevel");
  const startQuiz = document.getElementById("startQuiz");
  const shuffleQuiz = document.getElementById("shuffleQuiz");
  const quizCard = document.getElementById("quizCard");
  const quizChoices = document.getElementById("quizChoices");
  const quizScore = document.getElementById("quizScore");
  const quizProgress = document.getElementById("quizProgress");

  // populate category dropdown
  Object.keys(CATEGORIES).forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });

  // populate hiragana chart
  const hiraganaChart = document.getElementById("hiraganaChart");
  hiraganaAll.forEach(([ch, rom]) => {
    const btn = document.createElement("button");
    btn.className = "p-2 rounded bg-slate-700 hover:bg-slate-600 w-full";
    btn.innerHTML = `<div class="text-xl font-semibold">${ch}</div><div class="text-xs text-slate-300">${rom}</div>`;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(rom);
      } catch (e) {} // small tone
      try {
        const ac = new (window.AudioContext || window.webkitAudioContext)();
        const o = ac.createOscillator();
        const g = ac.createGain();
        o.frequency.value = 400;
        g.gain.value = 0.02;
        o.connect(g);
        g.connect(ac.destination);
        o.start();
        g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.08);
        setTimeout(() => {
          try {
            o.stop();
            ac.close();
          } catch (e) {}
        }, 120);
      } catch (e) {}
    });
    hiraganaChart.appendChild(btn);
  });

  // vocabulary state
  let activeCategory = categorySelect.value || Object.keys(CATEGORIES)[0];
  let pool = CATEGORIES[activeCategory].slice();
  let vIndex = 0;

  function renderVocab() {
    if (!pool || pool.length === 0) {
      bigPrimary.textContent = "—";
      bigSub.textContent = "";
      bigKanji.textContent = "";
      bigSecondary.textContent = "";
      bigHint.textContent = "";
      vocabProgress.textContent = "0 / 0";
      vocabCategoryCount.textContent = "";

      // Remove image if exists
      const existingImg = document.getElementById("vocabImage");
      if (existingImg) existingImg.remove();

      return;
    }

    const it = pool[vIndex];
    const dir = direction.value;

    if (dir === "jp_en") {
      bigPrimary.textContent = it.jp;
      bigSub.textContent = it.rom || "";
      bigKanji.textContent = it.kanji || "";
      bigSecondary.textContent = "";
      bigHint.textContent = "";
    } else {
      bigPrimary.textContent = it.en;
      bigSub.textContent = "";
      bigKanji.textContent = "";
      bigSecondary.textContent = it.jp;
      bigHint.textContent = it.rom || "";
    }

    vocabProgress.textContent = `${vIndex + 1} / ${pool.length}`;
    vocabCategoryCount.textContent = `${activeCategory} • ${pool.length} words`;

    // Render image
    let imgEl = document.getElementById("vocabImage");
    if (!imgEl) {
      imgEl = document.createElement("img");
      imgEl.id = "vocabImage";
      imgEl.className = "mt-4 mx-auto rounded-lg max-h-48"; // Tailwind styling
      bigPrimary.parentNode.insertBefore(imgEl, bigPrimary.nextSibling);
    }
    imgEl.src = it.img || ""; // Fallback if no image
    imgEl.alt = it.en || it.jp;
  }

  categorySelect.addEventListener("change", () => {
    activeCategory = categorySelect.value;
    pool = CATEGORIES[activeCategory].slice();
    vIndex = 0;
    renderVocab();
  });
  direction.addEventListener("change", () => {
    cardInner.classList.remove("flipped");
    renderVocab();
  });
  shuffleVocab.addEventListener("click", () => {
    shuffle(pool);
    vIndex = 0;
    renderVocab();
  });
  prevV.addEventListener("click", () => {
    if (pool.length === 0) return;
    vIndex = (vIndex - 1 + pool.length) % pool.length;
    cardInner.classList.remove("flipped");
    renderVocab();
  });
  nextV.addEventListener("click", () => {
    if (pool.length === 0) return;
    vIndex = (vIndex + 1) % pool.length;
    cardInner.classList.remove("flipped");
    renderVocab();
  });
  flipV.addEventListener("click", () => {
    cardInner.classList.toggle("flipped");
    const showingBack = cardInner.classList.contains("flipped");
    const it = pool[vIndex];
    if (!it) return;
    if (showingBack) {
      if (direction.value === "jp_en") {
        bigSecondary.textContent = it.en;
        bigHint.textContent = it.rom || "";
      } else {
        bigSecondary.textContent = it.jp;
        bigHint.textContent = it.rom || "";
      }
    } else {
      bigSecondary.textContent = "";
      bigHint.textContent = "";
    }
  });

  studyAll.addEventListener("click", () => {
    studyList.innerHTML = pool
      .map(
        (i) =>
          `<div class="p-2 border-b border-slate-700">${i.jp} ${
            i.rom ? "(" + i.rom + ")" : ""
          } — ${i.en}</div>`
      )
      .join("");
    studyList.classList.toggle("hidden");
  });

  // initial render
  renderVocab();

  // Tab switching
  tabBtns.forEach((b) =>
    b.addEventListener("click", () => {
      tabBtns.forEach((x) => x.classList.remove("bg-slate-700"));
      b.classList.add("bg-slate-700");
      panels.forEach((p) => p.classList.add("hidden"));
      const target = document.getElementById(b.dataset.target);
      if (target) target.classList.remove("hidden");
    })
  );

  // default show vocab
  document.querySelector('.tab-btn[data-target="vocabPanel"]').click();

  // --- Hiragana quiz logic ---
  function shuffleArr(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  }

  // --- Map individual rows ---
  function getRow(key) {
    switch (key) {
      case "a":
        return hiraganaAll.slice(0, 5); // あ–お
      case "ka":
        return hiraganaAll.slice(5, 10); // か–こ
      case "sa":
        return hiraganaAll.slice(10, 15); // さ–そ
      case "ta":
        return hiraganaAll.slice(15, 20); // た–と
      case "na":
        return hiraganaAll.slice(20, 25); // な–の
      case "ha":
        return hiraganaAll.slice(25, 30); // は–ほ
      case "ma":
        return hiraganaAll.slice(30, 35); // ま–も
      case "ya":
        return hiraganaAll.slice(35, 38); // や–よ
      case "ra":
        return hiraganaAll.slice(38, 43); // ら–ろ
      case "wa":
        return hiraganaAll.slice(43); // わ–ん
      default:
        return hiraganaAll.slice();
    }
  }

  // --- Combine groups ---
  function levelGroup(key) {
    switch (key) {
      case "a_ko":
        return [...getRow("a"), ...getRow("ka")];
      case "sa_to":
        return [...getRow("sa"), ...getRow("ta")];
      case "na_ho":
        return [...getRow("na"), ...getRow("ha")];
      case "ma_yo":
        return [...getRow("ma"), ...getRow("ya")];
      case "ra_n":
        return [...getRow("ra"), ...getRow("wa")];
      case "all":
        return hiraganaAll.slice();
      default:
        return getRow(key);
    }
  }

  // --- Quiz core ---
  let quizPool = [];
  let qIndex = 0;
  let qScore = 0;

  function buildQuiz(key) {
    const base = levelGroup(key);
    let pool = [];

    // Adjust total items
    if (key === "all" || key.includes("_")) {
      while (pool.length < 100) {
        const p = base[Math.floor(Math.random() * base.length)];
        pool.push({ ch: p[0], rom: p[1] });
      }
    } else {
      while (pool.length < 50) {
        const p = base[Math.floor(Math.random() * base.length)];
        pool.push({ ch: p[0], rom: p[1] });
      }
    }

    shuffleArr(pool);
    quizPool = pool;
    qIndex = 0;
    qScore = 0;
    document.getElementById("quizScore").textContent = qScore;

    renderQuiz();
  }

  // --- Render question ---
  function renderQuiz() {
    if (qIndex >= quizPool.length) {
      alert(`🎉 Quiz finished! Your score: ${qScore}/${quizPool.length}`);
      return;
    }

    const current = quizPool[qIndex];
    document.getElementById("bigPrimary").textContent = current.ch;
    document.getElementById("bigSecondary").textContent = current.rom;
    document.getElementById("bigHint").textContent = "";
    document.getElementById("quizProgress").textContent = `Progress: ${
      qIndex + 1
    } / ${quizPool.length}`;
  }

  // --- Next question ---
  function nextQuestion(correct = true) {
    if (correct) qScore++;
    qIndex++;
    document.getElementById("quizScore").textContent = qScore;
    renderQuiz();
  }

  // --- Event: Start Quiz ---
  document.getElementById("startQuiz").addEventListener("click", () => {
    const level = document.getElementById("hLevel").value;
    buildQuiz(level);
  });

  // Shuffle existing quiz without changing level
  document.getElementById("shuffleQuiz").addEventListener("click", () => {
    if (quizPool.length === 0) return alert("Please start a quiz first!");
    shuffleArr(quizPool);
    qIndex = 0;
    qScore = 0;
    document.getElementById("quizScore").textContent = qScore;
    renderQuiz();
  });

  function renderQuiz() {
    // If no items in quizPool, stop
    if (!quizPool.length) return;

    // If finished all questions — show congratulations message
    if (qIndex >= quizPool.length) {
      quizCard.textContent = "";
      quizChoices.innerHTML = "";
      quizProgress.textContent = `${quizPool.length} / ${quizPool.length}`;

      // 🎉 Show finish message
      const msg = document.getElementById("quizFinishMsg");
      msg.classList.remove("hidden", "opacity-0");
      msg.classList.add("animate-bounce", "mb-4");

      const text = document.getElementById("quizText");

      text.textContent = "Try a different set!";
      text.classList.remove("my-4");

      // Optional: stop bounce after 2s
      // setTimeout(() => msg.classList.remove("animate-bounce"), 2000);

      // Optional: play success tone
      playTone(5000);

      // Optional: auto-scroll into view
      msg.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Hide finish message if restarting
    const msg = document.getElementById("quizFinishMsg");
    msg.classList.add("hidden");

    const it = quizPool[qIndex];
    quizCard.textContent = it.ch;

    // Generate 3 wrong + 1 correct
    const options = [it.rom];
    const pool = hiraganaAll.map((x) => x[1]).filter((r) => r !== it.rom);
    shuffleArr(pool);
    options.push(pool[0], pool[1], pool[2]);
    shuffleArr(options);

    quizChoices.innerHTML = "";

    options.forEach((opt) => {
      const b = document.createElement("button");
      b.className =
        "choice-btn px-4 py-3 bg-slate-600 rounded hover:bg-slate-500 transition-colors";
      b.textContent = opt;

      b.addEventListener("click", () => {
        Array.from(quizChoices.children).forEach((ch) => (ch.disabled = true));

        if (opt === it.rom) {
          b.classList.replace("bg-slate-600", "bg-emerald-500");
          qScore++;
          quizScore.textContent = qScore;
          playTone(2000);
        } else {
          b.classList.replace("bg-slate-600", "bg-red-600");
          playTone(520);
        }

        // Highlight correct answer
        Array.from(quizChoices.children).forEach((ch) => {
          if (ch.textContent === it.rom) {
            ch.classList.replace("bg-slate-600", "bg-emerald-500");
          }
        });

        setTimeout(() => {
          qIndex++;
          renderQuiz();
        }, 700);
      });

      quizChoices.appendChild(b);
    });

    quizProgress.textContent = `${qIndex + 1} / ${quizPool.length}`;
  }

  startQuiz.addEventListener("click", () => {
    buildQuiz(hLevel.value);
  });
  shuffleQuiz.addEventListener("click", () => {
    if (quizPool.length) {
      shuffleArr(quizPool);
      qIndex = 0;
      renderQuiz();
    }
  });

  function playTone(freq) {
    try {
      const ac = new (window.AudioContext || window.webkitAudioContext)();
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.frequency.value = freq;
      g.gain.value = 0.02;
      o.connect(g);
      g.connect(ac.destination);
      o.start();
      g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.08);
      setTimeout(() => {
        try {
          o.stop();
          ac.close();
        } catch (e) {}
      }, 120);
    } catch (e) {}
  }

  // helpful keyboard shortcuts for vocab
  document.addEventListener("keydown", (e) => {
    const activePanel = Array.from(panels).find(
      (p) => !p.classList.contains("hidden")
    )?.id;
    if (activePanel === "vocabPanel") {
      if (e.key === "ArrowRight") nextV.click();
      if (e.key === "ArrowLeft") prevV.click();
      if (e.key === " ") {
        e.preventDefault();
        flipV.click();
      }
    }
  });

  // --- Vocabulary Fill-in-the-Blank Quiz ---
  const vfCategory = document.getElementById("vfCategory");
  const vfStart = document.getElementById("vfStart");
  const vfEnglish = document.getElementById("vfEnglish");
  const vfRomaji = document.getElementById("vfRomaji");
  const vfSlots = document.getElementById("vfSlots");
  const vfLetters = document.getElementById("vfLetters");
  const vfScore = document.getElementById("vfScore");
  const vfProgress = document.getElementById("vfProgress");
  const confettiRoot = document.getElementById("confettiRoot");

  let vfPool = [];
  let vfIndex = 0;
  let vfPoints = 0;

  // Populate categories
  Object.keys(CATEGORIES).forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    vfCategory.appendChild(opt);
  });

  // Drag & Drop helpers
  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.dataset.letter);
  }

  // drop on slot
  function drop(ev) {
    ev.preventDefault();
    const letter = ev.dataTransfer.getData("text");
    const slot = ev.target;
    if (!slot.textContent) {
      slot.textContent = letter;
      slot.classList.add("filled");
      // remove letter from pool
      const poolBtn = Array.from(vfLetters.children).find(
        (b) => b.dataset.letter === letter
      );
      if (poolBtn) poolBtn.remove();
      checkAnswer();
    } else {
      // invalid drop: return letter to pool
      const b = document.createElement("div");
      b.className = "px-3 py-2 bg-slate-600 rounded cursor-pointer select-none";
      b.textContent = letter;
      b.draggable = true;
      b.dataset.letter = letter;
      b.addEventListener("dragstart", drag);
      vfLetters.appendChild(b);
    }
  }

  // Remove letter on slot click
  function enableSlotRemoval(slot) {
    slot.addEventListener("click", () => {
      if (slot.textContent) {
        const letter = slot.textContent;
        const b = document.createElement("div");
        b.className =
          "px-3 py-2 bg-slate-600 rounded cursor-pointer select-none";
        b.textContent = letter;
        b.draggable = true;
        b.dataset.letter = letter;
        b.addEventListener("dragstart", drag);
        vfLetters.appendChild(b);
        slot.textContent = "";
        slot.classList.remove("filled");
      }
    });
  }

  // Check if the filled slots match
  function checkAnswer() {
    const it = vfPool[vfIndex];
    const current = Array.from(vfSlots.children)
      .map((c) => c.textContent)
      .join("");
    if (current === it.jp) {
      vfPoints++;
      vfScore.textContent = vfPoints;
      playTone(800);
      showConfetti();
      setTimeout(nextVfWord, 500);
    }
  }

  function nextVfWord() {
    vfIndex++;
    if (vfIndex >= vfPool.length) vfIndex = 0; // loop
    renderVfWord();
  }

  function renderVfWord() {
    if (!vfPool.length) return;
    const it = vfPool[vfIndex];
    vfEnglish.textContent = it.en;
    vfRomaji.textContent = it.rom;
    vfProgress.textContent = `${vfIndex + 1} / ${vfPool.length}`;

    // render slots
    vfSlots.innerHTML = "";
    it.jp.split("").forEach((ch) => {
      const slot = document.createElement("div");
      slot.className =
        "w-10 h-12 border-b-2 border-slate-400 text-2xl flex items-center justify-center cursor-pointer";
      slot.addEventListener("dragover", allowDrop);
      slot.addEventListener("drop", drop);
      enableSlotRemoval(slot);
      vfSlots.appendChild(slot);
    });

    // render letters: correct + random distractors
    vfLetters.innerHTML = "";
    const letters = it.jp.split("").slice();
    while (letters.length < it.jp.length + 3) {
      const r = hiraganaAll[Math.floor(Math.random() * hiraganaAll.length)][0];
      if (!letters.includes(r)) letters.push(r);
    }
    shuffleArr(letters);
    letters.forEach((l) => {
      const b = document.createElement("div");
      b.className = "px-3 py-2 bg-slate-600 rounded cursor-pointer select-none";
      b.textContent = l;
      b.draggable = true;
      b.dataset.letter = l;
      b.addEventListener("dragstart", drag);
      vfLetters.appendChild(b);
    });
  }

  // Confetti
  function showConfetti() {
    const rect = vfSlots.getBoundingClientRect(); // position of the word
    for (let i = 0; i < 50; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      // random position within the word slots
      c.style.left = rect.left + Math.random() * rect.width + "px";
      c.style.top = rect.top + Math.random() * rect.height + "px";
      c.textContent = "🎉";
      confettiRoot.appendChild(c);

      const fall = c.animate(
        [
          { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
          {
            transform: `translateY(${50 + Math.random() * 50}px) rotate(${
              Math.random() * 720
            }deg)`,
            opacity: 0,
          },
        ],
        { duration: 1000 + Math.random() * 500, easing: "ease-out" }
      );

      fall.onfinish = () => c.remove();
    }
  }

  vfStart.addEventListener("click", () => {
    const cat = vfCategory.value;
    vfPool = CATEGORIES[cat].slice();
    shuffleArr(vfPool);
    vfIndex = 0;
    vfPoints = 0;
    vfScore.textContent = vfPoints;
    renderVfWord();
  });

  const container = document.getElementById("hiraganaChartContainer");

  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("cursor-grabbing");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.classList.remove("cursor-grabbing");
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.remove("cursor-grabbing");
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    container.scrollLeft = scrollLeft - walk;
  });
});
