import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App.jsx';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 1,
            ['title'+ this.amount ? 'title0':'']: '',
            ['description'+ this.amount ? 'description0':'']: ''
        };
        this.handleAddField = this.handleAddField.bind(this);
        this.handleDelField = this.handleDelField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.count = 0;
        this.fields_group = [];
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

    handleDelField(event) {
        event.preventDefault();
        console.log(event);
        if(this.state.amount > 1){
            delete this.state['title'+this.state.amount];
            delete this.state['description'+this.state.amount];
            this.setState({
                amount: --this.state.amount
            });
            this.fields_group.pop();
            --this.count;
        }
        const formData = new Form(document.querySelector('div'));
        console.log(formData)
    }

    handleSubmit(e) {
        e.preventDefault();
        for(let field in this.state){
            console.log(field + ' : ' + this.state[field]);
        }
    }

    render() {
        while(this.count < this.state.amount){

                this.fields_group.push(
                    <div className="row_fields_form">
                        <input className="title" type="text" name={'title'+this.state.amount} placeholder="Название" onChange={this.handleFieldChange.bind(this, 'title'+this.state.amount)} />
                        <input className="description" type="text" name={'description'+this.state.amount} placeholder="Описание" onChange={this.handleFieldChange.bind(this, 'description'+this.state.amount)} />
                        <button name={'delete_btn'+this.state.amount} onClick={this.handleDelField}>-</button>
                    </div>
                );
                this.count++;
        }

        const list_fields = this.fields_group.map((field, i) =>
            <li key={i}> { field } </li>
        );

        console.log('render');
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <ol>
                    {list_fields}
                </ol>
                <input type="submit" value="Создать" />
                <button onClick={this.handleAddField}>+</button>
                <button onClick={this.handleDelField}>-</button>
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