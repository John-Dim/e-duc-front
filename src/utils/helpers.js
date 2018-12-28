import {  specialityOptions , 
				  fieldOptions, 
				  institutionOptions
				} from 'utils/constants';

export const findSpecialityLabel= value => {
	const option = specialityOptions.find(speciality => speciality.value === value)
	return (option ? option.label : '');
}

export const findScientificFieldLabel = value => {
	const option = fieldOptions.find(field => field.value === value)
	return (option ? option.label : '');
}

export const findScientificInstitutionLabel = value => {
	const option = institutionOptions.find(institution => institution.value === value)
	return (option ? option.label : '');
}

