import React from 'react';
// import NotesActions from '../actions/NotesActions';
import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';
import Form from './Form.jsx';

class App extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            formatName: 'Start'
        };
        this.formatName();
    }

    NumberList(props) {
        const numbers = props.data;

        const listItems = numbers.map((number, i) =>
            <li key={i}>{ to_str(number) }</li>
        );
        function to_str(str_unno) {
            let str = '';
            for (let obj_key in str_unno) {
                str += ' ______ ' + obj_key + ':  ' + str_unno[obj_key];
            }
            return str;
        }

        return listItems;
    }

    formatName() {
        const resp_data = '';
        axios.get(`${ apiPrefix}/`).then(result => {
            this.setState({
                formatName: this.NumberList(result)
            })
        })
    }

    // updateFormatName (new_data) {
    //     // const data = this.state.formatName;
    //     console.log(new_data.data, 'ok');
    //     this.setState({formatName: new_data.data});
    // }


    // close = () => this.setState({ open: false })


    render() {
        const { formatName } = this.state;
        return (
            <div className="list-box">
                List from base: { formatName }
                <Form />
            </div>
            );
        }
    }

export default App;








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