import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import TableSimple from '../components/TableSimple';
import FloatingActionButtonSimple from '../components/FloatingActionButton';
import DialogModal from '../components/Dialog';
import ClientForm from '../components/forms/clients';
import { clientHeader } from '../helpers/headers';
import { pagination } from '../redux/actions/async-actions';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      offset: 0,
    };
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  loadCommentsFromServer() {
    const { dispatch } = this.props;
    const params = { limit: 10, offset: this.state.offset };
    dispatch(pagination('getClients', params));
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * 10);

    this.setState({offset: offset}, () => {
      this.loadCommentsFromServer();
    });
  };

  render() {
    const { clients, paginate } = this.props;
  
    return (
      <div className="commentBox">
        <FloatingActionButtonSimple />
        <DialogModal model={'Client'} >
          <ClientForm />
        </DialogModal>
        <TableSimple data={clients} headers={clientHeader} model={'Client'} />
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageNum={paginate.pageNum}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       clickCallback={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
      </div>
    );
  }
}

Home.propTypes = {
  clients: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  paginate: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  clients: state.clients,
  paginate: state.paginate,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
