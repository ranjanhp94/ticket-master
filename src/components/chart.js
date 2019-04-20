import React from 'react';
import { Chart } from 'react-google-charts';

class Charts extends React.Component{
render(){
    
    var High = 0, Medium = 0, Low = 0;
    this.props.pie_data.forEach(ticket => {
        if(ticket.priority === "High"){
            High++
        } else if(ticket.priority === "Medium"){
            Medium++
        } else {
            Low++
        }
    })
    
    return(
        <div>
            <Chart 
              width={'500px'}
              height={'300px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Priority', 'Percentage'],
                ['High', High],
                ['Medium', Medium],
                ['Low', Low]
              ]}
              options={{
                title: 'Some Status',
              }}
              rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}
}

export default Charts;