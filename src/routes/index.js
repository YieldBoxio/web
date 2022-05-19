import AuthView from '../views/auth/AuthView';
import Dashboard from '../views/Dashboard/Dashboard';
import MainView from '../views/MainView';


let routes = [
	{
		path: '/auth',
		component: AuthView,
		layout: 'auth',
	},
	{
		path: '/',
		component: MainView,
		layout: 'main',
	},
	{
		path: '/dashboard',
		component: Dashboard,
		layout: 'main',
	},
];
export default routes;