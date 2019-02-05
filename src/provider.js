import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Context from './context';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.location.pathname === '/two',
    }
  }

  toggleOpen = open => this.setState({ open });

  render() {
    const { open } = this.state;
    const { children } = this.props;
    return (
      <Context.Provider
        value={{
          open,
          toggleOpen: this.toggleOpen,
        }}
      >
        { children }
      </Context.Provider>
    );
  }
}

export default withRouter(Provider);

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};