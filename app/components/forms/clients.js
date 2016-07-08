import React from 'react';
import { connect } from 'react-redux';
import { Form, controls, createFieldClass } from 'react-redux-form';
import TextField from 'material-ui/TextField';

const MaterialField = createFieldClass({
  TextField: controls.text,
}, {
  componentMap: {
    TextField,
  },
});

const ClientForm = () => (
  <div>
    <Form model="client">
      <MaterialField model="client.name">
        <TextField />
      </MaterialField>
    </Form>
  </div>
);

ClientForm.propTypes = {
  client: React.PropTypes.object.isRequired,
};

export default connect(state => ({ client: state.client }))(ClientForm);
