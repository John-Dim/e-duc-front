import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="mb-4">    	
      	<div className="container d-flex justify-content-between align-items-center py-2">
	      	<h3 className="font-weight-bold">
	      		E-duc
	      	</h3>
	      	<div>
	      		<input className="form-control" type="text" placeholder="Αναζήτηση"/>
	      	</div>
	      	<div>
	      		<a href="">
		      		<i className="fas fa-comments"></i>
	      		</a>
	      		<a href="" className="ml-3">
	      			<i className="fas fa-user"></i>
	      			<span> Giannis </span>
	      		</a>
	      	</div>
	      </div>
      </header>
    );
  }
}

export default Header;
