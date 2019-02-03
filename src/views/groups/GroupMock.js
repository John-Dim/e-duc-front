import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

export default class GroupMock extends Component {
	render() {
		return(
			<div>
				<Container>
					<Row>
						<Col xs="12" lg="3">
							<div className="card profile-card group mb-3">
								<div className="content">
									<div className="title size-16">Μελέτη Μαθήματος Δίκτύων</div>
								</div>
							</div>	

							<div className="card p-0">
								<div className="px-3 py-2 bg-red text-white font-weight-medium border-bottom">
									Posts
								</div>
								<div className="px-3 py-2 border-bottom">
									Description
								</div>
								<div className="px-3 py-2 border-bottom">
									Details
								</div>
								<div className="px-3 py-2 ">
									Files
								</div>
							</div>
						</Col>

						<Col xs="12" lg="6">
							<div className="d-flex">
								<div className="tab-button active flex-fill pl-3">
									Posts
								</div>
								<div className="flex-fill"/>
							</div>
							<div className="card">
								uhuh
							</div>
						</Col>

						<Col>
							<Button color="success" className="font-weight-bold">
								Follow
							</Button>
						</Col>

					</Row>
				</Container>
			</div>
		)
	}
}