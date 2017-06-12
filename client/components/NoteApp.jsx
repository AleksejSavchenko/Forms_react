import React from 'react';
import Search from './componentsForm/Search.jsx';
import NoteEditor from './componentsForm/NoteEditor.jsx';
import NotesGrid from './componentsForm/NotesGrid.jsx';


class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            searchNotes: []
        };
        this.methodUpdate = true;
    }

    componentDidMount(){
        let localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes, searchNotes: localNotes });
        }
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    handleNoteAdd(newNote){
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes, searchNotes: newNotes });
    }

    handleNoteDelete(note) {
        let noteId = note.id;
        let newNotes = this.state.notes.filter(function(note) {
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    }

    handleUpdateNotes(searchQuery) {
        this.setState({
            searchNotes: this.state.notes
        });
        let displayedNotes = this.state.notes.filter(function(el) {
            let searchValue = el.text.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            searchNotes: displayedNotes
        });
    }

    render() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <Search notes={this.state.notes} updateNotes={this.handleUpdateNotes.bind(this)}/>
                <NoteEditor onNoteAdd={this.handleNoteAdd.bind(this)} />
                <NotesGrid notes={this.state.searchNotes} onNoteDelete={this.handleNoteDelete.bind(this)} />
            </div>
        );
    }

    _updateLocalStorage() {
        let notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
}

export default NotesApp;