import React, { Component }  from 'react';


class Education extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className='education-name'> Degree Education </div>
                <div className='education-duration'> 2011-2014 </div>
                <div className='education-summary'> This is a sample education information. Take it with a grain of salt </div>
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
            <div>
                <Education />
                <Education />
                <Education />
            </div>
        );
    }
}

export default EducationSection;