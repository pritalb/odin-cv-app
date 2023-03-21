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
                    <input type="date" value={this.props.startDate} onChange={(event) => this.props.SetStartDate(event)}/>
                </div>

                <div>
                    <label> End Date: </label>
                    <input type="date" value={this.props.endDate} onChange={(event) => this.props.SetEndDate(event)}/>
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

        this.state = {
            showEditForm: false,
            renderSelf: true,
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

    render() {
        return (
            <> {    this.state.renderSelf &&
                    <div className="work-experience" onMouseEnter={this.ShowForm} onMouseLeave={this.HideForm}>
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

                        {this.state.showEditForm && <EditWorkExperienceForm DeleteSelf={this.DeleteSelf} />}
                    </div>
                }
            </>
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
