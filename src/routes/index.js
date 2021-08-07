import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom'
// import Header from '../components/header';
import RouteArray from './_base';

const Routes = () => {
    return (
        <Switch>
            {RouteArray.map((item, index) => {
                const { route, title, Component, exact = true } = item || {};
                return <Route key={index} path={route} exact={exact}>
                    <>
                        <Helmet title={title} />
                        <Suspense fallback={() => <div>Loading...</div>}>
                            <Component />
                        </Suspense>
                    </>
                </Route>
            })}
        </Switch>
    )
}

export default Routes
