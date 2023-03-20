import React, { Component } from "react";

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
            startDate: '2014',
            endDate: '2015',
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
            <div>
                <div>
                    <label> Course: </label>
                    <input value={this.state.course} onChange={(event) => this.SetCourse(event)}/>
                </div>

                <div>
                    <label> Institution: </label>
                    <input value={this.state.institution} onChange={(event) => this.SetInstitution(event)}/>
                </div>

                <div>
                    <label> Start Date: </label>
                    <input type="date" value={this.state.startDate} onChange={(event) => this.SetStartDate(event)}/>
                </div>

                <div>
                    <label> End Date: </label>
                    <input type="date" value={this.state.endDate} onChange={(event) => this.SetEndDate(event)}/>
                </div>
                <div>
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
    }

    render() {
        return (
            <div></div>
        );
    }
}

class ExperienceForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AddEducationForm AddEducation={this.props.AddEducation}/>
                <AddWorkExperienceForm />
            </div>
        );
    }
}

export default ExperienceForm;