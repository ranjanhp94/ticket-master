import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e){
        e.preventDefault();
        this.props.handleSearchByCode(e.target.value);
    }

    render(){
        return(
            <div>                        
                <label>
                    <input type="text" name="search" placeholder="search by code" onChange={this.handleSearch}/>
                </label>
            </div>
        )
    }
}

export default Search;