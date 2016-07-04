import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionDialog } from '../redux/actions/index';
import { callAdd, callEdit } from '../redux/actions/async-actions';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class DialogModal extends Component {

  constructor(props) {
    super(props);

    this.closeDialog = this.closeDialog.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  closeDialog() {
    const { dispatch } = this.props;

    dispatch(actionDialog('CLOSE_DIALOG'));
  }

  saveForm() {
    const { dispatch, client, model } = this.props;

    if (client._id) {
      dispatch(callEdit(client._id, `edit${model}`, client.name, `EDIT_${model}S`.toUpperCase()));
    } else {
      dispatch(callAdd(`add${model}`, client, `ADD_${model}S`.toUpperCase()));
    }
  }

  render() {
    const { open } = this.props.dialogModal;
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.closeDialog}
      />,
      <FlatButton
        label="Submit"
        primary
        disabled={false}
        onTouchTap={this.saveForm}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal
          open={open}
        >
          {this.props.children}
        </Dialog>
      </div>
    );
  }
}

DialogModal.propTypes = {
  dialogModal: React.PropTypes.object.isRequired,
  children: React.PropTypes.element.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  client: React.PropTypes.object.isRequired,
  model: React.PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  dialogModal: state.dialogModal,
  client: state.client,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(DialogModal);
