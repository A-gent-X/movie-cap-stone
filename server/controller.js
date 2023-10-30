// when you click on button you can send axios req to function that pushes item into cart array
cart = [];

module.exports = {
  getLovedContent: (req, res) => {
    const contentLover = ["I'm happy you loved our content!"];
  
    let randomIndex = Math.floor(Math.random() * contentLover.length);
    let randomLovedContent = contentLover[randomIndex];
  
    res.status(200).send(randomLovedContent);
},

getDislikedContent: (req, res) => {
  const contentDisliked = ["I'm sorry you didn't like our content!"];

  let randomIndex = Math.floor(Math.random() * contentDisliked.length);
  let randomgetDislikedContent = contentDisliked[randomIndex];

  res.status(200).send(randomgetDislikedContent);

},

getLikableContent: (req, res) => {
  const contentLiked = ["I'm glad our content were to your standards!"];

  let randomIndex = Math.floor(Math.random() * contentLiked.length);
  let randomgetLikableContent = contentLiked[randomIndex];

  res.status(200).send(randomgetLikableContent);

}
}