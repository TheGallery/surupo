import React, { Component } from 'react';
import glamorous from 'glamorous';

import Header from './Header';
import Business from './Business';

const Root = glamorous.div({
  width: '700px',
  '@media only screen and (max-width: 768px)': {
    width: '100%'
  }
});

const BusinessesList = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 0'
});

class Businesses extends Component {
  render () {
    return (
      <Root>
        <Header />
        <BusinessesList>
          {
            Array.from({length: 15}).map(() => (
              <Business />
            ))
          }
        </BusinessesList>
      </Root>
    );
  }
}

export default Businesses;

