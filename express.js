import express from 'express';
import { MongoClient, ObjectId } from "mongodb";
import ViteExpress from 'vite-express';
import cors from 'cors';

const PORT = 3000;
const MONGO_USER = 'emma489';
const MONGO_PASSWORD = 'g5YDLx4dGy48cUl2';
const MONGO_CONNECTION_STRING = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@movieticketapp.puaa4cu.mongodb.net/?retryWrites=true&w=majority&appName=MovieTicketApp`;

const client = new MongoClient(MONGO_CONNECTION_STRING);
const database = client.db('MovieTicketApp');
const server = express();

server.use(cors());

// read one movie based on tmdb id
server.get('/movies/:tmdb_id', async (request, response) =>{

    const movies = database.collection('movies');
    const movieId = request.params.tmdb_id;
    const mongoId = await movies.findOne({tmdb_id:movieId});
    response.json(mongoId);
})

// read all showings for one movie and add cinema name
server.get('/showings/:movie_id', async (request, response) => {

    const showings = database.collection('showings');
    const movieId =  request.params.movie_id;
    const movieObjectId = new ObjectId(movieId);

    const allShowingsWithCinemaNames = await showings.aggregate([
        {
            $match: {
                movie_id: movieObjectId
            }
        },
        {
            $lookup: {
                from: 'cinemas',
                localField: 'cinema_id',
                foreignField: '_id',
                as: 'cinemaDocs'
            }
        },
        {   
            $lookup: {
                from: 'bookings',
                localField: '_id',
                foreignField: 'showing_id',
                as: 'bookingDocs'
            }
        }
    ]).toArray();

    response.json(allShowingsWithCinemaNames);
});

ViteExpress.listen(server, PORT, () => console.log(`server is running at http://localhost:${PORT}`));