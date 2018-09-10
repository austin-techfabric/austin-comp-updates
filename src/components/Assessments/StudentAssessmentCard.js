import React from 'react';
import {Link} from 'react-router-dom'

const StudentAssessmentCard = (props) => {
    
    const style = {
        parent: {
           display:'flex',
           alignItems:'center',
           width: '100%',
           borderRadius: '15px',
           overflow: 'hidden',
           margin:'0 10px',
           boxShadow:'1px 3px 4px rgba(0,0,0,0.6)'
        },
        successBar:{
            maxWidth:'150px',
            flex: props.assessments_passed,
            height:'20px',
            background: '#30cc30',
            boxShadow:'1px 3px 4px rgba(0,0,0,0.6)',
            borderRight: 'grey solid 1px',
            position:'relative'
        },
        leftBar:{
            maxWidth:'150px',
            flex:21,
            height:'20px',
            background: '#f33a30'
        }
    }



    return (
        <Link to={`#`}>
        <div className='student-card-container'>
            <span className='student-name'>{props.name}</span>
            <span className='student-email'>{props.email}</span>
            <div className='percentages-container'>
                <div style={style.parent}>
                    <div style={style.successBar}></div>
                    <div style={style.leftBar}></div>
                </div>
                <span className='assessments-left'>{parseInt(((props.assessments_passed / 21 * 100)))}%</span>
                <span className='bar-divider'>|</span>
                <span className='assessments-left-number'>{props.assessments_passed} / 21</span>
            </div>
        </div>
        </Link>
    );
};

export default StudentAssessmentCard;