import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

// existing custom component
import TimePicker from 'material-ui/TimePicker';

// wrapper field
class CustomTime extends React.Component {
  render() {
    const { model, dispatch } = this.props;
    console.log('Model', model);
    console.log('Dispatch', dispatch);
    return (
      <TimePicker
        fformat="24hr"
        hintText="24hr Format"
        textFieldStyle={{ width: '100%' }}
        onChange={(e, a) => dispatch(actions.change(model, a))}
      />
    );
  }
}


export default connect(s => s)(CustomTime);
