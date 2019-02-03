import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

export default class MessagesMock extends Component {
	render() {
		return(
			<div>
				<Container>
					<Row>
						<Col lg="3">
							<div className="card">

								<div className="border-bottom bg-red text-white p-2">
									<div className="d-flex justify-content-between align-items-center mb-1">
										<div className="font-weight-bold">
											Giannis Dimitropoulos
										</div>
										<div className="size-12 text-grey">
											22:00
										</div>
									</div>
									<div class="size-12">Testaki dhuhus sshuh shuh </div>
								</div>

								<div className="border-bottom p-2">
									<div className="d-flex justify-content-between align-items-center mb-1">
										<div className="font-weight-bold">
											Giannis Dimitropoulos
										</div>
										<div className="size-12 text-grey">
											22:00
										</div>
									</div>
									<div class="size-12">Testaki dhuhus sshuh shuh </div>
								</div>


								<div className="border-bottom p-2">
									<div className="d-flex justify-content-between align-items-center mb-1">
										<div className="font-weight-bold">
											Giannis Dimitropoulos
										</div>
										<div className="size-12 text-grey">
											22:00
										</div>
									</div>
									<div class="size-12">Testaki dhuhus sshuh shuh </div>
								</div>

								<div className="border-bottom p-2">
									<div className="d-flex justify-content-between align-items-center mb-1">
										<div className="font-weight-bold">
											Giannis Dimitropoulos
										</div>
										<div className="size-12 text-grey">
											22:00
										</div>
									</div>
									<div class="size-12">Testaki dhuhus sshuh shuh </div>
								</div>

							</div>
						</Col>

						<Col lg="6">
							<div className="card messaging-box">
								<div className="messages">
								</div>
							</div>
							<div className="new-message">
								<div className="input-group">
								  <input type="text" class="form-control" placeholder="Γράψτε εδώ"/>
								  <span className="input-group-btn">
								    <Button 
								    	color="success" 
								    	className="btn btn-default" 
								    	type="button"
								    >
								    	Αποστολή
								    </Button>
								  </span>
								</div>

							</div>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}