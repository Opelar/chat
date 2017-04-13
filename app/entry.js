import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

Vue.use(Router);
Vue.use(Resource);

import index from './index.vue';

// let router = new Router({
//     mode: 'history',
//     routes: [
//         {
//             path: '/',
//             component: home
//         }, {
//             path: '/list',
//             component: home
//         }, {
//             path: '/user',
//             component: user
//         },
//     ],
// });

let main = new Vue({
    el: '#main',
    // router: router,
    mounted: () => {
        console.log('app init ready ...');
    },
    render: h => h(index)
});

export default console.log('hello world.');
