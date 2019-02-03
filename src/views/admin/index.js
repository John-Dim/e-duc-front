import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux'
import { getUsers, getGroups } from 'store/actions/admin';

class Home extends Component {
	componentDidMount() {
		this.props.getUsers();
		this.props.getGroups();
	}

	render() {

		return(
			<Container>
				<Row>
					<Col>
						<h3>Users</h3>
						{
							this.props.users.map(user => {
								return(
									<div>
										<Link to={`/users/${user._id}`}>
											{user.name}
										</Link>
									</div>
								)
							})
						}

						<h3>Groups</h3>
						{
							this.props.groups.map(group => {
								return(
									<div>
										<Link to={`/groups/${group._id}`}>
											{group.title}
										</Link>
									</div>
								)
							})
						}

					</Col>
				</Row>
			</Container>
		)
	}
}

const mapStateToProps = (state) => ({
	users: state.admin.users,
	groups: state.admin.groups
})

export default connect(mapStateToProps, {getUsers, getGroups})(Home)