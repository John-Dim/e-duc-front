import React, { Component } from 'react';
import MainTabs from './MainTabs';
import SecondaryTabs from './SecondaryTabs';
import ProfileTabContent from './ProfileTabContent';
import LessonTabContent from './LessonTabContent';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getProfile } from 'store/actions/profile';
import { withRouter } from 'react-router-dom';

class Profile extends Component {

  componentDidMount() {
    this.props.getProfile(this.props.match.params.id)
  }

  render() {
    if (isEmpty(this.props.profile)) {
      return false;
    }

    const { name, surname, speciality } = this.props.profile;

    return (
      <Container>
        <Row>
          <Col xs="12" lg="3">
            <div className="card profile-card mb-3">
              <div className="content">
                <img src="https://via.placeholder.com/70x70"/>
                <div className="title size-16">{`${name} ${surname}`}</div>
                <div className="size-14">{`${speciality}`}</div>
              </div>
            </div>
            <SecondaryTabs profile={this.props.profile} match={this.props.match}/>
          </Col>
          <Col xs="12" lg="6">
            <MainTabs profile={this.props.profile} match={this.props.match}/>
            { 
              this.props.match.params.mainTab === 'lessons' ?
              <LessonTabContent match={this.props.match} lesson={this.props.activeLesson}/> :
              <ProfileTabContent match={this.props.match} profile={this.props.profile} tab={this.props.match.params.secondaryTab}/> 
            }
          </Col>

          <Col xs="12" lg="3">
            <Button color="success" className="font-weight-bold">
              Follow
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

const findActiveLesson = (lessons, params) => {
  if (!lessons || params.mainTab !== 'lessons') {
    return null;
  }
  let activeLesson =lessons.find(lesson => lesson._id === params.secondaryTab)

  if (lessons.length > 0 && !activeLesson) {
    activeLesson = lessons[0]
  }

  return activeLesson
}

const mapStateToProps = ({profile}, ownProps) => {
  return {
    profile,
    activeLesson: findActiveLesson(profile.groups, ownProps.match.params ),
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
