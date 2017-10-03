import React from 'react';
import glamorous, { Div } from 'glamorous';

const Root = glamorous.div({
  height: '110px',
  display: 'flex',
  marginBottom: '15px',
  borderRadius: '10px',
  overflow: 'hidden',
  '@media only screen and (max-width: 480px)': {
    height: 'auto',
    flexDirection: 'column'
  }
});

const Content = glamorous.div({
  flex: 1,
  borderTop: 'solid 1px',
  display: 'flex',
  color: 'white',
  height: '110px',
  overflow: 'hidden'
});

const Attending = glamorous.div({
  width: '150px',
  marginLeft: '5px',
  background: 'transparent',
  color: 'white',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  '@media only screen and (max-width: 480px)': {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    color: '#787878',
    height: '50px',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0
  }
});

const Image = glamorous.div({
  height: '110px',
  width: '110px',
  backgroundSize: 'cover',
  marginRight: 'auto'
}, ({src}) => ({ backgroundImage: `url(${src})` }));

const Title = glamorous.a({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  marginBottom: '5px',
  color: 'white',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  }
});

const Counter = glamorous.div({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.2rem',
  '@media only screen and (max-width: 480px)': {
    fontSize: '1rem',
    flex: 'none',
    width: '110px',
    background: 'white',
    height: '100%'
  }
});

const AttendButton = glamorous.button({
  marginTop: 'auto',
  border: 'none',
  outline: 'none',
  borderRadius: '20px',
  padding: '10px 20px',
  color: '#fc6a64',
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontSize: '0.9rem',
  background: 'white',
  ':hover, :focus': {
    boxShadow: 'inset 0px 0px 20px #ccc'
  },
  '@media only screen and (max-width: 480px)': {
    margin: '0 5px',
    flex: 1
  }
});

const Info = glamorous.div({
  display: 'flex',
  flexDirection: 'column'
});

const InfoItem = glamorous.div({
  marginTop: '5px'
});

function Business (props) {
  const {
    attendingCount,
    business,
    isAttending,
    onAttendClick
  } = props;

  return (
    <Root>
      <Content>
        <Image src={business.image_url} />
        <Div flex={1} padding='5px 10px'>
          <Title href={business.url}>{business.name}</Title>
          <Info>
            <InfoItem>
              <i className='fa fa-map-marker' />
              {
                ` ${business.location.display_address[0]},
                ${business.location.display_address[1]} `
              }
            </InfoItem>
            <InfoItem>
              <i className='fa fa-phone' />
              { ` ${business.display_phone || '-'}`}
            </InfoItem>
          </Info>
        </Div>
      </Content>
      <Attending>
        <Counter>
          {attendingCount} <br />
          Attending
        </Counter>
        <AttendButton onClick={onAttendClick.bind(null, business.id, isAttending)}>
        {
          isAttending ? 'Remove' : 'Attend'
        }
        </AttendButton>
      </Attending>
    </Root>
  );
}

export default Business;
