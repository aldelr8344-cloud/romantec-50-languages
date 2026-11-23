// عدّل النصوص هنا إذا أردت تغيير ترجمة أي لغة.
const PHRASES = [
  { lang: "Arabic · العربية", text: "أحبك", code: "ar" },
  { lang: "English", text: "I love you", code: "en" },
  { lang: "Spanish · Español", text: "Te amo", code: "es" },
  { lang: "French · Français", text: "Je t’aime", code: "fr" },
  { lang: "Italiano", text: "Ti amo", code: "it" },
  { lang: "Deutsch", text: "Ich liebe dich", code: "de" },
  { lang: "Português", text: "Eu te amo", code: "pt" },
  { lang: "Русский · Russian", text: "Я тебя люблю", code: "ru" },
  { lang: "中文 · Chinese", text: "我爱你", code: "zh" },
  { lang: "日本語 · Japanese", text: "愛してる", code: "ja" },
  { lang: "한국어 · Korean", text: "사랑해", code: "ko" },
  { lang: "Türkçe", text: "Seni seviyorum", code: "tr" },
  { lang: "हिन्दी · Hindi", text: "मैं तुमसे प्यार करता हूँ", code: "hi" },
  { lang: "Ελληνικά · Greek", text: "Σ’ αγαπώ", code: "el" },
  { lang: "Nederlands · Dutch", text: "Ik hou van jou", code: "nl" },
  { lang: "עברית · Hebrew", text: "אני אוהב אותך", code: "he" },
  { lang: "ไทย · Thai", text: "ฉันรักคุณ", code: "th" },
  { lang: "Tiếng Việt · Vietnamese", text: "Anh yêu em", code: "vi" },
  { lang: "Filipino", text: "Mahal kita", code: "tl" },
  { lang: "Polski · Polish", text: "Kocham cię", code: "pl" },
  { lang: "Українська · Ukrainian", text: "Я тебе кохаю", code: "uk" },
  { lang: "Română · Romanian", text: "Te iubesc", code: "ro" },
  { lang: "Svenska · Swedish", text: "Jag älskar dig", code: "sv" },
  { lang: "Norsk · Norwegian", text: "Jeg elsker deg", code: "no" },
  { lang: "Dansk · Danish", text: "Jeg elsker dig", code: "da" },
  { lang: "Suomi · Finnish", text: "Rakastan sinua", code: "fi" },
  { lang: "Čeština · Czech", text: "Miluji tě", code: "cs" },
  { lang: "Slovenčina · Slovak", text: "Ľúbim ťa", code: "sk" },
  { lang: "Magyar · Hungarian", text: "Szeretlek", code: "hu" },
  { lang: "Български · Bulgarian", text: "Обичам те", code: "bg" },
  { lang: "Српски · Serbian", text: "Волим те", code: "sr" },
  { lang: "Hrvatski · Croatian", text: "Volim te", code: "hr" },
  { lang: "Shqip · Albanian", text: "Të dua", code: "sq" },
  { lang: "Gaeilge · Irish", text: "Tá grá agam duit", code: "ga" },
  { lang: "Cymraeg · Welsh", text: "Rwy’n dy garu di", code: "cy" },
  { lang: "Latina · Latin", text: "Te amo", code: "la" },
  { lang: "አማርኛ · Amharic", text: "እወድሃለሁ", code: "am" },
  { lang: "Soomaali · Somali", text: "Waan ku jeclahay", code: "so" },
  { lang: "नेपाली · Nepali", text: "म तिमीलाई माया गर्छु", code: "ne" },
  { lang: "தமிழ் · Tamil", text: "நான் உன்னை காதலிக்கிறேன்", code: "ta" },
  { lang: "తెలుగు · Telugu", text: "నేను నిన్ను ప్రేమిస్తున్నాను", code: "te" },
  { lang: "Bahasa Melayu · Malay", text: "Saya cintakan awak", code: "ms" },
  { lang: "ភាសាខ្មែរ · Khmer", text: "ខ្ញុំស្រឡាញ់អ្នក", code: "km" },
  { lang: "ລາວ · Lao", text: "ຂ້ອຍຮັກເຈົ້າ", code: "lo" },
  { lang: "Íslenska · Icelandic", text: "Ég elska þig", code: "is" },
  { lang: "বাংলা · Bengali", text: "আমি তোমাকে ভালোবাসি", code: "bn" },
  { lang: "اردو · Urdu", text: "میں تم سے محبت کرتا ہوں", code: "ur" },
  { lang: "فارسی · Persian", text: "دوستت دارم", code: "fa" },
  { lang: "Kiswahili · Swahili", text: "Nakupenda", code: "sw" },
  { lang: "Afrikaans", text: "Ek is lief vir jou", code: "af" }
];

const AUTO_DELAY = 3000;
let currentIndex = 0;
let isPlaying = true;
let timer = null;

const phraseEl = document.getElementById("phrase");
const languageEl = document.getElementById("language");
const counterEl = document.getElementById("counter");
const progressEl = document.getElementById("progressFill");
const playButton = document.getElementById("playButton");
const playText = document.getElementById("playText");
const playIcon = document.getElementById("playIcon");
const pulseDot = document.getElementById("pulseDot");
const backgroundMusic = document.getElementById("backgroundMusic");
const soundButton = document.getElementById("soundButton");
const phraseContent = document.querySelector(".phrase-content");

function showPhrase(index) {
  currentIndex = (index + PHRASES.length) % PHRASES.length;
  const item = PHRASES[currentIndex];

  phraseContent.classList.add("changing");
  window.setTimeout(() => {
    phraseEl.textContent = item.text;
    phraseEl.lang = item.code;
    phraseEl.dir = ["ar", "he", "ur", "fa"].includes(item.code) ? "rtl" : "auto";
    languageEl.textContent = item.lang;
    counterEl.textContent = `${currentIndex + 1} / ${PHRASES.length}`;
    progressEl.style.width = `${((currentIndex + 1) / PHRASES.length) * 100}%`;
    phraseContent.classList.remove("changing");
  }, 220);
}

function nextPhrase() {
  showPhrase(currentIndex + 1);
}

function previousPhrase() {
  showPhrase(currentIndex - 1);
}

function stopAutoplay() {
  window.clearInterval(timer);
  timer = null;
}

function startAutoplay() {
  stopAutoplay();
  timer = window.setInterval(nextPhrase, AUTO_DELAY);
}

function updatePlayButton() {
  playText.textContent = isPlaying ? "إيقاف العرض التلقائي" : "تشغيل العرض التلقائي";
  playIcon.textContent = isPlaying ? "Ⅱ" : "▶";
  pulseDot.hidden = !isPlaying;
}

function toggleAutoplay() {
  isPlaying = !isPlaying;
  if (isPlaying) startAutoplay();
  else stopAutoplay();
  updatePlayButton();
}

document.getElementById("nextButton").addEventListener("click", () => {
  nextPhrase();
  if (isPlaying) startAutoplay();
});

document.getElementById("prevButton").addEventListener("click", () => {
  previousPhrase();
  if (isPlaying) startAutoplay();
});

playButton.addEventListener("click", toggleAutoplay);

document.getElementById("homeButton").addEventListener("click", (event) => {
  event.preventDefault();
  showPhrase(0);
  isPlaying = true;
  startAutoplay();
  updatePlayButton();
});

// يبدأ الصوت بعد أول لمسة/نقرة من المستخدم، لأن المتصفحات تمنع التشغيل التلقائي للصوت.
let musicUnlocked = false;
async function startMusic() {
  try {
    await backgroundMusic.play();
    soundButton.textContent = "♫";
    soundButton.setAttribute("aria-label", "إيقاف الموسيقى");
    soundButton.title = "إيقاف الموسيقى";
    musicUnlocked = true;
  } catch (error) {
    // قد يفشل التشغيل إذا لم يتم استبدال الرابط التجريبي برابط MP3 صالح.
    console.warn("تعذر تشغيل الموسيقى. تأكد من وضع رابط MP3 صالح.", error);
  }
}

function stopMusic() {
  backgroundMusic.pause();
  soundButton.textContent = "♪";
  soundButton.setAttribute("aria-label", "تشغيل الموسيقى");
  soundButton.title = "تشغيل الموسيقى";
}

// أول تفاعل في أي مكان بالصفحة يشغّل الموسيقى مرة واحدة.
document.addEventListener("pointerdown", (event) => {
  if (musicUnlocked || event.target.closest("#soundButton")) return;
  startMusic();
}, { once: true });

// زر النغمة يتحكم في الموسيقى فقط، ولا يؤثر على عرض اللغات.
soundButton.addEventListener("click", () => {
  if (backgroundMusic.paused) startMusic();
  else stopMusic();
});

function createFloatingHeart() {
  const container = document.getElementById("hearts");
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 19}px`;
  heart.style.animationDuration = `${7 + Math.random() * 6}s`;
  container.appendChild(heart);
  window.setTimeout(() => heart.remove(), 14000);
}

showPhrase(0);
startAutoplay();
updatePlayButton();
window.setInterval(createFloatingHeart, 650);
