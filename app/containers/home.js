import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callGetAllModel } from '../redux/actions/async-actions';
import TableSimple from '../components/TableSimple';
import FloatingActionButtonSimple from '../components/FloatingActionButton';
import DialogModal from '../components/Dialog';
import { clientHeader } from '../helpers/headers';

class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(callGetAllModel('getClients', 'clients'));
  }

  render() {
    const { clients } = this.props;
    return (
      <div>
        <FloatingActionButtonSimple />
        <DialogModal />
        <TableSimple data={clients} headers={clientHeader} />
      </div>
    );
  }
}

Home.propTypes = {
  clients: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  clients: state.clients,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
