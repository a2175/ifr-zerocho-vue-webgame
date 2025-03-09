import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/number-baseball",
            component: () =>
                import(/* webpackChunkName: "number-baseball" */ "../3.숫자야구/NumberBaseball")
        },
        {
            path: "/response-check",
            component: () =>
                import(/* webpackChunkName: "response-check" */ "../4.반응속도체크/ResponseCheck")
        },
        {
            path: "/rock-scissors-paper",
            component: () =>
                import(/* webpackChunkName: "rock-scissors-paper" */ "../5.가위바위보/RockScissorsPaper")
        },
        {
            path: "/lotto-generator",
            component: () =>
                import(/* webpackChunkName: "lotto-generator" */ "../6.로또/LottoGenerator")
        }
    ]
});