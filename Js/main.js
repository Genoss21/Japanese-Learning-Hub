document.addEventListener("DOMContentLoaded", () => {
  const gameFrame = document.getElementById("gameFrame");
  const navLinks = document.querySelectorAll(".tab-btn");

  // --- Game Switching ---
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const url = link.getAttribute("href");
      gameFrame.src = url;

      navLinks.forEach(l => l.classList.remove("bg-slate-700"));
      link.classList.add("bg-slate-700");
    });
  });

  // --- Hiragana Data ---
  const hiraganaAll = [
    ["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"],
    ["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"],
    ["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"],
    ["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"],
    ["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"],
    ["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"],
    ["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"],
    ["や", "ya"], ["ゆ", "yu"], ["よ", "yo"],
    ["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"],
    ["わ", "wa"], ["を", "wo"], ["ん", "n"],
  ];

  const voicedGroups = {
    G: [["が", "ga"], ["ぎ", "gi"], ["ぐ", "gu"], ["げ", "ge"], ["ご", "go"]],
    Z: [["ざ", "za"], ["じ", "ji"], ["ず", "zu"], ["ぜ", "ze"], ["ぞ", "zo"]],
    D: [["だ", "da"], ["ぢ", "ji"], ["づ", "zu"], ["で", "de"], ["ど", "do"]],
    B: [["ば", "ba"], ["び", "bi"], ["ぶ", "bu"], ["べ", "be"], ["ぼ", "bo"]],
    P: [["ぱ", "pa"], ["ぴ", "pi"], ["ぷ", "pu"], ["ぺ", "pe"], ["ぽ", "po"]],
  };

  const youonGroups = {
    Kya: [["きゃ", "kya"], ["きゅ", "kyu"], ["きょ", "kyo"]],
    Sha: [["しゃ", "sha"], ["しゅ", "shu"], ["しょ", "sho"]],
    Cha: [["ちゃ", "cha"], ["ちゅ", "chu"], ["ちょ", "cho"]],
    Nyu: [["にゃ", "nya"], ["にゅ", "nyu"], ["にょ", "nyo"]],
    Hya: [["ひゃ", "hya"], ["ひゅ", "hyu"], ["ひょ", "hyo"]],
    Mya: [["みゃ", "mya"], ["みゅ", "myu"], ["みょ", "myo"]],
    Rya: [["りゃ", "rya"], ["りゅ", "ryu"], ["りょ", "ryo"]],
    Gya: [["ぎゃ", "gya"], ["ぎゅ", "gyu"], ["ぎょ", "gyo"]],
    Ja: [["じゃ", "ja"], ["じゅ", "ju"], ["じょ", "jo"]],
    Bya: [["びゃ", "bya"], ["びゅ", "byu"], ["びょ", "byo"]],
    Pya: [["ぴゃ", "pya"], ["ぴゅ", "pyu"], ["ぴょ", "pyo"]],
  };

  // --- Chart Rendering ---
  const chartContainer = document.getElementById("hiraganaChartContainer");

  function createSection(title, items) {
    const section = document.createElement("div");
    section.className = "mb-4";

    const heading = document.createElement("h3");
    heading.className = "font-semibold text-sm text-indigo-400 mb-1";
    heading.textContent = title;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-5 gap-2 text-center text-sm";

    items.forEach(([jp, rom]) => {
      const cell = document.createElement("div");
      cell.innerHTML = `
        <div class="bg-slate-700 rounded-xl py-2 hover:bg-indigo-600 cursor-pointer transition">
          <p class="text-lg font-bold">${jp}</p>
          <p class="text-xs text-slate-300">${rom}</p>
        </div>
      `;
      grid.appendChild(cell);
    });

    section.appendChild(grid);
    chartContainer.appendChild(section);
  }

  createSection("Basic Hiragana", hiraganaAll);

  for (const [title, group] of Object.entries(voicedGroups)) {
    createSection(`Voiced (${title})`, group);
  }

  for (const [title, group] of Object.entries(youonGroups)) {
    createSection(`Yōon (${title})`, group);
  }

  // --- Hide/Show Toggle ---
  const toggleBtn = document.getElementById("toggleChartBtn");
  toggleBtn.addEventListener("click", () => {
    const isHidden = chartContainer.classList.toggle("hidden");
    toggleBtn.textContent = isHidden ? "Show" : "Hide";
  });
});
