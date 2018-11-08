import React from 'react';


const StudentProfile = (props) => {

    const stylePassed = {
        textAlign: 'center',
        width: '100%',
        background: 'rgba(100, 255, 100, 0.5)',
        margin: '10px',
        boxShadow: '1px 3px 5px rgba(0, 0, 0, 0.418)',
        padding: '5px'
    }

    const styleLeft = {
        textAlign: 'center',
        width: '100%',
        background: 'lightgrey',
        margin: '10px',
        boxShadow: '1px 3px 5px rgba(0, 0, 0, 0.418)',
        padding: '5px'
    }

    const baseStyle = {
        header: {
            fontSize: '20px',
            fontWeight: '700',
            margin: '5px 0'
        }
    }


    const assessmentLeft =  props.assessments.map(assessment => {
        return <div style={assessment.passed ? stylePassed : styleLeft}>
                    <div style={baseStyle.header}>{assessment.assessment_name}</div>
                </div>
    }) 

    const competenciesLeft =  props.competencies.map(competency => {
        return <div style={competency.passed ? stylePassed : styleLeft}>
                    <div style={baseStyle.header}>{competency.competency_name}</div>
                    <div>{competency.description}</div>
                </div>
    }) 

    const htmlCssLeft =  props.htmlcss.map(competency => {
        return <div style={competency.passed ? stylePassed : styleLeft}>
                    <div style={baseStyle.header}>{competency.category.includes('(Elective)') ? competency.competency_name + ' (Elective)' : competency.competency_name}</div>
                    <div>{competency.description}</div>
                </div>
    }) 

    return (
        <div className='student-profile-display-container'>
            <div className='student-name-profile'>
                <h1>{props.assessments[0] ? `${props.assessments[0].name.toUpperCase()} - ${props.assessments[0].cohort.toUpperCase()}` : ''}</h1>
            </div>
            <div>
                <div>
                    <h1>Assesments</h1>
                    {assessmentLeft}
                </div>

                <div>
                    <h1>Functional Comps</h1>
                    {competenciesLeft}
                </div>

                <div>
                    <h1>HTML/CSS Comps</h1>
                    {htmlCssLeft}
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;