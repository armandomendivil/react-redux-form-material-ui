import React from 'react';
import AppBarIcon from '../components/AppBar';

const Main = (props) => (
  <div>
    <AppBarIcon name={'App Name'} />
    {props.children}
  </div>
);

Main.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default Main;
