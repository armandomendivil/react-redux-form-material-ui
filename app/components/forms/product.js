import React from 'react';
import { connect } from 'react-redux';
import { Field, Form } from 'react-redux-form';

const ProductForm = () => (
  <div>
    <Form model="client">
      <Field model="client.name">
        <input type="text" />
      </Field>
    </Form>
  </div>
);

ProductForm.propTypes = {
  client: React.PropTypes.object.isRequired,
};

export default connect(state => ({ client: state.client }))(ProductForm);
