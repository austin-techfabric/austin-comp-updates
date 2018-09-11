import React from 'react';
import {Bar} from 'react-chartjs-2';
const Overview = (props) => {
    console.log(props)
    const titles = ["Arrays-1", "Arrays-2", "Arrays-3",  "Async + Promises", "Built-In Prototypes", "Callbacks 1", "Callbacks 2", "Closures", "Constructors - classes", "Constructors - functions", "Context 1", "Context 2", "Data Types", "ES6", "For Loops", "Functions 1", "Functions 2", "Scope", "JSON", "Objects", "Prototypes"];
    const fixedArray = titles.map((title) => {
        return {title: title, count: 0}
    });

    const count = fixedArray.map((title) => {
        let index = props.context.assignments.findIndex(actual => actual.assessment_name === title.title)
        if(index !== -1){
            return props.context.assignments[index].count
        }else{
            return title.count
        }
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



