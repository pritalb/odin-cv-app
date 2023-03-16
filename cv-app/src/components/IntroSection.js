import React, { Component } from 'react';
import '../styles/IntroSection.css';

class IntroForm extends Component {
    constructor() {
        super()
    };

    render() {
        return (

            <div>
                <div>
                    <label htmlFor='name-info'> Enter your Name: </label>
                    <input name='name-info'></input>
                </div>

                <div>
                    <label htmlFor='jobrole-info'> Enter your Job Role: </label>
                    <input name='jobrole-info'></input>
                </div>

                <div>
                    <label htmlFor='jobrole-info'> Enter your Profile Picture URL: </label>
                    <input type="url" name='profile-picture-url'></input>
                </div>

                <div>
                    <label htmlFor='contact-number-info'> Enter your Contact Number: </label>
                    <input type="number" name='contact-number-info'></input>
                </div>

                <div>
                    <label htmlFor='email-info'> Enter your Email: </label>
                    <input type="email" name='email-info'></input>
                </div>

                <div>
                    <label htmlFor='profile-summary'> Enter your Profile Summary: </label>
                    <textarea name='profile-summary'></textarea>
                </div>
            </div>
        );
    }

}

class IntroInfo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id='intro-section'>
                <div id='intro-info'>
                    <div id='intro-name'> John Doe </div>
                    <div id='intro-job-role'> Some Job Role Engineer </div>
                    {/* <div id='intro-contact-info'> */}
                        <div id='intro-phone' className='intro-contact'> Phone: +0000000000 </div>
                        <div id='intro-email' className='intro-contact'> Email: email@email.com </div>
                    {/* </div> */}
                </div>
                <div id='intro-image-container' > <img id='intro-image' src='https://images.unsplash.com/photo-1568316674077-d72ee56de61c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80' /> </div>
            </div>
        );
    }
}

class IntroSection extends Component {
    constructor() {
        super();
    }

    ShowEditForm() {
        
    }

    render() {
        return (
            <div>
                <IntroInfo />
                {false && <IntroForm />}
            </div>
        );
    }
}

export default IntroSection;