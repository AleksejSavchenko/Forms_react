import React from 'react';
import Search from './componentsForm/Search.jsx';
import NoteEditor from './componentsForm/NoteEditor.jsx';
import NotesGrid from './componentsForm/NotesGrid.jsx';


class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }

    componentDidMount(){
        let localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    handleNoteAdd(newNote){
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    }

    handleNoteDelete(note) {
        let noteId = note.id;
        let newNotes = this.state.notes.filter(function(note) {
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    }

    render() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <Search notes={this.state.notes} />
                <NoteEditor onNoteAdd={this.handleNoteAdd.bind(this)} />
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete.bind(this)} />
            </div>
        );
    }

    _updateLocalStorage() {
        let notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
}

export default NotesApp;