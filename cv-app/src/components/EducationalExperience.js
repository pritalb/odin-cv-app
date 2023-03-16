import React, { Component }  from 'react';
import '../styles/EducationalExperience.css';


class Education extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='education'>
                <div className="bullet-point-container">
                    <div className="bullet-point"></div>
                    <div className="bullet-point"></div>
                </div>
                <div className='education-fields'>
                    <div className='education-name'> Degree Education </div>
                    <div className='education-institution'> Some College </div>
                    <div className='education-duration'> 2011-2014 </div>
                    <div className='education-summary'> This is a sample education information. Take it with a grain of salt </div>
                </div>
            </div>
        );
    }
}

class EducationSection extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='resume-info-section'>
                <div className='section-heading'> Education </div>
                <div id='education-container'>
                    <Education />
                    <Education />
                    <Education />
                </div>
            </div>
        );
    }
}

export default EducationSection;