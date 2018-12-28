import React, { Component } from 'react';

import { findSpecialityLabel,
				 findScientificFieldLabel, 
				 findScientificInstitutionLabel} from 'utils/helpers';

export default class UserProfileAbout extends Component {

	render() {
		const { name, 
						surname, 
						speciality, 
						field,
						institution,
						email,
						age,
						livesAt,
						bio,
						quote
					} = this.props.profile

		return(
			<div className="card p-3">
				<dl class="row">

				  <dt class="col-sm-3">Όνομα</dt>
				  <dd class="col-sm-9">{ name }</dd>

				  <dt class="col-sm-3">Επώνυμο</dt>
				  <dd class="col-sm-9">{ surname }</dd>

				  <dt class="col-sm-3">Ιδιότητα</dt>
				  <dd class="col-sm-9">{ findSpecialityLabel(speciality) }</dd>

				  <dt class="col-sm-3">Πανεπιστήμιο</dt>
				  <dd class="col-sm-9">{ findScientificInstitutionLabel(institution) }</dd>

				  <dt class="col-sm-3">Επιστημονικό πεδία</dt>
				  <dd class="col-sm-9">{ findScientificFieldLabel(field) }</dd>

				  <dt class="col-sm-3">Ηλικεία</dt>
				  <dd class="col-sm-9">{ age }</dd>

				  <dt class="col-sm-3">Τόπος Διαμονής</dt>
				  <dd class="col-sm-9">{ livesAt }</dd>

				  <dt class="col-sm-3">Email</dt>
				  <dd class="col-sm-9">{ email }</dd>
				</dl>
			</div>
		)
	}	
}