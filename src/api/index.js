import axios from 'axios';

import store from 'store';

store.subscribe(() => {
	const authorization = store.getState().auth.token;
	if (authorization) {
		axios.defaults.headers.common['authorization'] = authorization;
	}
})

export default axios.create({baseURL: 'http://localhost:8080'})
