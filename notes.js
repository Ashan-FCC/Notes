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
		saveNotes(notes);
		console.log('Note created with title: ', title, 'body: ', body);
	} else {
		console.log('Note already exists with title: ', title);
	}
	
}

var getAll = () => {
	return retrieveAllNotes();
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
		//console.log(e);
		console.log("File notes-data.json doesn't exist.");
		notes = [];
	}
	return notes;
}

var saveNotes = (notes) => {
	try {
		fs.writeFileSync('notes-data.json' , JSON.stringify(notes));
	}catch(e) {
		console.log('An error occurred');
	}

}


module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
}