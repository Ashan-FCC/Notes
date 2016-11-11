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
		console.log('Note created');
		logNote(note);
	} else {
		console.log('Note already exists with title: ', title);
	}
	
}

var getAll = () => {
	return retrieveAllNotes();
}

var getNote = (title) => {
	debugger;
	var notes = retrieveAllNotes();
	if(notes.length > 0 && notes[0].title === title){
		return notes[0];
	}else {
		return undefined;
	}

}

var removeNote = (title) => {
	var notes = retrieveAllNotes();
	var updatedNotes = notes.filter((note) => note.title !== title);
	saveNotes(updatedNotes);
	return notes.length !== updatedNotes.length;
}

var retrieveAllNotes = () => {
	try{
		debugger;
		var notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
	}catch(e) {
		
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

var logNote = (note) => {
	debugger;
		console.log(' *************** ');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
		console.log(' ***************');
		console.log(' ');
}


module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
}