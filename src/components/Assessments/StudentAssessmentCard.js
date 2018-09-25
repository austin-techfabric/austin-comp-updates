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
           boxShadow:'1px 3px 4px rgba(0,0,0,0.6)',
           transition: '.3s'
        },
        successBar:{
            maxWidth:'150px',
            flex: props.assessments_passed || null,
            height:'20px',
            background: 'rgba(80, 169, 220)',
            boxShadow:'rgba(80, 169, 220, 0.7)',
            borderRight: 'grey solid 1px',
            position:'relative',
            transition: '.3s'
        },
        leftBar:{
            maxWidth:'150px',
            flex: props.staffContext.fullCohortStats.length - props.assessments_passed || null,
            height:'20px',
            background: 'rgb(150, 150, 150)',
            transition: '.3s'
        }
    }
    const left = React.createRef()
    const success = React.createRef()
    const changeColorOnHover = (node, origColor, hoverColor) => {
        
        if(node.current.style.backgroundColor === origColor){
            node.current.style.backgroundColor = hoverColor
        }else if (node.current.style.backgroundColor === hoverColor){
            node.current.style.backgroundColor = origColor
        }
    }



    return (
        <Link to={`/assessments/student/${props.id}`}>
        <div className='student-card-container'>
            <span className='student-name'>{props.name}</span>
            <span className='student-email'>{props.email}</span>
            <div className='percentages-container'>
                <div style={style.parent}>
                    <div ref={success} style={style.successBar} onMouseOver={() => changeColorOnHover(success, 'rgb(80, 169, 220)', 'rgb(60, 149, 200)')} onMouseLeave={() => changeColorOnHover(success, 'rgba(80, 169, 220)', 'rgb(60, 149, 200)')}></div>
                    <div ref={left} onMouseOver={() => changeColorOnHover(left, 'rgb(150, 150, 150)', 'rgb(125, 125, 125)')} onMouseLeave={() => changeColorOnHover(left, 'rgb(150, 150, 150)', 'rgb(125, 125, 125)')} style={style.leftBar}></div>
                </div>
                <span className='assessments-left'>{parseInt(((props.assessments_passed / props.staffContext.fullCohortStats.length * 100)), 10)}%</span>
                <span className='bar-divider'>|</span>
                <span className='assessments-left-number'>{props.assessments_passed} / {props.staffContext.fullCohortStats.length}</span>
            </div>
        </div>
        </Link>
    );
};

export default StudentAssessmentCard;