import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callGetAllModel } from '../redux/actions/async-actions';
import TableSimple from '../components/TableSimple';

class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(callGetAllModel('getClients', 'clients'));
  }

  render() {
    const { clients } = this.props;
    return (
      <TableSimple data={clients} />
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
