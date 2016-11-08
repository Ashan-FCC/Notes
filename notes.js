console.log('Starting notes.js');

const fs = require('fs');
const _ = require('lodash');

var addNote = (title, body) => {
	var notes = retrieveAllNotes();
	var note = {
		title,
		body
	}

	var duplicateNotes =  notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0 ) {
		notes.push(note);
		fs.writeFileSync('notes-data.json' , JSON.stringify(notes));
	} else {
		console.log('Note already exists with title: ', title);
	}
	
}

var getAll = () => {
	console.log('Getting all notes');
}

var getNote = (title) => {
	console.log('Getting note with title: ', title);
}

var removeNote = (title) => {
	console.log('Deleting note: ', title);
}

var retrieveAllNotes = () => {
	try{
		var notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
	}catch(e) {
		console.log(e);
		console.log("File notes-data.json doesn't exist.");
		notes = [];
	}
	return notes;
}
module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
}