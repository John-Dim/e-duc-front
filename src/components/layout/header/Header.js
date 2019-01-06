import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignOut } from 'views/auth/_actions';
import { isEmpty } from 'lodash';

class Header extends Component {

  renderSignedInUserContent() {
    return (
      <Fragment>
        <div>
          <input className="form-control" type="text" placeholder="Αναζήτηση"/>
        </div>
        <div>
          <Button color="link">
            <i className="fas fa-comments"></i>
          </Button>
          <Link to={`users/${this.props.user._id}`} color="link" className="ml-3">
            <i className="fas fa-user"></i>
            <span> {this.props.user.name} </span>
          </Link>
          <Button color="link" onClick={ () => this.props.userSignOut() }>
            <i className="fas fa-sign-out-alt"></i>
          </Button>
        </div>
      </Fragment>
    )
  }

  renderUnSignedInUserContent() {
    return (
      <div className="d-flex align-items-center">
        <Link to='/signup'>
          Sign Up
        </Link>
        <div className="mx-2">
          /
        </div>
        <Link to='/signin'>
          Sign In
        </Link>
      </div>
    );
  }

  render() {
    return (
      <header className="mb-4">     
        <div className="container d-flex justify-content-between align-items-center py-2">
          <h3 className="font-weight-bold">
            E-duc
          </h3>
          { 
            isEmpty(this.props.token) 
              ? 
                this.renderUnSignedInUserContent() 
              : this.renderSignedInUserContent() 
          }
        </div>
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
