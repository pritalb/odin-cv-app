import React, { Component, }  from 'react';
import '../styles/EducationalExperience.css';

class EditEducationForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <label> Course: </label>
                    <input value={this.props.course} onChange={(event) => this.props.SetCourse(event)}/>
                </div>

                <div>
                    <label> Institution: </label>
                    <input value={this.props.institution} onChange={(event) => this.props.SetInstitution(event)}/>
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
                    <label> Course Summary: </label>
                    <textarea value={this.props.summary} onChange={(event) => this.props.SetSummary(event)}></textarea>
                </div>

                <button onClick={this.props.DeleteSelf}> Delete </button>
            </div>
        );
    }
}

class Education extends Component {
    constructor() {
        super();

        this.ShowForm = this.ShowForm.bind(this);
        this.HideForm = this.HideForm.bind(this);
        this.SetCourse = this.SetCourse.bind(this);
        this.SetInstitution= this.SetInstitution.bind(this);
        this.SetStartDate = this.SetStartDate.bind(this);
        this.SetEndDate = this.SetEndDate.bind(this);
        this.SetSummary = this.SetSummary.bind(this);
        this.DeleteSelf = this.DeleteSelf.bind(this);

        this.state = {
            showEditForm: false,
            course: 'Degree Education',
            institution: 'Some College',
            startDate: '2011',
            endDate: '2014',
            summary: 'This is a sample education information. Take it with a grain of salt',
            renderSelf: true,
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
                            <div className='education-duration'> {this.state.startDate}-{this.state.endDate} </div>
                            <div className='education-summary'> {this.state.summary} </div>
                        </div>
                        {
                            this.state.showEditForm && 
                            <EditEducationForm 
                                course={this.state.summary}
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
                        }
                    </div>
                }
            </>
        );
    }
}

class EducationSection extends Component {
    constructor() {
        super();

        this.state = {
            educations: [<Education />, <Education />, <Education />,],
        }
    }

    render() {
        return (
            <div className='resume-info-section'>
                <div className='section-heading'> Education </div>
                <div id='education-container'>
                    { this.state.educations }
                </div>
            </div>
        );
    }
}

export default EducationSection;