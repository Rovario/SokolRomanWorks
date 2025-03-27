document.addEventListener('DOMContentLoaded', () => {
    const noteTitle = document.getElementById('noteTitle');
    const noteText = document.getElementById('noteText');
    const noteCategory = document.getElementById('noteCategory');
    const saveNoteBtn = document.getElementById('saveNote');
    const notesList = document.getElementById('notesList');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const clearStorageBtn = document.getElementById('clearStorage');

    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    function validateNote(title, text, category) {
        if (!title.trim()) {
            alert('Введіть заголовок нотатки');
            return false;
        }
        if (!text.trim()) {
            alert('Введіть текст нотатки');
            return false;
        }
        if (!category) {
            alert('Оберіть категорію');
            return false;
        }
        return true;
    }

    function renderNotes(filteredNotes = notes) {
        notesList.innerHTML = '';
        filteredNotes.forEach((note, index) => {
            const noteCard = document.createElement('div');
            noteCard.classList.add('note-card');
            noteCard.innerHTML = `
                <div class="category">${note.category}</div>
                <h3>${note.title}</h3>
                <p>${note.text}</p>
                <div class="note-actions">
                    <button onclick="editNote(${index})">Редагувати</button>
                    <button onclick="deleteNote(${index})">Видалити</button>
                </div>
            `;
            notesList.appendChild(noteCard);
        });
    }

    function saveNote() {
        const title = noteTitle.value;
        const text = noteText.value;
        const category = noteCategory.value;

        if (validateNote(title, text, category)) {
            notes.push({ title, text, category });
            localStorage.setItem('notes', JSON.stringify(notes));
            renderNotes();
            
            noteTitle.value = '';
            noteText.value = '';
            noteCategory.value = '';
        }
    }

    window.editNote = function(index) {
        const note = notes[index];
        noteTitle.value = note.title;
        noteText.value = note.text;
        noteCategory.value = note.category;

        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
    }

    window.deleteNote = function(index) {
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
    }

    function filterNotes() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        const filteredNotes = notes.filter(note => {
            const matchesSearch = note.title.toLowerCase().includes(searchTerm) || 
                                  note.text.toLowerCase().includes(searchTerm);
            const matchesCategory = !selectedCategory || note.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });

        renderNotes(filteredNotes);
    }

    saveNoteBtn.addEventListener('click', saveNote);
    searchInput.addEventListener('input', filterNotes);
    categoryFilter.addEventListener('change', filterNotes);

    clearStorageBtn.addEventListener('click', () => {
        if (confirm('Ви впевнені, що хочете видалити всі нотатки?')) {
            notes = [];
            localStorage.removeItem('notes');
            renderNotes();
        }
    });

    renderNotes();
});