function addNote() {
    const noteText = document.getElementById("note-text").value;
    const noteColor = document.getElementById("note-color").value;

    if (noteText.trim() !== "") {
        const notesContainer = document.getElementById("notes-container");
        const noteElement = document.createElement("div");
        noteElement.className = "note";
        noteElement.style.backgroundColor = noteColor;

        const noteContent = document.createElement("div");
        noteContent.textContent = noteText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            notesContainer.removeChild(noteElement);
        };

        noteElement.appendChild(noteContent);
        noteElement.appendChild(deleteButton);
        notesContainer.appendChild(noteElement);

        // Clear input fields
        document.getElementById("note-text").value = "";
    }
}