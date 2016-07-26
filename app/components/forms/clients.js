import React from 'react';
import { connect } from 'react-redux';
import { Field, Form, controls, createFieldClass } from 'react-redux-form';
import validator from 'validator';
import TextField from 'material-ui/TextField';


const MaterialField = createFieldClass({
  TextField: controls.text,
}, {
  componentMap: {
    TextField,
  },
});

const isRequired = (value) => !validator.isNull(value);
// const number = (value) => validator.isInt(value);

const ClientForm = (props) => (
  <div>
    <form>
      <Field
        model="client.name"
        validators={{
          isRequired,
          length: (v) => v && v.length > 15,
        }}
        validateOn="blur"
      >
        <label>Name</label>
        <input type="text" />

        {props.clientForm.fields.name.touched
          && props.clientForm.fields.name.errors.isRequired
          && <div>Name is required</div>
        }
      </Field>
      
      <MaterialField
        model="client.name"
        validators={{
          isRequired,
          length: (v) => v && v.length > 15,
        }}
        validateOn="blur"
      >
        <TextField
          errorText={props.clientForm.fields.name.touched
          && props.clientForm.fields.name.errors.isRequired
          && <div>Name is required</div>}
        />
      </MaterialField>
    </form>
  </div>
);

ClientForm.propTypes = {
  client: React.PropTypes.object.isRequired,
  clientForm: React.PropTypes.object.isRequired,
};

export default connect(state => ({ 
  client: state.client,
  clientForm: state.clientForm,
}))(ClientForm);
