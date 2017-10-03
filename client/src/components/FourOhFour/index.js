import React from 'react';
import glamorous, { Div } from 'glamorous';
import { Link } from 'react-router-dom';

const Root = glamorous.div({
  width: '70%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media only screen and (max-width: 480px)': {
    width: '100%'
  }
});

const Title = glamorous.div({
  width: '100%',
  textAlign: 'center',
  fontSize: '1.5rem',
  color: 'white',
  borderBottom: 'solid 1px',
  paddingBottom: '10px'
});

const BackButton = glamorous(Link)({
  display: 'inline-block',
  margin: '50px 0',
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  alignSelf: 'flex-start',
  ':hover': {
    color: '#eee'
  }
});

function FourOhFour () {
  return (
    <Root>
      <BackButton to='/'>
        <i className='fa fa-angle-left' /> Back Home
      </BackButton>
      <Title>404 - Page Not Found</Title>
      <Div margin='20px 0' color='white' fontWeight='bold'>
        Oh no there is nothing here :(
      </Div>
    </Root>
  );
}

export default FourOhFour;
