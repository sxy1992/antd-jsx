import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../components/view/userView";
import AdminView from "../components/view/adminView";
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import nProgress from "nprogress";
// import Home from "../views/home/index";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		component: { render: h => h("router-view") },
		redirect: { path: '/home' },
		children: [
			{
				path: '/home',
				name: 'Home',
				component: () => import(/* webpackChunkName: "index" */ "../views/home/index")
			}, {
				path: '/about',
				name: 'About',
				component: () => import(/* webpackChunkName: "index" */ "../views/home/about")
			}
		]
	}, {
		path: "/user",
		component: UserView,
		children: [
			{
				path: '/user/login',
				name: 'Login',
				component: () => import(/* webpackChunkName: "user" */ "../views/user/login")
			}, {
				path: '/user/regist',
				name: 'Regist',
				component: () => import(/* webpackChunkName: "user" */ "../views/user/regist")
			}
		]
	}, {
		path: "/admin",
		component: AdminView,
		children: [
			{
				path: '/admin/shop',
				name: 'shop',
				component: () => import(/* webpackChunkName: "admin" */ "../views/admin/shop/index")
			}, {
				path: '/admin/base/card',
				name: 'baseCard',
				component: () => import(/* webpackChunkName: "admin" */ "../views/admin/createBase/card/index")
			}
		]
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});
router.beforeEach((to, form, next) => {
	NProgress.start()
	next()
})
router.afterEach(() => {
	nProgress.done()
})

export default router;
