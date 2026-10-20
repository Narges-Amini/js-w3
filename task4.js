//save a note
let notes = [];
function saveNote(content, id) {
  let note = {};
  note.content = content;
  note.id = id;
  notes.push(note);
  return notes;
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);
