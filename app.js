// ===============================
// ИГРА ДЛЯ ДВОИХ
// ===============================

// ---------- КАРТОЧКИ ----------

const CARDS = [

  // ФАЗА 1 — Лёгкий флирт

  {
    id: 1,
    phase: 1,
    text: "Возьми партнёра за руку и не отпускай её до следующей карточки."
  },
  {
    id: 2,
    phase: 1,
    text: "Посмотрите друг другу в глаза 10 секунд. Кто первым улыбнётся — проиграл. <b>Проигравший делает 1 глоток. Если нет проигравшего, то пьют оба.</b>"
  },
  {
    id: 3,
    phase: 1,
    text: "Положи голову партнёру на плечо и оставайся так до следующей карточки. <b>Партнёр делает 1 глоток.</b>"
  },
  {
    id: 4,
    phase: 1,
    text: "Сцепите мизинцы и не размыкайте их до следующей карточки."
  },
  {
    id: 5,
    phase: 1,
    text: "Положи ладонь партнёру на колено/бедро и оставь её там до следующей карточки. <b>Партнёр делает 1 глоток.</b>"
  },
  {
    id: 6,
    phase: 1,
    text: "Сядьте так, чтобы ваши плечи соприкасались, и оставайтесь так до следующей карточки."
  },
  {
    id: 7,
    phase: 1,
    text: "Партнёр закрывает глаза. Поднеси своё лицо близко к его лицу и задержись так на несколько секунд. Кто первым засмеётся или отстранится — <b>делает 1 глоток.</b>"
  },
  {
    id: 8,
    phase: 1,
    text: "Положи руку партнёру на талию и оставь её там до следующей карточки."
  },
  {
    id: 9,
    phase: 1,
    text: "Подмигни партнёру. Он или она должен(на) ответить тем же."
  },
  {
    id: 10,
    phase: 1,
    text: "Наклонись к партнёру так, будто собираешься что-то ему сказать, но вместо этого просто улыбнись/чмокни и вернись к просмотру фильма."
  },
  {
    id: 11,
    phase: 1,
    text: "Положи голову на колени партнёра и оставайся так до следующей карточки. <b>Партнёр делает 1 глоток.</b>"
  },
  {
    id: 12,
    phase: 1,
    text: "Повернись к партнёру. Он закрывает глаза. Скажи первое, что захочется сказать, а затем снова вернитесь к фильму."
  },
  {
    id: 13,
    phase: 1,
    text: "Выберите одно: держаться за руки, обняться или просто сидеть вплотную друг к другу до следующей карточки."
  },
  {
    id: 14,
    phase: 1,
    text: "Сядь максимально близко к партнёру. До следующей карточки разрывать дистанцию нельзя."
  },
  {
    id: 15,
    phase: 1,
    text: "Ложитесь и обнимайте друг друга на протяжении 20 секунд."
  },
  {
    id: 16,
    phase: 1,
    text: "Положи ноги на колени партнёра и оставь их до следующей карточки. Партнер должен положить руки на твои колени. <b>Оба делают по 1 глотку.</b>"
  },
  {
    id: 17,
    phase: 1,
    text: "Партнёр закрывает глаза. Нежно проведи ладонью от уха через щеку и до губ партнера. <b>Сделай 1 глоток.</b>"
  },
  {
    id: 18,
    phase: 1,
    text: "Коснись лба партнера своим лбом и потом легонько дотронься кончиком носа до носа партнера."
  },
  {
    id: 19,
    phase: 1,
    text: "Обхвати предплечье партнера своей рукой и оставь её до следующей карточки."
  },
  {
    id: 20,
    phase: 1,
    text: "Наклонись к партнёру и задержись совсем близко, не касаясь его, на 10 секунд. <b>Кто первым отведёт взгляд — делает 1 глоток. Если проигравших нет, то пьют оба.</b>"
  },
  {
    id: 21,
    phase: 1,
    text: "Партнёр выбирает: держаться за руки или обняться до следующей карточки."
  },
  {
    id: 22,
    phase: 1,
    text: "Держи руку под футболкой партнера до следующей карточки. <b>Оба пьют по глотку.</b>"
  },
  {
    id: 23,
    phase: 1,
    text: "Погладь партнёра по ноге."
  },
  {
    id: 24,
    phase: 1,
    text: "Сядьте лицом друг к другу, не говоря ни слова. <b>Кто первым нарушит молчание — делает 1 глоток. Если оба молчали в течение 1 минуты — сделайте по глотку.</b>"
  },
  {
    id: 25,
    phase: 1,
    text: "Сядьте рядом, соприкасаясь плечами, и смотрите друг другу в глаза 30 секунд. <b>Кто первым отведёт взгляд — делает 1 глоток.</b> Если оба выдержали — одновременно поцелуйте друг друга в щёку."
  },
  {
    id: 26,
    phase: 1,
    text: "Один кладёт ладонь партнёра себе на щёку и держит её так 30 секунд, не отводя взгляда. После этого поменяйтесь ролями. <b>Кто первым улыбнётся — делает 1 глоток.</b>"
  },
  {
    id: 27,
    phase: 1,
    text: "По очереди медленно проведите пальцами по волосам партнёра в течение 20 секунд. Нельзя разговаривать. После этого одновременно скажите, понравилось ли вам — и <b>сделайте по глотку.</b>"
  },
  {
    id: 28,
    phase: 1,
    text: "Сядьте максимально близко друг к другу и возьмитесь за руки. В течение 1 минуты нельзя размыкать руки. <b>Кто первым отпустит — делает 1 глоток.</b> Если выдержали — поцелуйтесь быстро в губы."
  },
  {
    id: 29,
    phase: 1,
    text: "В течение 30 секунд один партнёр может только смотреть на второго, а второй — медленно улыбаться, приближаться и отдаляться, не прикасаясь. Затем поменяйтесь ролями. <b>Кто первым засмеётся — делает 1 глоток.</b>"
  },
  {
    id: 30,
    phase: 1,
    text: "Каждый по очереди говорит партнёру на ухо одно короткое предложение, которое приятно услышать именно от него. После каждого признания — поцелуй в щёку и <b>по 1 глотку.</b>"
  },

  // ФАЗА 2 — больше физической близости

  {
    id: 31,
    phase: 2,
    text: "Партнёр выбирает любое простое действие. Выполни его так, будто ты главный герой очень драматичного фильма."
  },
  {
    id: 32,
    phase: 2,
    text: "Партнёр закрывает глаза. У тебя есть 10 секунд, чтобы заставить его улыбнуться, не говоря ни слова. <b>Проигравший делает глоток</b> и снимает одну вещь с себя."
  },
  {
    id: 33,
    phase: 2,
    text: "По очереди назовите число от 1 до 5. Если числа совпали — поцелуйтесь. <b>Если числа не совпали — оба делают по 1 глотку.</b>"
  },
  {
    id: 34,
    phase: 2,
    text: "Партнёр загадывает любое действие, которое ты должен(а) выполнить за 5 секунд."
  },
  {
    id: 35,
    phase: 2,
    text: "Следующие 5 минут общайтесь только томным шепотом на ушко партнеру. Разрешается прикасаться к лицу, волосам и шее руками во время шепота."
  },
  {
    id: 36,
    phase: 2,
    text: "Посмотри на партнёра и скажи первое слово, которое приходит тебе в голову. Объяснять свой выбор нельзя."
  },
  {
    id: 37,
    phase: 2,
    text: "Сделай вид, что вы только что познакомились. У тебя есть 10 секунд, чтобы произвести на партнёра впечатление."
  },
  {
    id: 38,
    phase: 2,
    text: "Скажи партнёру одну короткую фразу таким голосом, будто это реплика из очень плохого романтического фильма."
  },
  {
    id: 39,
    phase: 2,
    text: "Поцелуй партнёра один раз, а затем оба должны совершенно серьёзно продолжить смотреть фильм две минуты. <b>Если кто-то засмеялся — целует в щеку партнера и делает глоток. После поцелуя оба делают по 1 глотку.</b>"
  },
  {
    id: 40,
    phase: 2,
    text: "Партнёр выбирает любое слово. Произнеси его так, будто признаёшься в любви."
  },
  {
    id: 41,
    phase: 2,
    text: "Партнёр закрывает глаза. Ты меняешь одну небольшую деталь в своём образе. Он должен заметить, что изменилось. <b>Если не заметит — делает 1 глоток</b> и целует в место, где произошло изменение."
  },
  {
    id: 42,
    phase: 2,
    text: "В течение 15 секунд один из вас может давать другому только команды из одного слова. Второй должен их выполнять."
  },
  {
    id: 43,
    phase: 2,
    text: "Партнёр загадывает любое место для одного поцелуя на своем теле. После этого, другой партнер дышит рядом с предполагаемой зоной поцелуя и слегка щекочет носом/губами весь путь, пока первый направляет его с помощью «горячо-холодно». Когда зона найдена - поцелуй не менее 5 секунд. <b>Оба делают по глотку.</b>"
  },
  {
    id: 44,
    phase: 2,
    text: "Поставьте таймер на 20 секунд. За это время каждый должен придумать для партнёра самое неожиданное, но приятное действие. Оба выполняют свои действия после таймера."
  },
  {
    id: 45,
    phase: 2,
    text: "Сделай партнёру комплимент, который нельзя связать с его внешностью."
  },
  {
    id: 46,
    phase: 2,
    text: "Сыграйте в «камень, ножницы, бумага» три раза. <b>Проигравший по итогам трёх раундов делает 2 глотка</b> и снимает одну вещь с себя."
  },
  {
    id: 47,
    phase: 2,
    text: "Каждый должен за 5 секунд назвать одну вещь, которая особенно нравится ему в партнёре. <b>Кто не успел — делает 1 глоток.</b>"
  },
  {
    id: 48,
    phase: 2,
    text: "Партнёр исполняет любое загаданное тобой действие. <b>После выполнения оба делают по 1 глотку.</b>"
  },
  {
    id: 49,
    phase: 2,
    text: "Партнёр легонько кусает ушко и говорит шепотом приятный комплимент."
  },
  {
    id: 50,
    phase: 2,
    text: "Партнёр кладёт твою руку туда, куда хочет, чтобы ты его коснулся(ась). Оставьте её там на несколько секунд. Ответить таким же прикосновением можно."
  },

  // ===== ФАЗА 3 — ИГРА =====

  {
    id: 51,
    phase: 3,
    text: "Завяжи глаза партнёру и поцелуй его в три места тела на свой выбор. Партнёр предварительно пишет в телефоне эти зоны, пытаясь угадать. <b>Если он угадывает зоны, то за каждую угаданную зону ты пьёшь 1 штрафной глоток, а если зоны не отгаданы — за каждую ошибку пьёт партнёр.</b>"
  },
  {
    id: 52,
    phase: 3,
    text: "Один оценивает своё возбуждение от 1 до 10. Второй пытается довести его на один балл выше, не спрашивая что именно делать. <b>После выполнения сделайте по глотку.</b>"
  },
  {
    id: 53,
    phase: 3,
    text: "Наклонись к партнёру так близко, чтобы ваши губы почти соприкасались. Останься так на 15 секунд, не целуя его. Затем партнёр решает: поцеловать тебя или заставить повторить попытку."
  },
  {
    id: 54,
    phase: 3,
    text: "Завяжи партнёру глаза. Дай ему три попытки угадать, где ты находишься относительно него: слева, справа или прямо перед ним."
  },
  {
    id: 55,
    phase: 3,
    text: "Покажи на партнёре фантазию, которую никогда раньше ему не рассказывал(а)."
  },
  {
    id: 56,
    phase: 3,
    text: "Партнёр загадывает тебе три последовательных действия. Ты должен(на) выполнить их в правильном порядке, не переспрашивая."
  },
  {
    id: 57,
    phase: 3,
    text: "Выберите по одному предмету вокруг вас. Каждый должен придумать для своего предмета максимально неожиданное романтическое применение и показать его партнёру."
  },
  {
    id: 58,
    phase: 3,
    text: "Партнёр закрывает глаза. У тебя есть 15 секунд, чтобы изменить что-нибудь в пространстве вокруг вас. Он должен определить, что именно изменилось."
  },
  {
    id: 59,
    phase: 3,
    text: "Напиши на телефоне три небольших действия, которые готов(а) выполнить для партнёра. Присвой им номера 1, 2 и 3. Партнёр называет случайное число, не зная, какое действие ему достанется. <b>Если партнёр отказывается выполнять выпавшее действие — он делает 1 глоток.</b>"
  },
  {
    id: 60,
    phase: 3,
    text: "Партнёр закрывает глаза. Поднеси к нему свою ладонь, волосы или любой предмет одежды. Он должен угадать, что находится перед ним, не касаясь этого."
  },
  {
    id: 61,
    phase: 3,
    text: "Каждый по очереди пишет в телефоне одно короткое действие, которое хотел бы получить от партнёра. Затем телефоны одновременно показываются друг другу — и оба выполняют написанное."
  },
  {
    id: 62,
    phase: 3,
    text: "Попроси партнёра указать одно место на своём теле, куда он хочет получить поцелуй. Поцелуй его именно туда."
  },
  {
    id: 63,
    phase: 3,
    text: "Завяжи партнёру глаза. Попроси его вытянуть руки перед собой. Медленно поднеси к ним свою руку, но остановись до прикосновения. Он должен сказать «сейчас», когда думает, что ты коснёшься его."
  },
  {
    id: 64,
    phase: 3,
    text: "Представь, что вы с партнёром оказались в месте, где вас никто не знает и не увидит. Покажи одним действием, что ты сделал(а) бы первым."
  },
  {
    id: 65,
    phase: 3,
    text: "Партнёр выбирает любую твою вещь, которую можно снять или изменить без переодевания. Ты решаешь, выполнить его выбор или вместо этого дать ему право выбрать твой следующий поцелуй."
  },
  {
    id: 66,
    phase: 3,
    text: "Партнёр закрывает глаза. Назови три места, куда ты собираешься его поцеловать, но одно из них замени на другое в последний момент. Он должен угадать, какое место ты изменил(а). <b>Если угадывает — ты делаешь 1 глоток. Если не угадывает — он делает 1 глоток.</b>"
  },
  {
    id: 67,
    phase: 3,
    text: "Выбери одно небольшое действие, которого хочешь добиться от партнёра в течение следующих нескольких минут. Не говори ему, что именно задумал(а), и постарайся сделать так, чтобы он выполнил его сам. Когда получится — раскрой свою цель."
  },
  {
    id: 68,
    phase: 3,
    text: "Партнёр выбирает одно место на твоём теле, которого ты обычно не касаешься во время объятий. Положи туда ладонь и оставь её на несколько секунд."
  },
  {
    id: 69,
    phase: 3,
    text: "Каждый тайно выбирает одно: поцеловать партнёра, обнять его или просто прикоснуться к нему. Одновременно покажите свой выбор. Если выбор совпал — выполните его вместе. Если не совпал — каждый выполняет выбор партнёра."
  },
  {
    id: 70,
    phase: 3,
    text: "Выбери для партнёра одно действие, которое он должен выполнить прямо сейчас. Оно должно быть неожиданным, но приятным. <b>После выполнения партнёр делает 1 глоток.</b>"
  },];

// ---------- КАРТОЧКИ ФИЛЬМА ----------

const MOVIE_CARDS = [

  {
    id: 101,
    text: "Когда на экране кто-нибудь кого-нибудь обнимет — обнимитесь так же."
  },

  {
    id: 102,
    text: "Когда один из персонажей посмотрит на другого особенно долго — повторите этот взгляд друг на друге."
  },

  {
    id: 103,
    text: "Когда на экране прозвучит признание в любви — возьмите друг друга за руки."
  },

  {
    id: 104,
    text: "Когда персонажи поцелуются — поцелуйте друг друга."
  },

  {
    id: 105,
    text: "Выберите одного персонажа фильма. В следующий раз, когда он появится в кадре, коснитесь партнёра."
  },

  {
    id: 106,
    text: "Когда в фильме начнётся романтическая сцена — обнимитесь до её окончания."
  }
];


// ---------- СОСТОЯНИЕ ИГРЫ ----------

let currentPhase = 1;

let deck = [];
let movieDeck = [];

let player1 = "Игрок 1";
let player2 = "Игрок 2";

let startTime = null;

let currentCard = null;
let currentIsMovieCard = false;
let currentPlayer = 1;

let drinks1 = 0;
let drinks2 = 0;

const savedStartTime = localStorage.getItem("gameStartTime");
if (savedStartTime) {
  startTime = Number(savedStartTime);
}

function saveGameState() {
  const gameState = {
    currentPhase,
    deck,
    movieDeck,
    player1,
    player2,
    startTime,
    currentCard,
    currentIsMovieCard,
    currentPlayer,
    drinks1,
    drinks2
  };

  localStorage.setItem("gameState", JSON.stringify(gameState));
}

function updateScore() {
  document.getElementById("score").innerHTML =
    `<span class="wine-glass">🍷</span> ${drinks1} : ${drinks2}`;
}

document.getElementById("sip1Btn").addEventListener("click", () => {
  if (currentPlayer === 1) {
    drinks1 += 1;
  } else {
    drinks2 += 1;
  }

  updateScore();
  saveGameState();
});

document.getElementById("sip2Btn").addEventListener("click", () => {
  if (currentPlayer === 1) {
    drinks2 += 1;
  } else {
    drinks1 += 1;
  }

  updateScore();
  saveGameState();
});

document.getElementById("sipBothBtn").addEventListener("click", () => {
  drinks1 += 1;
  drinks2 += 1;

  updateScore();
  saveGameState();
});

// ---------- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ----------

function shuffle(array) {

  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}


// ---------- НАЧАЛО ИГРЫ ----------

function startGame() {

  player1 = document.getElementById("player1").value.trim() || "Игрок 1";
  player2 = document.getElementById("player2").value.trim() || "Игрок 2";

  currentPhase = 1;

  deck = shuffle(
    CARDS.filter(card => card.phase === currentPhase)
  );

  movieDeck = shuffle(MOVIE_CARDS);

  startTime = Date.now();
  localStorage.setItem("gameStartTime", startTime);
  currentCard = null;
  currentIsMovieCard = false;
  drinks1 = 0;
  drinks2 = 0;
  saveGameState();
  updateScore();

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("finish").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  showNextCard();
}


// ---------- ОПРЕДЕЛЕНИЕ ФАЗЫ ----------

function updatePhase() {

  if (!startTime) return;

  const elapsedMinutes =
    (Date.now() - startTime) / 1000 / 60;

  let newPhase;

  if (elapsedMinutes < 40) {
    newPhase = 1;
  }
  else if (elapsedMinutes < 70) {
    newPhase = 2;
  }
  else {
    newPhase = 3;
  }

  if (newPhase !== currentPhase) {

    currentPhase = newPhase;

    deck = shuffle(
      CARDS.filter(card => card.phase === currentPhase)
    );

    currentCard = null;
    currentIsMovieCard = false;
    saveGameState();

    showPhaseMessage();
  }
}


// ---------- НАЗВАНИЯ ФАЗ ----------

function getPhaseName() {

  if (currentPhase === 1) return "Флирт";
  if (currentPhase === 2) return "Ближе";
  return "Игра";
}


// ---------- ПОКАЗ КАРТОЧКИ ----------

function showNextCard() {

  updatePhase();

  if (deck.length === 0) {

    deck = shuffle(
      CARDS.filter(card => card.phase === currentPhase)
    );
  }

  const card = deck.shift();

  currentCard = card;
  currentIsMovieCard = false;

  document.getElementById("turn").textContent =
    `Ход: ${currentPlayer === 1 ? player1 : player2} · ${getPhaseName()}`;

  document.getElementById("levelBadge").textContent =
    getPhaseName();

  document.getElementById("typeBadge").textContent =
    "Основная";

  document.getElementById("cardText").innerHTML =
    card.text;

  document.getElementById("movieHint").classList.add("hidden");

  document.getElementById("penalty").classList.add("hidden");

  document.getElementById("feedback").textContent =
    "Карточка сыграна? Жмите «Выполнено».";

  saveGameState();
}


// ---------- КАРТОЧКА ФИЛЬМА ----------

function showMovieCard() {

  if (movieDeck.length === 0) {
    movieDeck = shuffle(MOVIE_CARDS);
  }

  const card = movieDeck.shift();

  currentCard = card;
  currentIsMovieCard = true;

  document.getElementById("turn").textContent =
    "🎬 Карточка фильма";

  document.getElementById("levelBadge").textContent =
    "Фильм";

  document.getElementById("typeBadge").textContent =
    "Особая";

  document.getElementById("cardText").textContent =
    card.text;

  document.getElementById("movieHint").classList.remove("hidden");

  document.getElementById("movieHint").textContent =
    "🎬 Следи за экраном — задание сработает во время фильма.";

  document.getElementById("penalty").classList.add("hidden");

  document.getElementById("feedback").textContent =
    "После выполнения нажмите «Готово».";
  saveGameState();
}


// ---------- СООБЩЕНИЕ О НОВОЙ ФАЗЕ ----------

function showPhaseMessage() {

  document.getElementById("feedback").textContent =
    `♡ Новый этап: ${getPhaseName()}`;
}


// ---------- КНОПКИ ----------

document.getElementById("startBtn").addEventListener(
  "click",
  startGame
);


document.getElementById("doneBtn").addEventListener(
  "click",
  () => {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    saveGameState();
    showNextCard();
  }
);


document.getElementById("skipBtn").addEventListener(
  "click",
  showNextCard
);


document.getElementById("newGameBtn").addEventListener(
  "click",
  () => {

    localStorage.removeItem("gameStartTime");

    startTime = null;

    localStorage.removeItem("gameState");
    currentCard = null;
    currentIsMovieCard = false;

    document.getElementById("game").classList.add("hidden");
    document.getElementById("setup").classList.remove("hidden");
  }
);


document.getElementById("restartBtn").addEventListener(
  "click",
  () => {

    localStorage.removeItem("gameStartTime");

    startTime = null;

    localStorage.removeItem("gameState");
    currentCard = null;
    currentIsMovieCard = false;

    document.getElementById("finish").classList.add("hidden");
    document.getElementById("setup").classList.remove("hidden");
  }
);


// ---------- КНОПКА ФИЛЬМА ----------

// Создаём её программно,
// чтобы пока не переделывать HTML.

const movieButton = document.createElement("button");

movieButton.textContent = "🎬 Карточка фильма";

movieButton.className = "secondary-btn";

movieButton.style.marginTop = "10px";

movieButton.addEventListener(
  "click",
  showMovieCard
);

document.querySelector(".actions").appendChild(movieButton);


// ---------- ПРОВЕРКА ВРЕМЕНИ ----------

// Проверяем смену этапа раз в 30 секунд.

setInterval(() => {

  if (!startTime) return;

  updatePhase();

}, 30000);

const movieRulesBtn = document.getElementById("movieRulesBtn");
const movieRulesModal = document.getElementById("movieRulesModal");
const closeMovieRules = document.getElementById("closeMovieRules");
const modalOverlay = movieRulesModal.querySelector(".modal-overlay");

movieRulesBtn.addEventListener("click", () => {
  movieRulesModal.classList.remove("hidden");
});

closeMovieRules.addEventListener("click", () => {
  movieRulesModal.classList.add("hidden");
});

modalOverlay.addEventListener("click", () => {
  movieRulesModal.classList.add("hidden");
});

function restoreGameState() {
  const savedGame = localStorage.getItem("gameState");

  if (!savedGame) return;

  try {
    const gameState = JSON.parse(savedGame);

    currentPhase = gameState.currentPhase;
    deck = gameState.deck || [];
    movieDeck = gameState.movieDeck || [];
    player1 = gameState.player1 || "Игрок 1";
    player2 = gameState.player2 || "Игрок 2";
    startTime = Number(gameState.startTime);
    currentCard = gameState.currentCard;
    currentIsMovieCard = gameState.currentIsMovieCard;
    currentPlayer = gameState.currentPlayer || 1;

    drinks1 = gameState.drinks1 || 0;
    drinks2 = gameState.drinks2 || 0;

    updateScore();

    const elapsedMinutes = (Date.now() - startTime) / 1000 / 60;

    let actualPhase;

    if (elapsedMinutes < 40) {
      actualPhase = 1;
    } else if (elapsedMinutes < 70) {
      actualPhase = 2;
    } else {
      actualPhase = 3;
    }

    if (actualPhase !== currentPhase) {
      currentPhase = actualPhase;
      deck = shuffle(CARDS.filter(card => card.phase === currentPhase));

      currentCard = null;
      currentIsMovieCard = false;

      saveGameState();

      document.getElementById("setup").classList.add("hidden");
      document.getElementById("finish").classList.add("hidden");
      document.getElementById("game").classList.remove("hidden");

      showNextCard();

      return;
    }

    document.getElementById("setup").classList.add("hidden");
    document.getElementById("finish").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    if (currentCard) {
      if (currentIsMovieCard) {
        document.getElementById("turn").textContent = "🎬 Карточка фильма";
        document.getElementById("levelBadge").textContent = "Фильм";
        document.getElementById("typeBadge").textContent = "Особая";
        document.getElementById("cardText").textContent = currentCard.text;
        document.getElementById("movieHint").classList.remove("hidden");
        document.getElementById("movieHint").textContent =
          "🎬 Следи за экраном — задание сработает во время фильма.";
      } else {
        document.getElementById("turn").textContent =
          `Ход: ${currentPlayer === 1 ? player1 : player2} · ${getPhaseName()}`;
        document.getElementById("levelBadge").textContent = getPhaseName();
        document.getElementById("typeBadge").textContent = "Основная";
        document.getElementById("cardText").innerHTML = currentCard.text;
        document.getElementById("movieHint").classList.add("hidden");
      }

      document.getElementById("penalty").classList.add("hidden");
      document.getElementById("feedback").textContent =
        "Карточка выполнена? Жмите «Готово».";
    }

  } catch (error) {
    console.error("Не удалось восстановить игру:", error);

    localStorage.removeItem("gameState");
    localStorage.removeItem("gameStartTime");

    startTime = null;
  }
}

restoreGameState();