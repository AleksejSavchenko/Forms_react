import React from 'react';
import ReactDOM from 'react-dom';
import NotesApp from './components/NoteApp.jsx';
import Timer from './components/Timer.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <NotesApp/>
                {/*<Timer/>*/}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('mount-point')
);