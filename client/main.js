import React from 'react';
import ReactDOM from 'react-dom';
import NotesApp from './components/NoteApp.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <NotesApp/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('mount-point')
);
