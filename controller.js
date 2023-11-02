// when you click on button you can send axios req to function that pushes item into cart array
const fs =require("fs")
cart = [];


module.exports = {
  
  postAddToCart: (req, res) => {
    console.log(req.body)

    fs.readFile("./cart.json", "utf8", (err, data) => {
      if (err) console.error(err);
    
      const cart = JSON.parse(data) || [];
      cart.push(req.body);
      const cartJSON = JSON.stringify(cart);
    
      fs.writeFile("./cart.json", cartJSON, (err) => {
        if (err) console.error(err);
    
        res.status(200).send(`You added the game ${req.body.game} to your cart!`);
      })
    });
  },

  getAddToCart: (req, res) => {
    console.log("hi")
    fs.readFile("./cart.json", "utf8", (err, data) => {
      if (err) console.error(err);
    
      const cart = JSON.parse(data) || [];

        res.status(200).json(cart)
    });
  },

  getLovedContent: (req, res) => {
    const contentLover = ["I'm happy you loved our content!"];
    console.log(req.params.game)
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
  const contentLiked = ["I'm glad you liked our content!"];

  let randomIndex = Math.floor(Math.random() * contentLiked.length);
  let randomgetLikableContent = contentLiked[randomIndex];

  res.status(200).send(randomgetLikableContent);

},

getSubscribed : (req, res) => {
  const subscriber = ["You are now subscribed with Visual Virtuosos!"];
  console.log(req.params.subscriber)
  let randomIndex = Math.floor(Math.random() * subscriber.length);
  let randomgetSubscribed = subscriber[randomIndex];

  res.status(200).send(randomgetSubscribed);
},
}