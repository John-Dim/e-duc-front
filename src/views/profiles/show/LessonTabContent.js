import React, {Component} from 'react';

export default class LessonTabContent extends Component {
	render() {
    if (!this.props.lesson) {
      return null
    }

		return(
      <div className="card py-3 p-3">
        <div className="font-weight-bold size-16 mb-2 pb-1">
          {this.props.lesson.title}
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
		)
	}
}