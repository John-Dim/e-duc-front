import UserProfilePage from 'views/profiles';
import GroupPage from 'views/groups/GroupPage';
import SignUp from 'views/signup'

const routes = [
	{
		component: UserProfilePage,
		path: '/users/:userId',
		private: true
	},
	{
		component: GroupPage,
		path: '/groups/:useId',
		private: true
	},
	{
		component: SignUp,
		path: '/signup',
		private: false
	}
];

export default routes;