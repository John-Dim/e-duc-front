import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import profileTabs from 'utils/profile_tabs'

export default class SecondaryTabs extends Component {
	render() {
    const activeMainTabId = this.props.match.params.mainTab;
    let activeSecondaryTabId = this.props.match.params.secondaryTab;

    let tabs;

    if (activeMainTabId === 'lessons') {
      tabs = this.props.profile.groups;
    } else {
      tabs = profileTabs;
    }

    if (!activeSecondaryTabId) {
      activeSecondaryTabId = tabs[0]._id
    }

    return(
      <div className="card p-0">
        {tabs.map(tab => (
          <Link to={`/users/${this.props.profile._id}/${activeMainTabId}/${tab._id}`}
                className={`d-block px-3 py-2 border-bottom
                  ${tab._id === activeSecondaryTabId ? 'bg-red text-white font-weight-medium' : ''}`
                }
          >
            {activeMainTabId === 'lessons' ? tab.title : tab.name}
          </Link>
        ))}
      </div>
    )
	}
}