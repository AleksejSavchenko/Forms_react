import React from 'react';
// import NotesActions from '../actions/NotesActions';
import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';

// import App from './App.jsx';
class New_element extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            new_elem: ''
        };
        this.updateFormatName = this.updateFormatName.bind(this);

    }

    updateFormatName (new_data) {
        // const data = this.state.formatName;
        // return console.log(new_data.data, 'ok');
        // this.setState({formatName: new_data.data});
    }

    render() {
        return (
            <div className="form-box">

            </div>
        );
    }
}

class Form extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            s_name: '',
            text: ''
        };
        this.changeHandlerName = this.changeHandlerName.bind(this);
        this.changeHandlerSName = this.changeHandlerSName.bind(this);
        this.changeHandlerText = this.changeHandlerText.bind(this);
        this.SubmitForm = this.SubmitForm.bind(this);
    }

    changeHandlerName(e){
        this.setState({name: e.target.value});
    }
    changeHandlerSName(e){
        this.setState({s_name: e.target.value});
    }
    changeHandlerText(e){
        this.setState({text: e.target.value});
    }
    SubmitForm(){
        // Send a POST request
        axios({
            method: 'post',
            url: `${ apiPrefix}/`,
            data: {
                name: this.state.name,
                s_name: this.state.s_name,
                text: this.state.text
            }
        })
            .then(response => {
            console.log(response.data);
            this.updateFormatName(response);
            });
    }

    updateFormatName (new_data) {
        // const data = this.state.formatName;
        return console.log(new_data.data, 'ok');
        // this.setState({formatName: new_data.data});
    }

    render() {

        const data = this.state;
        return (
                <div className="form-box">
                    <New_element updateFormatName={this.updateFormatName.bind(this)} />
                    Form:
                        <label>Name: </label><input type="text" value={data.name} onChange={this.changeHandlerName} />
                        <label>SName: </label><input type="text" value={data.s_name} onChange={this.changeHandlerSName} />
                        <label>Text: </label><input type="text" value={data.text} onChange={this.changeHandlerText} />
                        <label>Send: </label><input type="submit" value="Submit" onClick={this.SubmitForm} />
                </div>
            );
        }
    }

export default Form;








// class App extends React.Component  {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             formatName: ''
//         };
//
//         this.formatName();
//     }
//
//
//     formatName() {
//         axios.get(`${ apiPrefix}/notes`).then(result => {
//             console.log(result);
//             this.setState({
//                 formatName: result.data
//             })
//         })
//     }
//
//     render() {
//         const { formatName } = this.state;
//         return (`<h1 >Hello, { formatName }< / h1 >`);
//             }
//     }
//
// export default App;