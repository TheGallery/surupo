import React from 'react';
import glamorous from 'glamorous';

const Root = glamorous.div({
  color: 'white',
  borderBottom: 'solid 1px white',
  paddingBottom: '5px'
});

const Highlight = glamorous.span({
  fontWeight: 'bold'
});

function Header ({location}) {
  return (
    <Root>
      Showing businesses in <Highlight>{location}</Highlight> area.
    </Root>
  );
}

export default Header;
