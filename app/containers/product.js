import React from 'react';
import { connect } from 'react-redux';
import TableSimple from '../components/TableSimple';
import FloatingActionButtonSimple from '../components/FloatingActionButton';
import DialogModal from '../components/Dialog';
import ProductForm from '../components/forms/product';
import { productHeader } from '../helpers/headers';

const Home = (props) => {
  const { products } = props;
  return (
    <div>
      <FloatingActionButtonSimple />
      <DialogModal model={'Product'} >
        <ProductForm />
      </DialogModal>
      <TableSimple data={products} headers={productHeader} model={'Product'} />
    </div>
  );
};

Home.propTypes = {
  products: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
