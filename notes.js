function makeNewNote() {
	let note = document.createElement("p");
	let nodeText = document.createTextNode(getTextAreaContent());
	note.appendChild(nodeText);

	let notesContainer = document.getElementById("notes");
	notesContainer.appendChild(note);
}


function getTextAreaContent() {
	let textArea = document.getElementById("newNote");
	return textArea.value;
}

function clearNotes() {
	let notesList = document.getElementById("notes");
	let numOfNotes = notesList.childElementCount
	for (let i = 0; i <= numOfNotes; i++) {
		console.log(i);
		notesList.removeChild(notesList.childNodes[0]);
	}
	
}