const express = require('express');
const axios = require('axios');
const app = express();

app.get('/movieInfo', async (req, res) => {
    const innerReq = await axios.get('https://streamzui-streamzui-v1.p.rapidapi.com/new?page=1&country=us&days=30', {
        headers: {
            "x-rapidapi-host": "streamzui-streamzui-v1.p.rapidapi.com",
            "x-rapidapi-key": "c0388477dfmsh5ac9f4f8de009e7p12d122jsnb3b069291577",
            "useQueryString": true
        }
    })
    if (innerReq.error) res.status(500).send(response.error);
    let allMovies = [];
    let count = 0;

    for(let i = 0; i < innerReq.data.Results.length; i++) {
        // Async in a loop issue fixed by iife and res.json() call in another function
        (async () => {
            const imdbInfo = await axios.get(`https://api.themoviedb.org/3/find/${innerReq.data.Results[i].imdbID}?api_key=${process.env.API_KEY}&language=en-US&external_source=imdb_id`);
            allMovies.push(imdbInfo.data.movie_results);
            count++;
            if(count > innerReq.data.Results.length - 1) finished();
        })();
    }

    const finished = () => {
        res.json(allMovies)
    }
});

module.exports = app;

