import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class MainTabs extends Component {
	render() {
    const tabs = [
      {
        name: 'Profile',
        id: 'profile'
      },
      {
        name: 'Lessons',
        id: 'lessons'
      }
    ]

    let activeTabId = this.props.match.params.mainTab;
    if (!activeTabId) {
      activeTabId = tabs[0].id;
    }

    return(
      <div className="d-flex">
        {tabs.map(tab => (
          <Link to={`/users/${this.props.profile._id}/${tab.id}`}
                className={`tab-button flex-fill title text-center 
                    ${tab.id === activeTabId ? 'active' : ''}`
                }
          >
            {tab.name}
          </Link>
        ))}
      </div>
    )
	}
}