import { createRouter, createWebHashHistory } from 'vue-router';

//Он использует символ решетки ( # ) перед фактическим URL-адресом, который передается внутри.
//Поскольку этот раздел URL-адреса никогда не отправляется на сервер, он не требует
// какой-либо специальной обработки на уровне сервера.
const routerHistory = createWebHashHistory();

import homePage from '@/pages/home-vue3';
import homePage2 from '@/pages/home-vue2';
import aboutPage from '@/pages/about';
import notFoundPage from '@/pages/notFound';

const routes = createRouter({
	history: routerHistory,
	routes: [
		{
			path: '/',
			name: 'home 3',
			component: homePage
		},
		{
			path: '/vue2',
			name: 'home 2',
			component: homePage2
		},
		{
			path: '/about',
			name: 'about',
			component: aboutPage
		},
		// Мы хотим поймать абсолютно все пути, которые не соответствуют предыдущим маршрутам.
		{
			path: '/:CatchAll(.*)',
			name: '404',
			component: notFoundPage
		}
	]
});

export default routes;
