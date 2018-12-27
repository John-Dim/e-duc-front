import React, { Component } from 'react';
import UserProfileTabs from '../components/UserProfileTabs';

import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getProfile } from 'views/profiles/_actions';
import { withRouter } from 'react-router-dom';

class Profile extends Component {

  componentDidMount() {
    this.props.getProfile(this.props.match.params.id)
  }

  render() {
    if (isEmpty(this.props.profile)) {
      return false;
    }

    const { name, surname } = this.props.profile;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h1 className="mb-0">
                {`${name} ${surname}`}
              </h1>
              <button className="btn btn-success">
                Follow
              </button>
            </div>
            <div>
              <UserProfileTabs />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({profile}) => {
  return {
    profile
  }
}

export default compose(
  connect(mapStateToProps,
    {
      getProfile
    }
  ),
  withRouter
)(Profile);
