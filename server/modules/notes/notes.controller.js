const HTTPStatus = require('http-status');

const Note = require('./notes.model');

exports.createNote = async function(req, res) {
	try {
		const note = await Note.create(req.body);
		return res.status(HTTPStatus.CREATED).json(note);
	} catch (error) {
		return res.status(HTTPStatus.BAD_REQUEST).send(error);
	}
};

exports.allPosts = async function(req, res) {
	try {
		const allNotes = await Note.find({});
		return res.status(HTTPStatus.OK).send(allNotes);
	} catch (err) {
		return res.status(HTTPStatus.BAD_REQUEST).send(err);
	}
};
