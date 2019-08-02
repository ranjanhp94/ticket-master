import React from 'react';
import TicketDisplay from './tickets_display';
import { Table } from 'reactstrap';

class TicketTable extends React.Component{
    render(){
        return(
        <div>
            <h3>Listing Tickets - {this.props.ticket_details.length}</h3>
            <Table striped size = "sm">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Priority</th>
                    <th>Message</th>
                    <th>Status</th>
                </tr>
            </thead>
            <TicketDisplay data={this.props.ticket_details} handleCheckStatus={this.props.handleCheckStatus} />
            </Table>
        </div>
        )
    }
}

export default TicketTable;