import React from 'react';
import axios from 'axios';
import TicketTable from './ticket_table';
import Forms from './form'
import Filter from './filter';
import Search from './search';
import ProgressBar from './progress';
import Charts from './chart';
import BarCharts from './barchart';

class Tickets extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tickets : [],
            filteredTickets:[]
        }
        this.handleNewTicket = this.handleNewTicket.bind(this)
        this.handleFilter = this.handleFilter.bind(this);
        this.handleSearchByCode = this.handleSearchByCode.bind(this);
        this.handleCheckStatus = this.handleCheckStatus.bind(this);
    }

    componentDidMount(){
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=9481d46a210d6e8c').then((response) => {
            this.setState({tickets: response.data, filteredTickets: response.data});
        });
    }

    handleFilter(priority){
        if(priority === "All"){
            this.setState({
                filteredTickets: this.state.tickets
            })
        } else {
        this.setState(prevState => ({
            filteredTickets: prevState.tickets.filter(ticket => ticket.priority === priority)
        }))
        }
    }

    handleSearchByCode(code){
        this.setState(prevState => ({
            filteredTickets: prevState.tickets.filter(ticket => ticket.ticket_code.indexOf(code) !== -1)
        })) 
    }

    handleNewTicket(ticket) {
        this.setState(prevState => {
            return {
                filteredTickets: prevState.tickets.concat(ticket)
            }
        })
    }

    handleCheckStatus(data){
        let ticket = this.state.filteredTickets.find(ticket => ticket.ticket_code === data.ticket_code)
        ticket.status = data.status
        this.setState(prevState =>({
            filteredTickets: [...prevState.filteredTickets]
        }))
    }

    render(){
        const top = {
            paddingTop: "-20px"
        }

        const top1 = {
            paddingTop: "10px",
            marginTop: "10px"
        }
       return(
           <div className = "container-fluid">
           <div style = {top1}><h1>Ticket Master</h1></div>
                  <div className = "row">
                  <div className="col-6">

                  </div>
                    <div style={top} className = "col-3">
                        <Search handleSearchByCode={this.handleSearchByCode} />
                        <Filter handleFilter= {this.handleFilter} /><br />
                    </div>
               </div>

               <div className = "row">
                    <div className = "col">
                        <TicketTable ticket_details = {this.state.filteredTickets} handleCheckStatus={this.handleCheckStatus} />
                        <ProgressBar bar_data={this.state.filteredTickets} /><br />
                    </div>
                    <div className = "col-4 align-self-center">
                        <Forms handleNewTicket= {this.handleNewTicket} />
                    </div>
               </div>
    
                <div className = "row">
                        <div className = "col-4">
                            <Charts pie_data={this.state.filteredTickets} />
                        </div>
                        <div className = "col-6">
                            <BarCharts bar_data={this.state.filteredTickets} />
                        </div>
                </div>    
           </div>
       ) 
    }
}

export default Tickets;