import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionDialog } from '../redux/actions/index';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};

class FloatingActionButtonSimple extends Component {

  constructor(props) {
    super(props);

    this.openDialog = this.openDialog.bind(this);
  }

  openDialog() {
    const { dispatch } = this.props;

    dispatch(actionDialog('OPEN_DIALOG'));
  }

  render() {
    return (
      <div>
        <FloatingActionButton
          style={style}
          onClick={this.openDialog}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

FloatingActionButtonSimple.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = () => ({ });

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(FloatingActionButtonSimple);
