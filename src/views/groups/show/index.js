import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getGroup } from 'views/groups/_actions';
import { isEmpty } from 'lodash';

class Group extends Component {
	componentDidMount() {
		this.props.getGroup(this.props.match.params.id)
	}

	render() {
		const { group } = this.props;

		if (isEmpty(group)) return null;

		return (
			<Container>
				<Row>
					<Col xs="5" className="card p-3">
						<dl class="row">

						  <dt class="col-sm-3">Title:</dt>
						  <dd class="col-sm-9">{ group.title }</dd>

						  <dt class="col-sm-3">Description:</dt>
						  <dd class="col-sm-9">{ group.description }</dd>

						  <dt class="col-sm-3">Creator:</dt>
						  <dd class="col-sm-9">{ group.creator.name }</dd>

						</dl>

						<Link to={`/groups/${group._id}/edit`}>
							Edit
						</Link>

					</Col>
				</Row>
			</Container>
		)
	}
}

const mapStateToProps = ({group}) => ({group})

export default compose(
		connect(mapStateToProps, {
			getGroup
		}),
		withRouter
	)
(Group)
