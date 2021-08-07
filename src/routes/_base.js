import { lazy } from 'react';

export const RouteName = {
    Home: '/',
    Quiz: '/quiz',
    Questions: '/questions',
    // contact: '/contact-info'
};

const RouteArray = [
    {
        route: RouteName.Home,
        title: 'Quiz-Game',
        Component: lazy(() => import("../containers/Main")),
    },
    {
        route: RouteName.Quiz,
        title: 'Quiz',
        Component: lazy(() => import("../containers/Quiz")),
    }, {
        route: RouteName.Questions,
        title: "Questions",
        Component: lazy(() => import("../containers/Questions"))
    },
];

export default RouteArray;