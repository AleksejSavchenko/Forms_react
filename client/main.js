import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App.jsx';

class Fields extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'title'
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }
    render() {
        return (
            <div className="row_fields_form">
                <input className="title" type="text" placeholder="Название" value={this.state.title} onChange={this.handleChangeTitle} />
                <input className="description" type="text" placeholder="Описание" />
            </div>
        )
    }
}


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 1
        };
        this.handleAddField = this.handleAddField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fields = <Fields/>;
        this.list_fields = [<Fields/>];
    }

    handleAddField(e) {
        this.setState({
            amount: ++this.state.amount
        });
        this.list_fields.push(this.fields);
        e.preventDefault();
    }

    handleSubmit(event) {

        const fields_title = this.list_fields.map((field, i) =>
            console.log(field.props.title));

        alert('An essay was submitted: ' + fields_title);
        event.preventDefault();
    }

    render() {
        const list_fields = this.list_fields.map((field, i) =>
            <li key={i}>{ field } </li>
        );
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <ol>{list_fields}</ol>
                <input type="submit" value="Создать" />
                <button onClick={this.handleAddField}>+</button>
            </form>
        )
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Form  />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('mount-point')
);