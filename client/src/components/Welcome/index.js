import React, { Component } from 'react';
import { connect } from 'react-redux';
import glamorous, { Div } from 'glamorous';

import { fetchBusinesses } from '../../redux/businesses';

import Search from './Search';

const Root = glamorous.div({
  display: 'flex',
  margin: '50px 0',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}, ({withResults}) => {
  return withResults
    ? { flex: 'initial' }
    : { flex: 1 };
});

const Title = glamorous.div({
  fontFamily: 'Megrim, cursive',
  fontSize: '4rem',
  marginBottom: '25px',
  fontWeight: 'bold'
});

class Welcome extends Component {
  state = {
    location: ''
  };

  // Shared event binding. Used when we press enter on the field or
  // when clicking the submit button.
  onLocationSearch = (e) => {
    if ((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') {
      if (this.state.location.length) {
        this.props.fetchBusinesses(this.state.location);
      }
    }
  };

  onLocationChange = ({target}) => {
    this.setState({
      location: target.value
    });
  }

  render () {
    return (
      <Root withResults={this.props.withResults}>
        <Div color='white' textAlign='center'>
          <Title>Surupo</Title>
          <Div fontWeight='bold' marginTop='-20px'>
            Going out tonight? Check-in in advance.
          </Div>
        </Div>
        <Search
          fetching={this.props.fetching}
          location={this.state.location}
          onLocationChange={this.onLocationChange}
          onLocationSearch={this.onLocationSearch}
        />
      </Root>
    );
  }
}

function mapStateToProps (state) {
  return {
    withResults: !!state.businesses.location,
    fetching: state.businesses.fetching
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchBusinesses: (location) => dispatch(fetchBusinesses(location))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
