import React, { Component } from 'react';
import '../styles/IntroSection.css';

class IntroSection extends Component {
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

export default IntroSection;