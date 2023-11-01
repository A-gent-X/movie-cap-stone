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

app.get('/api/movies', getMovies)
app.delete('/api/movies/:id', deleteMovie)
app.post('/api/movies', createMovie)
app.put('/api/movies/:id', updateMovie)