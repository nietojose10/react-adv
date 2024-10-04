import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
    //**We add a slash "/" to the beginning of path and at the end a wildcard /*  to set that /lazyload is the base of the route and all that comes after is
    //*gonna be stacked
    {   
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'Lazy Layout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
];