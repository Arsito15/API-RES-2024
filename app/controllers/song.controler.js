const db = require('../config/db.config.js');
const Song = db.Song;

exports.create = (req, res) => {
    let song = {};

    try {
        song.name = req.body.name;
        song.description = req.body.description;
        song.artist = req.body.artist;
        song.duration = req.body.duration;
        song.extension = req.body.extension;
        song.album = req.body.album;
        song.year = req.body.year;

        Song.create(song).then(result => {
            res.status(200).json({
                message: "Upload Successfully a Song with id = " + result.id,
                song: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.retrieveAllSongs = (req, res) => {
    Song.findAll()
        .then(songInfos => {
            res.status(200).json({
                message: "Get all Songs' Infos Successfully!",
                songs: songInfos
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

exports.getSongById = (req, res) => {
    let songId = req.params.id;
    Song.findByPk(songId)
        .then(song => {
            res.status(200).json({
                message: "Successfully Get a Song with id = " + songId,
                song: song
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

exports.updateById = async (req, res) => {
    try {
        let songId = req.params.id;
        let song = await Song.findByPk(songId);

        if (!song) {
            res.status(404).json({
                message: "Not Found for updating a song with id = " + songId,
                song: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                name: req.body.name,
                description: req.body.description,
                artist: req.body.artist,
                duration: req.body.duration,
                extension: req.body.extension,
                album: req.body.album,
                year: req.body.year
            }
            let result = await Song.update(updatedObject, { returning: true, where: { id: songId } });

            if (!result) {
                res.status(500).json({
                    message: "Error -> Can not update a song with id = " + req.params.id,
                    error: "Can NOT Updated",
                });
            }

            res.status(200).json({
                message: "Update successfully a Song with id = " + songId,
                song: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> Can not update a song with id = " + req.params.id,
            error: error.message
        });
    }
}

exports.deleteById = async (req, res) => {
    try {
        let songId = req.params.id;
        let song = await Song.findByPk(songId);

        if (!song) {
            res.status(404).json({
                message: "Does Not exist a Song with id = " + songId,
                error: "404",
            });
        } else {
            await song.destroy();
            res.status(200).json({
                message: "Delete Successfully a Song with id = " + songId,
                song: song,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> Can NOT delete a song with id = " + req.params.id,
            error: error.message,
        });
    }
}
