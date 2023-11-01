// const pokemon = document.getElementById("pokemon");
// const spiderMan = document.getElementById("spider-man");
// const residentEve = document.getElementById("resident");
// const farCry = document.getElementById("far-cry");
// const baldersGate = document.getElementById("balders-gate");
// const readDead = document.getElementById("red-dead");
// const ufc = document.getElementById("ufc");
// const fifa = document.getElementById("fifa");
// const diablo = document.getElementById("diablo");
// const eldenRing = document.getElementById("elden-ring");
// const gta = document.getElementById("gta");
// const counterStrike = document.getElementById("counter-strike");
// const callOfDuty = document.getElementById("call-of-duty");
// const mortalKombat = document.getElementById("mortal-kombat");
// const streetFighter = document.getElementById("street-fighter");
// const seaOfStars = document.getElementById("sea-of-stars");
// const superMario = document.getElementById("super-mario");
// const fallenLords = document.getElementById("fallen-lords");
// const atomic = document.getElementById("atomic");
// const assasinCreed = document.getElementById("assasin");
// const amnesia = document.getElementById("amnesia");
// const wildHearts = document.getElementById("wild-hearts");
// const starWars = document.getElementById("star-wars");
// const remnant = document.getElementById("remnant-lies");
// const liesOfP = document.getElementById("lies-of-p");
// const finalFantasy = document.getElementById("final-fantasy");
// const deadSpace = document.getElementById("dead-space");
// const dragon = document.getElementById("dragon");
// const horizon = document.getElementById("horizon");
// const zelda = document.getElementById("zelda");
// const cyberPunk = document.getElementById("cyber-punk");

const games = [
  document.getElementById("pokemon"),
  document.getElementById("spider-man"),
  document.getElementById("resident"),
  document.getElementById("far-cry"),
  document.getElementById("balders-gate"),
  document.getElementById("red-dead"),
  document.getElementById("ufc"),
  document.getElementById("fifa"),
  document.getElementById("diablo"),
  document.getElementById("elden-ring"),
  document.getElementById("gta"),
  document.getElementById("counter-strike"),
  document.getElementById("call-of-duty"),
  document.getElementById("mortal-kombat"),
  document.getElementById("street-fighter"),
  document.getElementById("sea-of-stars"),
  document.getElementById("super-mario"),
  document.getElementById("fallen-lords"),
  document.getElementById("atomic"),
  document.getElementById("assasin"),
  document.getElementById("amnesia"),
  document.getElementById("wild-hearts"),
  document.getElementById("star-wars"),
  document.getElementById("remnant-lies"),
  document.getElementById("lies-of-p"),
  document.getElementById("final-fantasy"),
  document.getElementById("dead-space"),
  document.getElementById("dragon"),
  document.getElementById("horizon"),
  document.getElementById("zelda"),
  document.getElementById("cyber-punk")
];

const addBtn = document.querySelectorAll("button")

games = [
  document.getElementById("pokemon"),
  document.getElementById("spider-man"),
  // ... (the rest of the elements)
  document.getElementById("zelda"),
  document.getElementById("cyber-punk")
];

// Define an empty array to store the pushed elements
const pushedGames = [];

// Select all the buttons
addBtn = document.querySelectorAll("button");

// Loop through each button and attach a click event listener
addBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Push the corresponding game element into the pushedGames array
    pushedGames.push(games[index]);
    console.log("Pushed games:", pushedGames);
  });
});




const lovedContent = document.getElementById("pic")

const getLovedContent = () => {
  axios.get("http://localhost:3029/api/content/")
      .then(res => {
          const data = res.data;
          alert(data);
  });
};

lovedContent.addEventListener('click', getLovedContent)

const dislikedContent = document.getElementById("pic-two")

const getDislikedContent = () => {
  axios.get("http://localhost:3029/api/dislikedcontent/")
      .then(res => {
          const data = res.data;
          alert(data);
  });
};

dislikedContent.addEventListener('click', getDislikedContent)


const likedContent = document.querySelector(".pic")

const getLikableContent = () => {
  axios.get("http://localhost:3029/api/likedcontent/")
      .then(res => {
          const data = res.data;
          alert(data);
  });
};

likedContent.addEventListener('click', getLikableContent)

