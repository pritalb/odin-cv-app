import React, { Component, }  from 'react';
import '../styles/EducationalExperience.css';

class EditEducationForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='edit-form'>
                <div className="edit-form-element">
                    <label className="edit-form-label"> Course: </label>
                    <input value={this.props.course} onChange={(event) => this.props.SetCourse(event)}/>
                </div>

                <div className="edit-form-element">
                    <label className="edit-form-label"> Institution: </label>
                    <input value={this.props.institution} onChange={(event) => this.props.SetInstitution(event)}/>
                </div>

                <div className="edit-form-element">
                    <label className="edit-form-label"> Start Date: </label>
                    <input type="month" value={this.props.startDate} onChange={(event) => this.props.SetStartDate(event)}/>
                </div>

                <div className="edit-form-element">
                    <label className="edit-form-label"> End Date: </label>
                    <input type="month" value={this.props.endDate} onChange={(event) => this.props.SetEndDate(event)}/>
                </div>
                <div className="edit-form-element">
                    <label className="edit-form-label"> Course Summary: </label>
                    <textarea value={this.props.summary} onChange={(event) => this.props.SetSummary(event)}></textarea>
                </div>

                <button className="edit-form-button" onClick={this.props.DeleteSelf}> Delete </button>
            </div>
        );
    }
}

class Education extends Component {
    constructor(props) {
        super(props);

        this.DeleteSelf = this.DeleteSelf.bind(this);
        this.ShowForm = this.ShowForm.bind(this);
        this.HideForm = this.HideForm.bind(this);
        this.SetCourse = this.SetCourse.bind(this);
        this.SetInstitution= this.SetInstitution.bind(this);
        this.SetStartDate = this.SetStartDate.bind(this);
        this.SetEndDate = this.SetEndDate.bind(this);
        this.SetSummary = this.SetSummary.bind(this);

        this.state = {
            showEditForm: false,
            renderSelf: true,
            course: this.props.course,
            institution: this.props.institution,
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            summary: this.props.summary,
        }
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
            <>            
                {  this.state.renderSelf &&
                    <div id={this.props.uniqueID} className='education' onMouseEnter={this.ShowForm} onMouseLeave={this.HideForm}>
                        <div className="bullet-point-container">
                            <div className="bullet-point"></div>
                            <div className="bullet-point"></div>
                        </div>
                        <div className='education-fields'>
                            <div className='education-name'> {this.state.course} </div>
                            <div className='education-institution'> {this.state.institution} </div>
                            <div className='education-duration'> {this.state.startDate} to {this.state.endDate} </div>
                            <div className='education-summary'> {this.state.summary} </div>
                        </div>
                        {
                            this.state.showEditForm && 
                            <div className='form-container'>
                                <EditEducationForm 
                                    course={this.state.course}
                                    institution={this.state.institution}
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    summary={this.state.summary}
                                    SetCourse={this.SetCourse}
                                    SetInstitution={this.SetInstitution}
                                    SetStartDate={this.SetStartDate}
                                    SetEndDate={this.SetEndDate}
                                    SetSummary={this.SetSummary}
                                    DeleteSelf={this.DeleteSelf} />
                            </div>
                        }
                    </div>
                }
            </>
        );
    }
}

class EducationSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='resume-info-section'>
                <div className='section-heading'> Education </div>
                <div id='education-container'>
                    { this.props.educations }
                </div>
            </div>
        );
    }
}

export { EducationSection, Education };