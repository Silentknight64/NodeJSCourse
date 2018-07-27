const fs = require('fs');

const fetchNotes = () => {
  try {
    return notes = JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const logNote = (note) => {
  console.log(`--\nTitle: ${note.title} \nBody: ${note.body}`);
}

const addNote = (title, body) => {
  var notes = fetchNotes();
  const note = {
    title,
    body
  };
  const duplicateNotes =  notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  return fetchNotes();
};

const getNote = (title) => {
  const note = fetchNotes().filter((note) => note.title.toLowerCase() === title)[0];
  return note;
};

const removeNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
