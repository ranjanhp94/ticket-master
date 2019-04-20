import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label } from 'reactstrap';

class Forms extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Name: '',
            Department: '',
            Priority: '',
            Message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleDepartment = this.handleDepartment.bind(this);
        this.handlePriority = this.handlePriority.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
    }
    
    handleName(e){
        e.preventDefault();
        this.setState({
            Name: e.target.value
        })
    }

    handleDepartment(e){
        e.preventDefault();
        this.setState({
            Department: e.target.value
        })
    }

    handlePriority(e){
        e.preventDefault();
        this.setState({
            Priority: e.target.value
        })
    }

    handleMessage(e){
        e.preventDefault();
        this.setState({
            Message: e.target.value
        })
    }

    handleSubmit(e){
    e.preventDefault();
    let submitValue = {
        name: this.state.Name,
        department: this.state.Department,
        priority: this.state.Priority,
        message: this.state.Message
    }
    
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=9481d46a210d6e8c', submitValue).then((response) => {
           let data = response.data;
           this.props.handleNewTicket(data)
        });
}

render(){
return(
    <div>
    <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                <Label> Name {' '}
                   <input type = 'text' onChange={this.handleName} />
                </Label><br />

                <Label> Department {' '}
                    <select onChange={this.handleDepartment}>
                        <option value="select">Select</option>
                        <option value="Technical">Technical</option>
                        <option value="Sales">Sales</option>
                        <option value="Hr">Hr</option>
                    </select>
                </Label> <br />

                <Label> Priority {' '}
                   <input type = 'radio' name="priority" onChange={this.handlePriority} value="High"/> High
                   <input type = 'radio' name="priority" onChange={this.handlePriority} value="Medium" /> Medium
                   <input type = 'radio' name="priority" onChange={this.handlePriority} value="Low" /> Low
                </Label> <br />
                   
                <Label> Message {' '}
                   <textarea onChange={this.handleMessage} ></textarea>
                </Label> <br />

                <Button color = "primary" size="sm" type='submit' value="submit">Submit</Button>{' '}
                <Button color = "primary" size="sm" type='reset' value="reset">Reset</Button>

                </FormGroup>
               </Form>
               </div>
               )
    }    
}   

export default Forms;