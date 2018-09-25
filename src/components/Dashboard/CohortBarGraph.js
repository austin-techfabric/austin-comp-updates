import React from 'react';
import {Bar} from 'react-chartjs-2';
const CohortBarGraph = (props) => {
    
    const {studentListByCohort, fullCohortStats, user} = props.staffContext;

    console.log(fullCohortStats, user);
    let titles = fullCohortStats && user ? fullCohortStats.map(items => {
        return items.name
    }) : ''
    let count = fullCohortStats && user ? fullCohortStats.map(items => {
        return items.count
    }) : ''

    
    const data = {
        labels:titles,
        datasets: [
          {
            backgroundColor: 'rgba(80, 169, 220, 0.4)',
            borderColor: 'rgba(80, 169, 220, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(80, 169, 220, 1)',
            hoverBorderColor: 'rgba(60, 149, 200, 1)',
            data: count
          }
        ]
      };

 
      const options = {
        legend: { display: false },
        scales: {
            xAxes: [{
                beginAtZero: true,
                ticks: {
                    autoSkip: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'assignment type'
                  }
                
            }],
            yAxes: [{
                beginAtZero: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Students',
                },
                ticks: {
                    userCallback: function(label, index, labels) {
                        if (Math.floor(label) === label) {
                            return label;
                        }
                    },
                    max: studentListByCohort.length
                }
            }],
            
        },
        maintainAspectRatio: true,
        
       
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

export default CohortBarGraph;



