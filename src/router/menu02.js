export default [
    {
        path: "/menu02/exam01expressions",
        component: () => import(/* webpackChunkName: "menu02" */ '../views/menu02/Exam01Expressions')
    },
    {
        path: "/menu02/exam02directives",
        component: () => import(/* webpackChunkName: "menu02" */ '../views/menu02/Exam02Directives')
    }
]