import React, { Component } from 'react';
import IntroSection from './IntroSection';
import ProfileSection from './ProfileSummary';
import EducationSection from './EducationalExperience';
import WorkExperienceSection from './ProfessionalWorkExperience';


class Resume extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <IntroSection />
                <ProfileSection />
                <EducationSection />
                <WorkExperienceSection />
            </div>
        );
    }
}

export default Resume;