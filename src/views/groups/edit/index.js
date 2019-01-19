import React, { Component } from 'react';
import GroupForm from 'views/groups/GroupForm';
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getGroup, editGroup } from 'views/groups/_actions';
import { isEmpty } from 'lodash';

class EditGroup extends Component {

	componentDidMount() {
		this.props.getGroup(this.props.match.params.id)
	}

	handleSubmit(params) {
		debugger
		this.props.editGroup(params)
	}

	render() {
		const { group } = this.props;

		if (isEmpty(group)) return null;

		return (
			<Container>
				<Row>
					<Col xs="4">
						<GroupForm 
							initialValues={group} 
							onSubmit={(params) => this.handleSubmit(params)}
						/>
					</Col>
				</Row>
			</Container>
		)
	}
}

const mapStateToProps = ({group}) => ({group})

export default compose(
		connect(mapStateToProps, {
			getGroup, editGroup
		}),
		withRouter
	)
(EditGroup)
