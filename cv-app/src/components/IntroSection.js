import React, { Component } from 'react';

class IntroSection extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {/* <div id='intro-image' > <img src='https://images.unsplash.com/photo-1568316674077-d72ee56de61c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80' /> </div> */}
                <div id='intro-name'> John Doe </div>
                <div id='intro-job-role'> Some Job Role Engineer </div>
                <div id='intro-phone'> +0000000000 </div>
                <div id='intro-email'> email@email.com </div>
            </div>
        );
    }
}

export default IntroSection;