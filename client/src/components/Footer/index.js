import React from 'react';
import glamorous from 'glamorous';

const Root = glamorous.div({
  padding: '10px 0',
  color: 'white'
});

const Link = glamorous.a({
  fontWeight: 'bold',
  color: 'white',
  '@media only screen and (max-width: 768px)': {
    fontSize: '0.9rem'
  }
});

function Footer () {
  return (
    <Root>
      Built with <i className='fa fa-heart' /> by
      {' '}<Link href='http://www.iopsychas.me'>iopsychas</Link>{' '}
      using the <Link href='https://www.yelp.com/fusion'>Yelp Fusion API</Link>
    </Root>
  );
}

export default Footer;
