import React from 'react';
import Context from './context';

const PageOne = () => (
  <Context.Consumer>
    {context => (
      <div className="page--one">
        <p>Page One. </p>
        <button onClick={() => context.toggleOpen(true)}>Proceed</button>
      </div>
    )}
  </Context.Consumer>
);

export default PageOne;
