import UserEdit from 'views/profiles/edit';
import Profile from 'views/profiles/show';

const routes = [
	{
		component: UserEdit,
		path: '/users/:id/edit',
		private: true
	},
	{
		component: Profile,
		path: '/users/:id/:mainTab?/:secondaryTab?',
		private: true
	},
	{
		component: Profile,
		path: '/users/:id',
		private: true
	}
];

export default routes;