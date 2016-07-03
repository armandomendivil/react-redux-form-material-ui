import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store} >
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router routes={routes} history={browserHistory} />
    </MuiThemeProvider>
  </Provider>
, document.getElementById('app'));
