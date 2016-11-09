console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
//console.log('Yargs: ', argv );

var command = argv._[0] ;
if(command === 'add') {


	notes.addNote(argv.title, argv.body);

} else if (command === 'list') {

	console.log(notes.getAll());

} else if (command === 'read') {

	var note = notes.getNote(argv.title);
	if(note) {
		console.log('Note Found.');
		notes.logNote(note);
	}else{
		console.log('Note not found.');
	}

} else if (command == 'remove') {
	
	var removed = notes.removeNote(argv.title);
	var message = removed ? `Note titled: ${argv.title} was removed.` : `Note titled: ${argv.title} not found.` 
	console.log(message);
} else {
	console.log('Just a sitting duck.');
}