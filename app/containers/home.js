import React from 'react';
import { connect } from 'react-redux';
import TableSimple from '../components/TableSimple';
import FloatingActionButtonSimple from '../components/FloatingActionButton';
import DialogModal from '../components/Dialog';
import ClientForm from '../components/forms/clients';
import { clientHeader } from '../helpers/headers';

const Home = (props) => {
  const { clients } = props;
  return (
    <div>
      <FloatingActionButtonSimple />
      <DialogModal model={'Client'} >
        <ClientForm />
      </DialogModal>
      <TableSimple data={clients} headers={clientHeader} model={'Client'} />
    </div>
  );
};

Home.propTypes = {
  clients: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  clients: state.clients,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
