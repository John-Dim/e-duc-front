import CreateGroup from 'views/groups/create';
import EditGroup from 'views/groups/edit';
import Group from 'views/groups/show';

const routes = [
	{
		component: CreateGroup,
		path: '/groups/new',
		private: true,
		exact: true
	},
	{
		component: EditGroup,
		path: '/groups/:id/edit',
		private: true,
		exact: true		
	},
	{
		component: Group,
		path: '/groups/:id',
		private: true,
		exact: true
	}
]

export default routes;