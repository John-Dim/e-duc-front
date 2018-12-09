import React, { Component } from 'react'
import Posts from './Posts'
import About from './About'
import Groups from './Groups'

class UserProfileTabs extends Component {
	state = {
		activeTab: 'posts'
	}

	renderPosts() {
		return(
			<Posts/>
		);
	}

	renderAbout() {
		return(
			<About/>
		);
	}

	renderGroups() {
		return(
			<Groups/>
		)
	}

	renderArticles() {
		return(
			<h3>
				Articles
			</h3>
		)
	}


	renderActiveTab() {
		switch(this.state.activeTab) {
			case 'posts':
				return this.renderPosts();
			case 'about':
				return this.renderAbout();
			case 'groups':
				return this.renderGroups();
			case 'articles':
				return this.renderArticles();
			default:
				return this.renderPosts();
		}
	}

	renderTabsButtons() {
		const el = tabs.map((tab, idx) => (
			<div 
				className={`tab btn ${tab === this.state.activeTab ? 'btn-primary' : 'btn-light'}`}
				onClick={()=> this.setState({activeTab: tab})}
				key={idx}
			>
				{tab.charAt(0).toUpperCase() + tab.slice(1)}
			</div>
		))

		return el;
	}

	render() {
		return(			
     	<div className="user-tabs card ">
     		<div className="tabs-buttons border-bottom d-flex justify-content-between">
     			{this.renderTabsButtons()}
     		</div>
     		<div className="active-tab p-3">
        	{this.renderActiveTab()}
        </div>
     	</div>
		)
	}
}

const tabs = ['posts', 'about', 'groups', 'articles'];

export default UserProfileTabs;