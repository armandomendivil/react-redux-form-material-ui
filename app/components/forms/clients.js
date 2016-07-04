import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { controls, createFieldClass, Form } from 'react-redux-form';

const MaterialField = createFieldClass({
  TextField: controls.text,
}, {
  updateOn: 'blur',
  componentMap: {
    TextField,
  },
});

class ClientForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  attachNode(node) {
    this._form = ReactDOM.findDOMNode(node);
  }
  handleClick() {
    this._form.submit();
  }
  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
  }

  render() {
    const { client } = this.props;

    return (
      <div>
        <Form
          model="client"
          onSubmit={(val) => this.handleSubmit(val)}
          ref={this.attachNode.bind(this)}
        >
          <h1>Hello, {client.name}!</h1>
          <MaterialField model="client.name">
            <TextField
              hintText="Name"
              floatingLabelText="Name"
              ref="name"
            />
          </MaterialField>
        </Form>
      </div>
    );
  }
}

ClientForm.propTypes = {
  client: React.PropTypes.object.isRequired,
};

export default connect(state => ({ client: state.client }))(ClientForm);