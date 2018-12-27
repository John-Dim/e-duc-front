import UserEdit from 'views/profiles/edit';
import Profile from 'views/profiles/show';

const routes = [
	{
		component: Profile,
		path: '/users/:id',
		private: true
	},
	{
		component: UserEdit,
		path: '/users/:id/edit',
		private: true
	}
];

export default routes;