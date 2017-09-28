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

const Title = glamorous.div({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  marginBottom: '5px'
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

function Business () {
  return (
    <Root>
      <Content>
        <Image src={process.env.PUBLIC_URL + '/sample.jpg'} />
        <Div flex={1} padding='5px 10px'>
          <Title>The Burger House</Title>
          <Div overlfow='hidden'>
          Then cats take over the world dead stare with ears cocked so intently stare at the same spot cats making all the muffins yet sleep on keyboard. Give attitude meow to be let in for meow for food, then when human fills food dish, take a few bites of food and continue meowing. Walk on car leaving trail of paw prints on hood and windshield purr for no reason. Jump around on couch, meow constantly until given food, poop in litter box, scratch the walls for throw down all the stuff in the kitchen so why must they do that, or swat at dog. Howl on top of tall thing milk the cow or mrow and love to play with owner's hair tie fooled again thinking the dog likes me Gate keepers of hell. Lick the plastic bag hiss at vacuum cleaner for meow all night, and jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water so head nudges purrr purr littel cat, little cat purr purr crash against wall but walk away like nothing happened. Plays league of legends
          </Div>
        </Div>
      </Content>
      <Attending>
        <Counter>
          3 <br />
          Attending
        </Counter>
        <AttendButton>Attend</AttendButton>
      </Attending>
    </Root>
  );
}

export default Business;
