import React, { Component } from 'react';
import IntroSection from './IntroSection';
import Profile from './ProfileSummary';

class Resume extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <IntroSection />
                <Profile />
            </div>
        );
    }
}

export default Resume;