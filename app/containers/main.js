import React from 'react';
import { connect } from 'react-redux';

const Main = (props) => (
  <div>
    <h1>Main</h1>
    {props.children}
  </div>
);

Main.propTypes = {
  children: React.PropTypes.element.isRequired,
};

const mapStateToProps = () => ({ });
const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Main);
