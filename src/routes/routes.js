import configs from '../configs';

// Components
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Project from '../pages/Project';

const publicRoutes = [
    {
        path: configs.routes.home,
        component: Home,
    },
    {
        path: configs.routes.dashboard,
        component: Dashboard,
    },
    {
        path: configs.routes.project,
        component: Project,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
