import React, { Component } from 'react';
import GroupForm from 'views/groups/GroupForm';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { createGroup } from 'views/groups/_actions';

class CreateGroup extends Component {
	state = {
		newGroupId: null
	}

	static initialGroupObj = {
		title: '',
		description: ''
	}
	
	handleSubmit(params) {
		this.props.createGroup(params).then((newGroupId) => this.setState({newGroupId}))
	}

	render() {

		if (this.state.newGroupId) {
			return <Redirect to={`/groups/${this.state.newGroupId}`} />
		}

		return(
			<Container>
				<Row>
					<Col sm={{size: 4, offset: 4}}>
						<h2>Create Group</h2>
						<GroupForm 
							initialValues={CreateGroup.initialGroupObj} 
							onSubmit={(params) => this.handleSubmit(params)} 
						/>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default connect(null, {createGroup})(CreateGroup);