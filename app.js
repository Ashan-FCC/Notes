console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
	describe : 'Title of  note',
	demand : true,
	alias: 't'
}

var bodyOptions = {
	describe : 'Body of note',
	demand : true,
	alias: 't'
}

const argv = yargs
				.command('add' , 'Add a Note', {
					title: titleOptions,
					body: bodyOptions
				})
				.command('list', 'List all notes.')
				.command('read', 'Read a note', {
					title: titleOptions
				})
				.command('remove', 'Remove a note', {
					title: titleOptions
				}).help().argv;
//console.log('Yargs: ', argv );

var command = argv._[0] ;
if(command === 'add') {


	notes.addNote(argv.title, argv.body);

} else if (command === 'list') {

	var allnotes = notes.getAll();
	allnotes.forEach( (note) => notes.logNote(note));

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