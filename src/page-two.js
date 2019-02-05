import React from 'react';
import Context from './context';

const PageTwo = () => (
  <Context.Consumer>
    {context => (
      <div className="page--two">
        <p>Page Two. </p>
        <button onClick={() => context.toggleOpen(false)}>Go Back</button>
      </div>
    )}
  </Context.Consumer>
);

export default PageTwo;
