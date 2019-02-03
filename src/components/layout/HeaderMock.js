import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

export default class HeaderMock extends Component {
	render() {
		return(
			<header className="mb-3">
				<Container>
					<Row>
						<Col className="d-flex justify-content-between py-2">
							<div className="logo">
								E - duc
							</div>

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

								<div className="username pl-4">
									Giannis
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</header>
		)
	}
}