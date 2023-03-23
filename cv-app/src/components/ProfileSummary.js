import React, { Component } from 'react';
import '../styles/ProfileSummary.css';

class SummaryForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='summary-edit-form-element'>
                <label htmlFor='profile-summary'> Edit Profile Summary: </label>
                <textarea name='profile-summary' value={this.props.summary} onChange={(e) => this.props.SetSummary(e)} ></textarea>
            </div>
        );
    }
}

class Summary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='profile-summary'> 
                {this.props.summary}
            </div>
        );
    }
}

class ProfileSection extends Component {
    constructor() {
        super();

        this.ShowForm = this.ShowForm.bind(this);
        this.HideForm = this.HideForm.bind(this);
        this.SetSummary = this.SetSummary.bind(this);

        this.state = {
            showForm: false,
            summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                        + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
                        + "when an unknown printer took a galley of type and scrambled it to make a type "
                        + "specimen book. It has survived not only five centuries, but also the leap into "
                        + "electronic typesetting, remaining essentially unchanged. It was popularised in "
                        + "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, "
                        + "and more recently with desktop publishing software like Aldus PageMaker including "
                        + "versions of Lorem Ipsum.",
        }
    }

    ShowForm() {
        this.setState({
            showForm: true,
        });
    }

    HideForm() {
        this.setState({
            showForm: false,
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
            <div className='resume-info-section' onMouseEnter={this.ShowForm} onMouseLeave={this.HideForm}>
                <div className='section-heading'> Profile </div>
                <Summary summary={this.state.summary}/>
                {this.state.showForm && <SummaryForm summary={this.state.summary} SetSummary={this.SetSummary} />}
            </div>
        )
    }
}

export default ProfileSection;