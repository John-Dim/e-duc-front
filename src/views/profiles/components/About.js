import React, { Component } from 'react';

export default class UserProfileAbout extends Component {

	render() {
		return(
			<div className="card p-3">
				<dl class="row">

				  <dt class="col-sm-3">Όνομα</dt>
				  <dd class="col-sm-9">Γιάννης</dd>

				  <dt class="col-sm-3">Επώνυμο</dt>
				  <dd class="col-sm-9">Δημητρόπουος</dd>

				  <dt class="col-sm-3">Ιδιότητα</dt>
				  <dd class="col-sm-9">Φοιτητής Πληροφορικής/Καθηγητής Πληροφορικής/Μαθητής</dd>

				  <dt class="col-sm-3">Πανεπιστήμιο</dt>
				  <dd class="col-sm-9">Πανεπιστήμιο Πειραια</dd>

				  <dt class="col-sm-3">Επιστημονικά πεδία</dt>
				  <dd class="col-sm-9">Web development</dd>

				  <dt class="col-sm-3">Ηλικεία</dt>
				  <dd class="col-sm-9">25</dd>

				  <dt class="col-sm-3">Τόπος Διαμονής</dt>
				  <dd class="col-sm-9">Πειραίας</dd>

				  <dt class="col-sm-3">Email</dt>
				  <dd class="col-sm-9">jdimitrop@gmail.com</dd>

				 </dl>
			</div>
		)
	}	
}