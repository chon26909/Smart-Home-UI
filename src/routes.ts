import React from 'react';

// public routes
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
// private routes
const HomePage = React.lazy(() => import('./pages/HomePage'));


interface RoutesType {
    [key: string]: { path: string; element: any; }[]
}

const routes: RoutesType = {
    public: [
        { path: '/login', element: LoginPage }
    ],
    private: [
        { path: '/', element: HomePage },
        { path: '/setting', element: HomePage }
    ]
}

export default routes;