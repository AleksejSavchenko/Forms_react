import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App.jsx';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            ['title'+ this.amount ? 'title0':'']: '',
            ['description'+ this.amount ? 'description0':'']: ''
        };
        this.handleAddField = this.handleAddField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFieldChange(fieldName,e) {
        this.setState(({[''+fieldName]: e.target.value}))
    }

    handleAddField(e) {
        e.preventDefault();
        ++this.state.amount;
        this.setState({
            [['title'+this.state.amount]]: e.target.value,
            [['description'+this.state.amount]]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        for(let field in this.state){
            console.log(field + ' : ' + this.state[field]);
        }
    }

    render() {
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <ol>
                    <div className="row_fields_form">
                        <input className="title" type="text" name="title" placeholder="Название" value={this.state.title} onChange={this.handleFieldChange.bind(this, 'title'+this.state.amount)} />
                        <input className="description" type="text" name="description" placeholder="Описание" onChange={this.handleFieldChange.bind(this, 'description'+this.state.amount)} />
                    </div>
                </ol>
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
                <Form />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('mount-point')
);