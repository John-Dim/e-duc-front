import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from 'reactstrap';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignOut } from 'store/actions/auth';
import { isEmpty } from 'lodash';

class Header extends Component {

  renderSignedInUserContent() {
    return (
      <div className="header-actions d-flex align-items-center">
        <div>
          <i className="fas fa-envelope"/>
          <div>Messages</div>
        </div>
        <div>
          <i className="fas fa-layer-group"></i>
          <div>Groups</div>
        </div>
        <div>
          <i className="fas fa-users"></i>
          <div>Users</div>
        </div>

        <Link to={`/users/${this.props.user._id}`} className="username text-white pl-4">
          {this.props.user.name}
        </Link>
      </div>
    )
  }

  renderUnSignedInUserContent() {
    return (
      <div className="d-flex align-items-center">
        <Link to='/signup' className="text-white">
          Sign Up
        </Link>
        <div className="mx-2 text-white">
          /
        </div>
        <Link to='/signin' className="text-white">
          Sign In
        </Link>
      </div>
    );
  }

  render() {
    return (
      <header className="mb-3">
        <Container>
          <Row>
            <Col className="d-flex justify-content-between py-2">
              <div className="logo">
                E - duc
              </div>

                { 
                  isEmpty(this.props.token) 
                    ? 
                      this.renderUnSignedInUserContent() 
                    : this.renderSignedInUserContent() 
                }

            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.user
  }
}

export default connect(mapStateToProps,
  {
    userSignOut
  }
)(Header);
