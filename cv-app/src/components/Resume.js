import React, { Component } from 'react';
import IntroSection from './IntroSection';
import ProfileSection from './ProfileSummary';
import EducationSection from './EducationalExperience';

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
            </div>
        );
    }
}

export default Resume;