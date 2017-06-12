import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: this.props.search
        }
    }

    handleSearch(e){
        this.setState({
            search: e.target.value
        })
    }

    render(){
        return(
            <input type="text" placeholder="Search..." onChange={this.handleSearch.bind(this)} />
        )
    }
}

export default Search;