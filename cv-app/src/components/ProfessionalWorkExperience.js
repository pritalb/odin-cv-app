import React, { Component } from "react";
import '../styles/ProfessionalWorkExperience.css';

class EditWorkExperienceForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <label> Job Role: </label>
                    <input value={this.props.jobrole} onChange={(event) => this.props.SetJobrole(event)}/>
                </div>

                <div>
                    <label> Company: </label>
                    <input value={this.props.company} onChange={(event) => this.props.SetCompany(event)}/>
                </div>

                <div>
                    <label> Start Date: </label>
                    <input type="month" value={this.props.startDate} onChange={(event) => this.props.SetStartDate(event)}/>
                </div>

                <div>
                    <label> End Date: </label>
                    <input type="month" value={this.props.endDate} onChange={(event) => this.props.SetEndDate(event)}/>
                </div>
                <div>
                    <label> Summary: </label>
                    <textarea value={this.props.summary} onChange={(event) => this.props.SetSummary(event)}></textarea>
                </div>

                <button onClick={this.props.DeleteSelf}> Delete </button>
            </div>
        );
    }
}

class WorkExperience extends Component {
    constructor(props) {
        super(props);

        this.DeleteSelf = this.DeleteSelf.bind(this);
        this.ShowForm = this.ShowForm.bind(this);
        this.HideForm = this.HideForm.bind(this);
        this.SetJobrole = this.SetJobrole.bind(this);
        this.SetCompany = this.SetCompany.bind(this);
        this.SetStartDate = this.SetStartDate.bind(this);
        this.SetEndDate = this.SetEndDate.bind(this);
        this.SetSummary = this.SetSummary.bind(this);

        this.state = {
            showEditForm: false,
            renderSelf: true,
            jobrole: this.props.jobrole,
            company: this.props.company,
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            summary: this.props.summary,
        };
    }

    DeleteSelf () {
        this.setState({
            renderSelf: false,
        });
    }

    ShowForm() {
        this.setState({
            showEditForm: true,
        });
    }

    HideForm() {
        this.setState({
            showEditForm: false,
        });
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
            <> {    this.state.renderSelf &&
                    <div className="work-experience" onMouseEnter={this.ShowForm} onMouseLeave={this.HideForm}>
                        <div className="bullet-point-container">
                            <div className="bullet-point"></div>
                            <div className="bullet-point"></div>
                        </div>
                        <div className="work-experience-fields">
                            <div className="work-experience-job-role"> {this.state.jobrole} </div>
                            <div className="work-experience-company"> {this.state.company} </div>
                            <div className="work-experience-duration"> {this.state.startDate} to {this.state.endDate} </div>
                            <div className="work-experience-summary"> {this.state.summary} </div>
                        </div>

                        {this.state.showEditForm && <EditWorkExperienceForm DeleteSelf={this.DeleteSelf}
                                                                            jobrole={this.state.jobrole}
                                                                            company={this.state.company}
                                                                            startDate={this.state.startDate}
                                                                            endDate={this.state.endDate}
                                                                            summary={this.state.summary}
                                                                            SetJobrole={this.SetJobrole}
                                                                            SetCompany={this.SetCompany}
                                                                            SetStartDate={this.SetStartDate}
                                                                            SetEndDate={this.SetEndDate}
                                                                            SetSummary={this.SetSummary} />}
                    </div>
                }
            </>
        );
    }
}

class WorkExperienceSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='resume-info-section'>
                <div className="section-heading"> Work Experience </div>
                <div id="work-experience-container">
                    {
                        this.props.works
                    }
                </div>
            </div>
        );
    }
}

export { WorkExperienceSection, WorkExperience };
