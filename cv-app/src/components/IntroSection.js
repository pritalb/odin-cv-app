import React, { Component } from 'react';
import '../styles/IntroSection.css';

class IntroForm extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (

            <div className='intro-edit-form'>
                <div className='intro-edit-form-element'>
                    <label htmlFor='name-info'> Enter your Name: </label>
                    <input name='name-info' value={this.props.name} onChange={(e) => {this.props.SetName(e)}} />
                </div>

                <div className='intro-edit-form-element'>
                    <label htmlFor='jobrole-info'> Enter your Job Role: </label>
                    <input name='jobrole-info' value={this.props.jobrole} onChange={(e) => {this.props.SetJobRole(e)}} />
                </div>

                <div className='intro-edit-form-element'>
                    <label htmlFor='jobrole-info'> Enter your Profile Picture URL: </label>
                    <input type="url" name='profile-picture-url' value={this.props.profilePictureURL} onChange={(e) => {this.props.SetProfilePictureURL(e)}} />
                </div>

                <div className='intro-edit-form-element'>
                    <label htmlFor='contact-number-info'> Enter your Contact Number: </label>
                    <input type="number" name='contact-number-info' value={this.props.contactNumber} onChange={(e) => {this.props.SetContactNumber(e)}} />
                </div>

                <div className='intro-edit-form-element'>
                    <label htmlFor='email-info'> Enter your Email: </label>
                    <input type="email" name='email-info' value={this.props.email} onChange={(e) => {this.props.SetEmail(e)}} />
                </div>
            </div>
        );
    }

}

class IntroInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='intro-section'>
                <div id='intro-info'>
                    <div id='intro-name'> {this.props.name} </div>
                    <div id='intro-job-role'> {this.props.jobrole} </div>
                    {/* <div id='intro-contact-info'> */}
                        <div id='intro-phone' className='intro-contact'> Phone: {this.props.contactNumber} </div>
                        <div id='intro-email' className='intro-contact'> Email: {this.props.email} </div>
                    {/* </div> */}
                </div>
                <div id='intro-image-container' > <img id='intro-image' src={this.props.profilePictureURL} /> </div>
            </div>
        );
    }
}

class IntroSection extends Component {
    constructor(props) {
        super(props);

        this.ShowEditForm = this.ShowEditForm.bind(this);
        this.HideEditForm = this.HideEditForm.bind(this);
        this.SetName = this.SetName.bind(this);
        this.SetJobRole = this.SetJobRole.bind(this);
        this.SetProfilePictureURL = this.SetProfilePictureURL.bind(this);
        this.SetContactNumber = this.SetContactNumber.bind(this);
        this.SetEmail = this.SetEmail.bind(this);

        this.state = {
            shouldFormBeShown: false,
            name: 'John Doe',
            jobrole: 'Some Job Role Engineer',
            profilePictureURL: 'https://images.unsplash.com/photo-1568316674077-d72ee56de61c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            contactNumber: '0000000000',
            email: 'email@email.com',
        };
    }

    ShowEditForm() {
        this.setState({
            shouldFormBeShown: true,
        })
    }

    HideEditForm() {
        this.setState({
            shouldFormBeShown: false,
        })
    }

    SetName(e) {
        const val = e.target.value;
        this.setState({
            name: val,
        });
    }

    SetJobRole(e) {
        const val = e.target.value;
        this.setState({
            jobrole: val,
        });
    }

    SetProfilePictureURL(e) {
        const val = e.target.value;
        this.setState({
            profilePictureURL: val,
        });
    }

    SetContactNumber(e) {
        const val = e.target.value;
        this.setState({
            contactNumber: val,
        });
    }
    
    SetEmail(e) {
        const val = e.target.value;
        this.setState({
            email: val,
        });
    }

    render() {
        return (
            <div onMouseEnter={this.ShowEditForm} onMouseLeave={this.HideEditForm}>
                <IntroInfo  name={this.state.name}
                            jobrole={this.state.jobrole} 
                            profilePictureURL={this.state.profilePictureURL}
                            contactNumber={this.state.contactNumber}
                            email={this.state.email} />
                
                {
                    this.state.shouldFormBeShown && 
                    <div className='form-container'>
                        <IntroForm  name={this.state.name} 
                                    jobrole={this.state.jobrole}
                                    profilePictureURL={this.state.profilePictureURL}
                                    contactNumber={this.state.contactNumber}
                                    email={this.state.email} 
                                    SetName={this.SetName}
                                    SetJobRole={this.SetJobRole}
                                    SetProfilePictureURL={this.SetProfilePictureURL}
                                    SetContactNumber={this.SetContactNumber}
                                    SetEmail={this.SetEmail} />
                    </div>       
                }
            </div>
        );
    }
}

export default IntroSection;