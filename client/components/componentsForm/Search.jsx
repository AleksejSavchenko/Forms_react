import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: this.props.notes
        };
    }

    handleSearch(e) {
        let searchQuery = e.target.value.toLowerCase();
        this.props.updateNotes(searchQuery);
    }

    render(){
        return(
            <input className="search" type="text" placeholder="Search..." onChange={this.handleSearch.bind(this)} />
        )
    }
}

export default Search;