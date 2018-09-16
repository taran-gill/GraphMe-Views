import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from '@/components/HelloWorld.vue';
import Graph from '@/components/Graph.vue';

Vue.use(VueRouter);

export default new VueRouter({
routes: [
    { path: '/', component: HelloWorld },
    { path: '/graph', component: Graph }
]
});