


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

const addBtns = document.querySelectorAll(".addBtn")

const getAddToCart = (event) => {
  const game = (event.target.closest("article.art-three").id)
  axios.post(`http://localhost:3030/api/cart/`,{game:game})
      .then(res => {
          const data = res.data;
          alert(data);
  }).catch(err => console.log(err))
};

for (let i = 0; i < addBtns.length; i++){
  addBtns[i].addEventListener('click', getAddToCart)
}


const subscribeBar = document.querySelector(".formBtn")


const getSubscribed = (event) => {
  const subscribe= (event.target)
  axios.get(`http://localhost:3030/api/subscribetocontent/${subscribe}`)
      .then(res => {
          const data = res.data;
          alert(data);
  }).catch(err => console.log(err))
};

for (let i = 0; i < subscribeBar.length; i++){
  subscribeBar[i].addEventListener('click', getSubscribed)
}



const lovedContent = document.querySelectorAll(".loved")

const getLovedContent = (event) => {
  const game = (event.target.closest("article.art-three").id)
  axios.get(`http://localhost:3030/api/content/${game}`)
      .then(res => {
          const data = res.data;
          alert(data);
  }).catch(err => console.log(err))
};

for (let i = 0; i < lovedContent.length; i++){
  lovedContent[i].addEventListener('click', getLovedContent)
}

const dislikedContent = document.querySelectorAll(".disliked")

const getDislikedContent = (event) => {
  game = (event.target.closest("article.art-three").id)
  axios.get(`http://localhost:3030/api/dislikedcontent/${game}`)
      .then(res => {
          const data = res.data;
          alert(data);
  }).catch(err => console.log(err))
};

for (let i = 0; i < dislikedContent.length; i++){
dislikedContent[i].addEventListener('click', getDislikedContent)
}

const likedContent = document.querySelectorAll(".pic")

const getLikableContent = (event) => {
  game = (event.target.closest("article.art-three").id)
  axios.get(`http://localhost:3030/api/likedcontent/${game}`)
      .then(res => {
          const data = res.data;
          alert(data);
  }).catch(err => console.log(err))
};

for (let i = 0; i < likedContent.length; i++){
likedContent[i].addEventListener('click', getLikableContent)
}
