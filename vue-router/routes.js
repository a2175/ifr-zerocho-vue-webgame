import Vue from 'vue';
import VueRouter from 'vue-router';
import GameMatcher from './GameMatcher';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/game/:name', component: GameMatcher } // /game
    ],
});