import React from 'react';
import AppBar from 'material-ui/AppBar';

const AppBarIcon = (props) => (
  <AppBar
    title={props.name}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

AppBarIcon.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default AppBarIcon;
