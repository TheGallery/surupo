import React, { Component } from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';

import { addAttendance, removeAttendance } from '../../redux/attendance';
import Header from './Header';
import Business from './Business';

const Root = glamorous.div({
  width: '700px',
  '@media only screen and (max-width: 768px)': {
    width: '100%'
  }
});

const BusinessesList = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 0'
});

const Error = glamorous.div({
  textAlign: 'center',
  color: 'white',
  fontSize: '20px',
  borderTop: 'solid 1px white',
  paddingTop: '10px'
});

class Businesses extends Component {
  onAttendClick = (businessId, isAttending) => {
    // if the user is not authenticated, redirect to signin page
    if (!this.props.user) {
      this.props.history.push('/signin');
    } else {
      if (isAttending) {
        this.props.removeAttendance(businessId);
      } else {
        this.props.addAttendance(businessId);
      }
    }
  };

  render () {
    if (!this.props.businesses.location) return null;
    
    return (
      this.props.businesses.businesses.length
        ? <Root>
            <Header location={this.props.businesses.location} />
            <BusinessesList>
              {
               this.props.businesses.businesses.map((business) => (
                  <Business
                    key={business.id}
                    business={business}
                    attendingCount={this.props.attendance[business.id] || 0}
                    isAttending={
                      !!this.props.user &&
                      !!~this.props.user.attendance.indexOf(business.id)
                    }
                    onAttendClick={this.onAttendClick}
                  />
                ))
              }
            </BusinessesList>
          </Root>
        : <Root>
            <Error>
              Could not execute search, try specifying a more exact location.
            </Error>
          </Root>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    businesses: state.businesses,
    attendance: state.attendance
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addAttendance: (businessId) => dispatch(addAttendance(businessId)),
    removeAttendance: (businessId) => dispatch(removeAttendance(businessId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Businesses);
