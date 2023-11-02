const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json()); 

app.use(cors());

const { getLovedContent, getDislikedContent, getLikableContent, postAddToCart, getAddToCart, getSubscribed} = require('./controller.js')


app.get("/api/content/:game", getLovedContent);

app.get("/api/dislikedcontent/:game", getDislikedContent);

app.get("/api/likedcontent/:game", getLikableContent);

app.get("/api/subscribetocontent/:subscribe", getSubscribed);

app.get("/api/cart", getAddToCart);

app.post("/api/cart", postAddToCart)

app.listen(3030, () => console.log('Server running on 3030'));

