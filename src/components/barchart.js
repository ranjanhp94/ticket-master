import React from 'react';
import { Chart } from 'react-google-charts';

class BarCharts extends React.Component{
render(){
    
        var open = 0, completed = 0, open1 = 0, completed1 = 0, open2 = 0, completed2 = 0
        this.props.bar_data.forEach(ticket => {
            if(ticket.status === "open" && ticket.department === "Technical"){
                open = open + 1
            } else if(ticket.status === "completed" && ticket.department === "Technical"){
                completed = completed + 1
            } else if(ticket.status === "open" && ticket.department.toLowerCase() === "sales"){
                open1 = open1 + 1
            } else if(ticket.status === "completed" && ticket.department.toLowerCase() === "sales"){
                completed1 = completed1 + 1
            } else if(ticket.status === "open" && ticket.department.toLowerCase() === "hr"){
                open2 = open2 + 1
            } else if(ticket.status === "completed" && ticket.department.toLowerCase() === "hr"){
                completed2 = completed2 + 1
            }
        })
    
    
    return(
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Department', 'open', 'completed'],
                    ['Technical', open*100, completed*100],
                    ['Sales', open1*100, completed1*100],
                    ['Hr', open2*100, completed2*100]
                ]}
                options={{
                    chart: {
                    title: 'Tickets By Department'
                    },
                }}
                rootProps={{ 'data-testid': '2' }}
                />
    )
  }
}

export default BarCharts;