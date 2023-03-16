import React, { Component } from "react";
import '../styles/ProfessionalWorkExperience.css';

class WorkExperience extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="work-experience">
                <div className="bullet-point-container">
                    <div className="bullet-point"></div>
                    <div className="bullet-point"></div>
                </div>
                <div className="work-experience-fields">
                    <div className="work-experience-job-role"> Some Sample Engineer </div>
                    <div className="work-experience-company"> Sample Company inc. </div>
                    <div className="work-experience-duration"> 2014-2018 </div>
                    <div className="work-experience-summary"> This is a sample work experience </div>
                </div>
            </div>
        );
    }
}

class WorkExperienceSection extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='resume-info-section'>
                <div className="section-heading"> Work Experience </div>
                <div id="work-experience-container">
                    <WorkExperience />
                    <WorkExperience />
                </div>
            </div>
        );
    }
}

export default WorkExperienceSection;
