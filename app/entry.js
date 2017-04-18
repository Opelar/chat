import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

import Chat from './lib/chat.lib.js';

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
    mounted() {
        console.log('app init ready ...');

        let chat = new Chat('http://127.0.0.1:8081');

        let socket = chat.getClient();

        socket.on('connect', () => {
            console.log('connect ready ...');
        });
    },
    render(h) {
        return h(index);
    }
});

export default console.log('hello world.');
