const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());  
app.use(cors());

const { getLovedContent, getDislikedContent, getLikableContent} = require('./controller')

app.get("/api/content", getLovedContent);
app.get("/api/dislikedcontent", getDislikedContent);
app.get("/api/likedcontent", getLikableContent);

app.listen(3029, () => console.log('Server running on 3029'));
