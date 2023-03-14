import React, { Component } from "react";


class WorkExperience extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="work-experience-jobrole"> Some Sample Engineer </div>
                <div className="work-experience-company"> Sample Company inc. </div>
                <div className="work-experience-duration"> 2014-2018 </div>
                <div className="work-experience-summary"> This is a sample work experience </div>
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
            <div>
                <div sclassName="section-heading"> Work Experience </div>
                <div>
                    <WorkExperience />
                    <WorkExperience />
                </div>
            </div>
        );
    }
}

export default WorkExperienceSection;
