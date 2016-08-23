import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, hashHistory} from 'react-router';

import App from './components/mainComponent.jsx';

injectTapEventPlugin();



ReactDOM.render(<App />, document.getElementById('content'));
