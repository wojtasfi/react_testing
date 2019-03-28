import React from "react";
import ReactDOM from 'react-dom'

import Root from 'Root'
import App from 'components/App'


ReactDOM.render(
    <Root>
        <App/>
        {/*App is passed as props*/}
    </Root>,
    document.querySelector('#root'));