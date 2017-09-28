import React from 'react';
import glamorous from 'glamorous';

const Root = glamorous.div({
  width: '600px',
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media only screen and (max-width: 768px)': {
    width: '100%'
  }
});

const SearchInput = glamorous.input({
  width: '100%',
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '20px',
  border: 'none',
  outline: 'none',
  fontSize: '1.1rem',
  color: 'white',
  padding: '10px 20px',
  '::placeholder': {
    color: '#eee'
  }
});

const SearchButton = glamorous.button({
  display: 'flex',
  marginLeft: '10px',
  border: 'none',
  outline: 'none',
  borderRadius: '20px',
  padding: '10px 20px',
  color: '#fc6a64',
  background: 'white',
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontSize: '0.9rem',
  marginTop: '20px',
  ':hover, :focus': {
    boxShadow: 'inset 0px 0px 20px #ccc'
  }
});

const Spinner = glamorous.img({
  height: '17px',
  marginRight: '10px'
}, ({active}) => ({ display: active ? 'inline-block' : 'none' }));

function Search (props) {
  const {
    searching,
    onLocationSearch
  } = props;

  return (
    <Root>
      <SearchInput placeholder='Where are you located?' />
      <SearchButton onClick={onLocationSearch} disabled={searching}>
        <Spinner
          src={process.env.PUBLIC_URL + '/loading.svg'}
          active={searching}
        />
        { searching ? 'Searching...' : 'Find Businesses' }
      </SearchButton>
    </Root>
  );
}

export default Search;
