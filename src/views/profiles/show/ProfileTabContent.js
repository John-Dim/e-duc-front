import React, {Component} from 'react';

import Posts from 'views/profiles/show/profile_tabs/Posts';
import About from 'views/profiles/show/profile_tabs/About';

import profileTabs from 'utils/profile_tabs'

export default class ProfileTabContent extends Component {
	renderContent(tab) {
		switch(tab) {
			case 'posts':
				return <Posts profile={this.props.profile} />
			case 'about':
				return <About profile={this.props.profile} />
			default:
				return <div>Profile</div>
		}
	}

	render() {
		const tab = this.props.tab ? this.props.tab : profileTabs[0]._id

		return(
      <div className="card py-3 p-3">
        {this.renderContent(tab)}
      </div>
		)
	}
}