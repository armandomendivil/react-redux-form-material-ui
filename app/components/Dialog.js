import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionDialog } from '../redux/actions/index';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class DialogModal extends Component {

  constructor(props) {
    super(props);

    this.closeDialog = this.closeDialog.bind(this);
  }

  closeDialog() {
    const { dispatch } = this.props;

    dispatch(actionDialog('CLOSE_DIALOG'));
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
        disabled
        onTouchTap={this.handleClose}
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
          Only actions can close this dialog.
        </Dialog>
      </div>
    );
  }
}

DialogModal.propTypes = {
  dialogModal: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dialogModal: state.dialogModal,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(DialogModal);
