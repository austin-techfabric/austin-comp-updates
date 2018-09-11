import React from 'react';
import {Bar} from 'react-chartjs-2';
const Overview = (props) => {
    const titles = props.context.assignments.map(items => {
        return items.name
    })
    const count = props.context.assignments.map(items => {
        return items.count
    })
    const data = {
        labels:titles,
        datasets: [
          {
            label: 'passed',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: count
          }
        ]
      };

 
      const options = {
        scales: {
            xAxes: [{
                beginAtZero: true,
                ticks: {
                    autoSkip: false,
                    min: 0,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Assessments'
                  }
                
            }],
            yAxes: [{
                beginAtZero: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Students'
                },
                ticks: {
                    userCallback: function(label, index, labels) {
                        if (Math.floor(label) === label) {
                            return label;
                        }
                    }
                }
            }],
            
        },
        maintainAspectRatio: true
       
    }
    return (
        
           <div>
                <Bar
                data={data}
                width={100}
                height={50}
                options={options}
                />
           </div>
        
    );
};

export default Overview;



