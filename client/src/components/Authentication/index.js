import React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';
import { Link } from 'react-router-dom';

const Root = glamorous.div({
  position: 'absolute',
  right: '20px',
  top: '20px'
});

const StyledLink = css({
  textDecoration: 'none',
  borderRadius: '20px',
  padding: '10px 20px',
  color: '#fc6a64',
  background: 'white',
  cursor: 'pointer',
  fontSize: '0.9rem',
  ':visited': {
    color: '#fc6a64'
  },
  ':hover, :focus': {
    boxShadow: 'inset 0px 0px 20px #ccc'
  }
});

function Authentication ({isAuthenticated}) {
  return (
    <Root>
    {
      isAuthenticated
        ? <a className={StyledLink} href='/auth/logout'>Logout</a>
        : <Link to='/signin' className={StyledLink}>Signin</Link>
    }
    </Root>
  );
}

export default Authentication;
