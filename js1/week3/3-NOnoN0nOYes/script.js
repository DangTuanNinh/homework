const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {
  if (typeof id !== "number") {
    console.error("ID phải là một số");
    return;
  }

  for (let note of notes) {
    if (note.id === id) {
      return note;
    }
  }

  console.error("Ghi chú không tìm thấy");
}

const firstNote = getNote(1);
console.log(firstNote);

function logOutNotesFormatted() {
  for (let note of notes) {
    console.log(`Note với id: ${note.id}, có văn bản ghi chú: ${note.content}`);
  }
}

logOutNotesFormatted();
