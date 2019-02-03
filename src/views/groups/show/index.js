import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getGroup, followGroup } from 'views/groups/_actions';
import { isEmpty } from 'lodash';

class Group extends Component {
	componentDidMount() {
		this.props.getGroup(this.props.match.params.id)
	}

	render() {
		const { group, followGroup } = this.props;

		if (isEmpty(group)) return null;

		return (
			<Container>
				<Row>
					<Col xs="5" className="card p-3">
						<dl className="row">

						  <dt className="col-sm-3">Title:</dt>
						  <dd className="col-sm-9">{ group.title }</dd>

						  <dt className="col-sm-3">Description:</dt>
						  <dd className="col-sm-9">{ group.description }</dd>

						  <dt className="col-sm-3">Creator:</dt>
						  <dd className="col-sm-9">{ group.creator.name }</dd>

						</dl>

						<div className='d-flex justify-content-between align-items-center'>
							<Link to={`/groups/${group._id}/edit`}>
								<Button color="primary">
									Edit
								</Button>
							</Link>
							<Button color="success" onClick={()=> followGroup(group._id)}>
								Follow
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		)
	}
}

const mapStateToProps = ({group}) => ({group})

export default compose(
		connect(mapStateToProps, {
			getGroup,
			followGroup
		}),
		withRouter
	)
(Group)
