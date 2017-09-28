import React, { Component } from 'react';
import glamorous, { Div } from 'glamorous';

import Search from './Search';

const Root = glamorous.div({
  display: 'flex',
  margin: '50px 0',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 'initial' // 1 when there are no results
});

const Title = glamorous.div({
  fontFamily: 'Megrim, cursive',
  fontSize: '4rem',
  marginBottom: '25px',
  fontWeight: 'bold'
});

class Welcome extends Component {
  state = {
    searching: false
  };

  onLocationSearch = () => {
    this.setState({
      searching: true
    });
  };

  render () {
    return (
      <Root>
        <Div color='white' textAlign='center'>
          <Title>Surupo</Title>
          <Div fontWeight='bold' marginTop='-20px'>
            Going out tonight? Let people know.
          </Div>
        </Div>
        <Search
          searching={this.state.searching}
          onLocationSearch={this.onLocationSearch}
        />
      </Root>
    );
  }
}

export default Welcome;
