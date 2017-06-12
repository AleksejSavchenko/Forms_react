import React from 'react';

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

export default NoteEditor;