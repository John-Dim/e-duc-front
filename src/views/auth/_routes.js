import SignUp from './SignUp';
import SignIn from './SignIn';

const routes = [
	{
		component: SignUp,
		path: '/signup',
		private: false
	},
	{
		component: SignIn,
		path: '/signin',
		private: false
	}
];

export default routes;