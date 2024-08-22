const mongoose=require('mongoose');
const Movie=require('../models/movie');
const Actor=require('../models/actor');
const Director=require('../models/director');
const movieType=require('../models/movieType');
async function createMovie(req, res) {
    try {
        const moviename=await Movie.find({movieName:req.body.movieName});
        if(moviename.length>0){
            res.status(500).json({ error: 'movie name is already exist' });
        }
        else{
            const movie = new Movie(req.body);
            await movie.save();
            res.status(200).json(movie);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to create movie' });
    }
}
async function createActor(req, res) {
    try {
        const actorname=await Actor.find({actorName:req.body.actorName});
        if(actorname.length>0){
            res.status(500).json({ error: ' actor is already exist' });
        }
        else{
            const actor = new Actor(req.body);
            await actor.save();
            res.status(200).json(actor);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to create actor' });
    }
}
async function createDirector(req, res) {
    try {
        const directorname=await Director.find({directorName:req.body.directorName});
        if(directorname.length>0){
            res.status(500).json({ error: 'directorname is already exist' });
        }
        else{
            const director = new Director(req.body);
            await director.save();
            res.status(200).json(director);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to create director' });
    }
}
async function createmovieType(req, res) {
    try {
        const movietypename=await movieType.find({movieType:req.body.movieType});
        if(movietypename.length>0){
            res.status(500).json({ error: 'movietype is already exist' });
        }
        else{
            const movietype = new movieType(req.body);
            await movietype.save();
            res.status(200).json(movietype);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to create movietype' });
    }
}
async function viewMovie(req,res){
    try {
        const movieId = req.body._id;
        const objectId = new mongoose.Types.ObjectId(movieId);

        const movieDetails = await Movie.aggregate([
            {
                $match: { _id: objectId }
            },
            {
                $lookup: {
                    from: "actors",
                    localField: 'actorName',
                    foreignField: 'actorName',
                    as: "actorDetails"
                }
            },
            {
                $lookup:{
                    from:"directors",
                    localField:'directorName',
                    foreignField:'directorName',
                    as:"directorDetails"
                }
            },
            {
                $lookup:{
                    from:"movietypes",
                    localField:'movieType',
                    foreignField:'movieType',
                    as:"movieTypeDetails"
                }
            }
        ]);

        if (movieDetails.length === 0) {
            return res.status(404).json({ error: 'movie not found' });
        }

        console.log('movie Details:', movieDetails);
        res.status(200).json(movieDetails);
    } catch (error) {
        console.error('Error retrieving movie details:', error);
        res.status(500).json({ error: 'Failed to retrieve movie details' });
    }
}
async function viewActor(req,res){
    try {
        const actorId = req.body._id;
        const objectId = new mongoose.Types.ObjectId(actorId);

        const actorDetails = await Actor.aggregate([
            {
                $match: { _id: objectId }
            },
            {
                $lookup: {
                    from: "movies",
                    localField: 'movieName',
                    foreignField: '_id',
                    as: "movieDetails"
                }
            },
            {
                $lookup:{
                    from:"directors",
                    localField:'directorName',
                    foreignField:'_id',
                    as:"directorDetails"
                }
            },
            {
                $lookup:{
                    from:"movietypes",
                    localField:'movieType',
                    foreignField:'_id',
                    as:"movieTypeDetails"
                }
            }
        ]);

        if (actorDetails.length === 0) {
            return res.status(404).json({ error: 'actor not found' });
        }

        console.log('actor Details:', actorDetails);
        res.status(200).json(actorDetails);
    } catch (error) {
        console.error('Error retrieving actor details:', error);
        res.status(500).json({ error: 'Failed to retrieve actor details' });
    }
}
async function viewDirector(req,res){
    try {
        const directorId = req.body._id;
        const objectId = new mongoose.Types.ObjectId(directorId);

        const directorDetails = await Director.aggregate([
            {
                $match: { _id: objectId }
            },
            {
                $lookup: {
                    from: "movies",
                    localField: 'movieName',
                    foreignField: '_id',
                    as: "movieDetails"
                }
            },
            {
                $lookup:{
                    from:"actors",
                    localField:'actorName',
                    foreignField:'_id',
                    as:"actorDetails"
                }
            },
            {
                $lookup:{
                    from:"movietypes",
                    localField:'movieType',
                    foreignField:'_id',
                    as:"movieTypeDetails"
                }
            }
        ]);

        if (directorDetails.length === 0) {
            return res.status(404).json({ error: 'director not found' });
        }

        console.log('director Details:', directorDetails);
        res.status(200).json(directorDetails);
    } catch (error) {
        console.error('Error retrieving director details:', error);
        res.status(500).json({ error: 'Failed to retrieve director details' });
    }
}
async function viewmovieType(req,res){
    try {
        const movietypeId = req.body._id;
        const objectId = new mongoose.Types.ObjectId(movietypeId);

        const movietypeDetails = await movieType.aggregate([
            {
                $match: { _id: objectId }
            },
            {
                $lookup: {
                    from: "movies",
                    localField: 'movieName',
                    foreignField: '_id',
                    as: "movieDetails"
                }
            },
            {
                $lookup:{
                    from:"actors",
                    localField:'actorName',
                    foreignField:'_id',
                    as:"actorDetails"
                }
            },
            {
                $lookup:{
                    from:"directors",
                    localField:'directorName',
                    foreignField:'_id',
                    as:"directorDetails"
                }
            }
        ]);

        if (movietypeDetails.length === 0) {
            return res.status(404).json({ error: 'movietype not found' });
        }

        console.log('movietype Details:', movietypeDetails);
        res.status(200).json(movietypeDetails);
    } catch (error) {
        console.error('Error retrieving movietype details:', error);
        res.status(500).json({ error: 'Failed to retrieve movietype details' });
    }
}

module.exports={createMovie,createActor,createDirector,createmovieType,viewMovie,viewActor,viewDirector,viewmovieType};