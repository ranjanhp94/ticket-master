import React from 'react';
import axios from 'axios';

class TicketDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            id: ""
        }
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(e) {
        e.persist();
        // this.props.handleCheckStatus('clicked')
        this.setState({
            loading: true
        })
        let id = e.target.id;
        this.setState({
            id: id
        })
        let value = e.target.checked ? 'completed' : 'open';
        axios.put(`http://dct-api-data.herokuapp.com/tickets/${id}?api_key=9481d46a210d6e8c`, { status: value })
            .then((response) => {

                this.props.handleCheckStatus(response.data)
                this.setState({
                    loading: false
                })
            })
    }


    render() {
        return (
            <tbody>
                {
                    this.props.data.map((ticket, index) => (
                        <tr key={index}>
                            <td>{ticket.ticket_code}</td>
                            <td>{ticket.name}</td>
                            <td>{ticket.department}</td>
                            <td>{ticket.priority}</td>
                            <td>{ticket.message}</td>
                            <td><input type="checkbox" onChange={this.handleCheck} checked={ticket.status === 'open' ? false : true} id={ticket.ticket_code}></input>{this.state.loading && this.state.id === ticket.ticket_code && <img src="https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif" height="22" width="22" alt="spinner" />}{ticket.status}</td>
                        </tr>
                    ))
                }
            </tbody>
        )
    }
}

export default TicketDisplay;