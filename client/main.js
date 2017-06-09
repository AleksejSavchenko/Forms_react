import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/Timer.jsx';

class Note extends React.Component {
    render(){
        let style = { backgroundColor: this.props.color };
        return (
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}> × </span>
                {this.props.children}
            </div>
        );
    }
}

class NoteEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
    }

    handleTextChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    handleNoteAdd() {
    let newNote = {
        text: this.state.text,
        color: 'yellow',
        id: Date.now()
    };

    this.props.onNoteAdd(newNote);
    this.setState({ text: '' });
}
    render() {
        return (
            <div className="note-editor">
                    <textarea
                        placeholder="Enter your note here..."
                        rows={5}
                        className="textarea"
                        value={this.state.text}
                        onChange={this.handleTextChange.bind(this)}
                    />
                <button className="add-button" onClick={this.handleNoteAdd.bind(this)}>Add</button>
            </div>
        );
    }
}

class NotesGrid extends React.Component {

    componentDidMount() {
    let grid = this.refs.grid;
    this.msnry = new Masonry( grid, {
        itemSelector: '.note',
        columnWidth: 200,
        gutter: 10,
        isFitWidth: true
    });
}

    componentDidUpdate(prevProps) {
    if (this.props.notes.length !== prevProps.notes.length) {
        this.msnry.reloadItems();
        this.msnry.layout();
    }
}

    render(){
        let onNoteDelete = this.props.onNoteDelete;
        return (
            <div className="notes-grid" ref="grid">
                {
                    this.props.notes.map(function(note){
                        return (
                            <Note
                                key={note.id}
                                onDelete={onNoteDelete.bind(null, note)}
                                color={note.color}>
                                {note.text}
                            </Note>
                        );
                    })
                }
            </div>
        )
    }
}

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

class App extends React.Component {
    render() {
        return (
            <div>
                <NotesApp/>
                <Timer/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('mount-point')
);