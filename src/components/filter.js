import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class Filter extends React.Component{
    constructor(props){
        super(props);
        this.handleSort = this.handleSort.bind(this)
    }

    handleSort(e){
        e.preventDefault();
        this.props.handleFilter(e.target.value)
    }

    render(){
        return(
            <div>
                <ButtonGroup>
                <Button value = "All" onClick={this.handleSort}>All</Button>
                <Button value = "High" onClick={this.handleSort}>High</Button>
                <Button value = "Medium" onClick={this.handleSort}>Medium</Button>
                <Button value = "Low" onClick={this.handleSort}>Low</Button>
                </ButtonGroup>
            </div>
        )
    }
}


export default Filter;