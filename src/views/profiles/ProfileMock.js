import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

export default class ProfileMock extends Component {

	renderProfileTabs() {
		return (
			<div className="card p-0">
				<div className="px-3 py-2 border-bottom">
					Posts
				</div>
				<div className="px-3 py-2 border-bottom">
					About
				</div>
				<div className="px-3 py-2 bg-red text-white font-weight-medium">
					Following
				</div>
				<div className="px-3 py-2">
					Articles
				</div>
			</div>
		)
	}

	renderLessonsTabs() {
		return(
			<div className="card p-0">
				<div className="px-3 py-2 border-bottom">
					Εισαγωγή στον προγραμματισμό
				</div>
				<div className="px-3 py-2 border-bottom">
					Ανάλυση 2
				</div>
				<div className="px-3 py-2 bg-red text-white font-weight-medium">
					Φυσική 3
				</div>
				<div className="px-3 py-2">
					Δικαιο
				</div>
			</div>
		)
	}

	render() {
		return(
			<Container>
				<Row>
					<Col xs="12" lg="3">
						<div className="card profile-card mb-3">
							<div className="content">
								<img src="https://via.placeholder.com/70x70"/>
								<div className="title size-16">Giannis Dimitropoulos</div>
								<div className="size-14">Strudent</div>
							</div>
						</div>

						{this.renderLessonsTabs()}
					</Col>
					<Col xs="12" lg="6">
						<div className="d-flex">
							<div className="tab-button flex-fill title text-center">
								Profile
							</div>
							<div className="tab-button active flex-fill text-center">
								Lessons
							</div>
						</div>
						<div className="card py-3 p-3">
							<div className="font-weight-bold size-16 mb-2 pb-1">
								Εισαγωγή στον προγραμματισμό
							</div>
							<div className="d-flex justify-content-between border-top">
								<div className="py-2 underline-active-border-tab">
									Ανακοινώσεις
								</div>
								<div className="py-2">
									Posts
								</div>								
								<div className="py-2">
									Description
								</div>	
								<div className="py-2">
									Files
								</div>	
							</div>
						</div>
					</Col>

					<Col xs="12" lg="3">
						<Button color="success" className="font-weight-bold">
							Follow
						</Button>
					</Col>
				</Row>
			</Container>
		)
	}	
}