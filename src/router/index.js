import Vue from 'vue';
import VueRouter from 'vue-router';
// // import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Dashboard from '../views/Dashboard.vue';
import NewPost from '../views/NewPost.vue';
import Account from '../views/Account.vue';

Vue.use(VueRouter);

const routes = [
	// {
	// 	path: '/',
	// 	name: 'Home',
	// 	component: Home,
	// },
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
	},
	{
		path: '/new',
		name: 'New Post',
		component: NewPost,
	},
	{
		path: '/account',
		name: 'Account',
		component: Account,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
