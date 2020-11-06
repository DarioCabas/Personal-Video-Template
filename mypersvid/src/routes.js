import React, {
    Suspense,
    Fragment,
    lazy
} from 'react';
import {
    Switch,
    Redirect,
    Route,
    BrowserRouter
} from 'react-router-dom';

import LoadingScreen from './Components/LoadingScreen';

export const renderRoutes = (routes = []) => (
    <Suspense fallback={<LoadingScreen />}>
        <BrowserRouter>
            <Switch>
                {routes.map((route, index) => {
                    const Guard = route.guard || Fragment;
                    const Layout = route.layout || Fragment;
                    const Component = route.component;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            render={(props) => (
                                <Guard>
                                    <Layout>
                                        {route.routes
                                            ? renderRoutes(route.routes)
                                            : <Component {...props} />}
                                    </Layout>
                                </Guard>
                            )}
                        />
                    );
                })}
            </Switch>
        </BrowserRouter>
    </Suspense>
);

const routes = [
    {
        exact: true,
        path: '/404',
        component: lazy(() => import('./views/errors/NotFoundView'))
      },
    {
        exact: true,
        path: '/video/:URLVideo/:bg',
        component: lazy(() => import('./views/VideoTemplate'))
    },
    {
        exact: true,
        path: '/',
        component: lazy(() => import('./Send'))
      },
    {
        component: () => <Redirect to="/404" />
      }

];

export default routes;


