import React, { Component } from "react";
import ReactToPrint from 'react-to-print';

import '../styles/ExperienceForm.css';

class AddEducationForm extends Component {
    constructor(props) {
        super(props);

        this.SetCourse = this.SetCourse.bind(this);
        this.SetInstitution= this.SetInstitution.bind(this);
        this.SetStartDate = this.SetStartDate.bind(this);
        this.SetEndDate = this.SetEndDate.bind(this);
        this.SetSummary = this.SetSummary.bind(this);
        this._AddEducation = this._AddEducation.bind(this);

        this.state = {
            course: 'Degree Education',
            institution: 'Some College',
            startDate: '2014-11',
            endDate: '2015-11',
            summary: 'This is a sample education information. Take it with a grain of salt',
        }
    }

    _AddEducation () {
        this.props.AddEducation(
            this.state.course,
            this.state.institution,
            this.state.startDate,
            this.state.endDate,
            this.state.summary
        );
    }

    SetCourse(e) {
        const val = e.target.value;

        this.setState({
            course: val,
        });
    }

    SetInstitution(e) {
        const val = e.target.value;

        this.setState({
            institution: val,
        });
    }

    SetStartDate(e) {
        const val = e.target.value;

        this.setState({
            startDate: val,
        });
    }

    SetEndDate(e) {
        const val = e.target.value;

        this.setState({
            endDate: val,
        });
    }

    SetSummary(e) {
        const val = e.target.value;

        this.setState({
            summary: val,
        });
    }

    render() {
        return (
            <div className="experience-form">
                <div className="experience-form-title"> Add Educational Experience </div>
                <div className="experience-form-element">
                    <label> Course: </label>
                    <input value={this.state.course} onChange={(event) => this.SetCourse(event)}/>
                </div>

                <div className="experience-form-element">
                    <label> Institution: </label>
                    <input value={this.state.institution} onChange={(event) => this.SetInstitution(event)}/>
                </div>

                <div className="experience-form-element">
                    <label> Start Date: </label>
                    <input type="month" value={this.state.startDate} onChange={(event) => this.SetStartDate(event)}/>
                </div>

                <div className="experience-form-element">
                    <label> End Date: </label>
                    <input type="month" value={this.state.endDate} onChange={(event) => this.SetEndDate(event)}/>
                </div>
                <div className="experience-form-element">
                    <label> Course Summary: </label>
                    <textarea value={this.state.summary} onChange={(event) => this.SetSummary(event)}></textarea>
                </div>
                <button onClick={this._AddEducation}> Add </button>
            </div>
        );
    }
}

class AddWorkExperienceForm extends Component {
    constructor(props) {
        super(props);

        this._AddWorkExperience = this._AddWorkExperience.bind(this);
        this.SetJobrole = this.SetJobrole.bind(this);
        this.SetCompany = this.SetCompany.bind(this);
        this.SetStartDate = this.SetStartDate.bind(this);
        this.SetEndDate = this.SetEndDate.bind(this);
        this.SetSummary = this.SetSummary.bind(this);

        this.state = {
            jobrole: 'Sample Engineer',
            company: 'Some Company inc.',
            startDate: '2014-11',
            endDate: '2015-12',
            summary: 'This is a sample work information. Take it with a grain of salt',
        };
    }

    _AddWorkExperience() {
        this.props.AddWorkExperience(
            this.state.jobrole,
            this.state.company,
            this.state.startDate,
            this.state.endDate,
            this.state.summary
        );
    }

    SetJobrole(e) {
        const val = e.target.value;

        this.setState({
            jobrole: val,
        });
    }

    SetCompany(e) {
        const val = e.target.value;

        this.setState({
            company: val,
        });
    }

    SetStartDate(e) {
        const val = e.target.value;

        this.setState({
            startDate: val,
        });
    }

    SetEndDate(e) {
        const val = e.target.value;

        this.setState({
            endDate: val,
        });
    }

    SetSummary(e) {
        const val = e.target.value;

        this.setState({
            summary: val,
        });
    }

    render() {
        return (
            <div className="experience-form">
                <div className="experience-form-title"> Add Work Experience </div>
                <div className="experience-form-element">
                    <label> Job Role: </label>
                    <input value={this.state.jobrole} onChange={(event) => this.SetJobrole(event)}/>
                </div>

                <div className="experience-form-element">
                    <label> Company: </label>
                    <input value={this.state.company} onChange={(event) => this.SetCompany(event)}/>
                </div>

                <div className="experience-form-element">
                    <label> Start Date: </label>
                    <input type="month" value={this.state.startDate} onChange={(event) => this.SetStartDate(event)}/>
                </div>

                <div className="experience-form-element">
                    <label> End Date: </label>
                    <input type="month" value={this.state.endDate} onChange={(event) => this.SetEndDate(event)}/>
                </div>
                <div className="experience-form-element">
                    <label> Summary: </label>
                    <textarea value={this.state.summary} onChange={(event) => this.SetSummary(event)}></textarea>
                </div>
                <button onClick={this._AddWorkExperience}> Add </button>
            </div>
        );
    }
}

class ExperienceForm extends Component {
    printButtonStyles = {
        backgroundColor: 'transparent',
        color: '#FF0000',
        borderStyle: 'solid',
        borderColor: '#FF0000',
        fontWeight: 'bold',
        width: '95%',
        height: '40px',
        padding: '5px',
        marginTop: '10px',
        borderRadius: '5px',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar">
                <div className="heading"> CV Maker </div>
                <div className="subheading"> Hover over the resume to edit content </div>
                <ReactToPrint 
                    pageStyle={'@page {size: A1}'}
                    trigger={() => <button style={this.printButtonStyles}> Click here to print your Resume </button>}
                    content={() => this.props.resumeRef.current} />
                <div className="experience-forms-container">
                    <AddEducationForm AddEducation={this.props.AddEducation}/>
                    <AddWorkExperienceForm AddWorkExperience={this.props.AddWorkExperience}/>
                </div>
            </div>
        );
    }
}

export default ExperienceForm;