import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import Waves from './waves';

const Wrapper = ({ children }) => (
  <Context.Consumer>
    {context => (
      <Fragment>
        <Waves open={context.open} />
        { children }
      </Fragment>
    )}
  </Context.Consumer>
);

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
