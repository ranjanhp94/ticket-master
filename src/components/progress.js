import React from 'react';
import { Progress } from 'reactstrap';

class ProgressBar extends React.Component{ 
    render(){
        let ticket = this.props.bar_data.filter((ticket => ticket.status === "completed"))
        let progree = (ticket.length/this.props.bar_data.length) * 100;
        return(
            <div className="col-7">
            <Progress value={progree}/>
            </div>
        )
    }
}

export default ProgressBar;