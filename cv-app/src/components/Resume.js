import React, { Component } from 'react';
import IntroSection from './IntroSection';
import ProfileSection from './ProfileSummary';
import { EducationSection, Education } from './EducationalExperience';
import { WorkExperienceSection, WorkExperience } from './ProfessionalWorkExperience';
import ExperienceForm from './ExperienceForm';
import '../styles/Resume.css';


class Resume extends Component {
    constructor(props) {
        super(props);

        this.AddEducation = this.AddEducation.bind(this);
        this.AddWorkExperience = this.AddWorkExperience.bind(this);

        this.state = {
            currentUniqueKey: 5,
            educations: [
                            <Education  key="education-0"
                                        course='Degree Education 1'
                                        institution='Some College 1'
                                        startDate='2011-11'
                                        endDate='2014-11'
                                        summary='This is a sample education information. Take it with a grain of salt'/>,

                            <Education  key="education-1"
                                        course='Degree Education 2'
                                        institution='Some College 2'
                                        startDate='2014-11'
                                        endDate='2015-11'
                                        summary='This is a sample education information. Take it with a grain of salt' />,

                            <Education  key="education-2" 
                                        course='Degree Education 3'
                                        institution='Some College 3'
                                        startDate='2015-11'
                                        endDate='2017-11'
                                        summary='This is a sample education information. Take it with a grain of salt'/>,
                        ],
            works: [
                <WorkExperience key="workExperience-3"
                                jobrole='Sample Engineer 1'
                                company='Some Company inc.'
                                startDate='2014-12'
                                endDate='2015-12'
                                summary='This is a sample work information. Take it with a grain of salt' />,
                <WorkExperience key="workExperience-4"
                                jobrole='Sample Engineer 2'
                                company='Some Company inc.'
                                startDate='2014-12'
                                endDate='2015-12'
                                summary='This is a sample work information. Take it with a grain of salt' />,
            ],
        }
    }

    AddEducation(course, institution, startDate, endDate, summary) {
        const currentKey = this.state.currentUniqueKey
        const key = `education-${currentKey}`;
        const edu = <Education  key={key} 
                                course={course}
                                institution={institution}
                                startDate={startDate}
                                endDate={endDate}
                                summary={summary} />

        this.setState({
            currentUniqueKey: (currentKey) => currentKey + 1,
        });
        this.setState({
            educations: [...this.state.educations, edu],
        });
    }

    AddWorkExperience(jobrole, company, startDate, endDate, summary) {
        const currentKey = this.state.currentUniqueKey
        const key = `workExperience-${currentKey}`;
        const work = <WorkExperience key={key} 
                                    jobrole={jobrole}
                                    company={company}
                                    startDate={startDate}
                                    endDate={endDate}
                                    summary={summary} />

        this.setState({
            currentUniqueKey: (currentKey) => currentKey + 1,
        });
        this.setState({
            works: [...this.state.works, work],
        });
    }

    render() {
        return (
            <div id='resume-container'>
                <ExperienceForm AddEducation={this.AddEducation} AddWorkExperience={this.AddWorkExperience}/>
                <div className='resume-flex-container'>
                    <div id='resume'>
                        <IntroSection />
                        <div id='resume-info'>
                            <ProfileSection />
                            <EducationSection educations={this.state.educations}/>
                            <WorkExperienceSection works={this.state.works}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;