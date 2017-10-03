import React from 'react';
import glamorous from 'glamorous';
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

const SocialButton = glamorous.a({
  borderRadius: '20px',
  padding: '10px 20px',
  color: '#1da1f2',
  background: 'white',
  cursor: 'pointer',
  fontSize: '0.9rem',
  marginTop: '20px',
  textDecoration: 'none',
  width: '300px',
  textAlign: 'center',
  boxSizing: 'border-box',
  ':hover, :focus': {
    boxShadow: 'inset 0px 0px 20px #ccc'
  },
  '@media only screen and (max-width: 480px)': {
    width: '100%'
  }
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

function Signin () {
  return (
    <Root>
      <BackButton to='/'>
        <i className='fa fa-angle-left' /> Back Home
      </BackButton>
      <Title>Signin</Title>
      <SocialButton href='/auth/twitter'>
        <i className='fa fa-twitter' /> Sign in with Twitter
      </SocialButton>
    </Root>
  );
}

export default Signin;
