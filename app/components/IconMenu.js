import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { callRemove, callGetOneModel } from '../redux/actions/async-actions';
import { actionDialog } from '../redux/actions/index';

class IconMenuSimple extends Component {

  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete() {
    const { dispatch, id, model } = this.props;
    dispatch(callRemove(id, `remove${model}`));
  }

  handleEdit() {
    const { dispatch, id, model } = this.props;
    dispatch(callGetOneModel(`get${model}`, id, 'client'));
    dispatch(actionDialog('OPEN_DIALOG'));
  }

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          <MenuItem
            primaryText="Edit"
            onClick={this.handleEdit}
          />
          <MenuItem
            primaryText="Delete"
            onClick={this.handleDelete}
          />
        </IconMenu>
      </div>
    );
  }
}

IconMenuSimple.propTypes = {
  id: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  model: React.PropTypes.string.isRequired,
};

const mapStateToProps = () => ({ });

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(IconMenuSimple);
