import React, { Component } from 'react';

export default class UserProfileGroups extends Component {

	render() {
		return(
			<div className="card p-3">
				<div className="mb-3">
					<h5>Μαθήματα</h5>
					<ul class="list-group list-group-flush">
					  <li class="list-group-item">Δίκτυα Υπολογιστών</li>
					  <li class="list-group-item">Αρχιτεκτονική Υπολογιστώ</li>
					  <li class="list-group-item">Γεωγραφικά Συστήματα</li>
					  <li class="list-group-item">Ανάλυση 2</li>
					</ul>
				</div>


				<div className="mb-3">
					<h5>Projects</h5>
					<ul class="list-group list-group-flush">
					  <li class="list-group-item">Adruino </li>
					  <li class="list-group-item">Dapibus ac facilisis in</li>
					  <li class="list-group-item">Morbi leo risus</li>
					</ul>
				</div>


				<div className="mb-3">
					<h5>General</h5>
					<ul class="list-group list-group-flush">
					  <li class="list-group-item">Javascript</li>
					  <li class="list-group-item">Web development</li>
					  <li class="list-group-item">Html 5</li>
					</ul>
				</div>

			</div>
		)
	}	
}
