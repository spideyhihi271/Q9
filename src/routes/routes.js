import configs from '../configs';

// Layout

// Components
import History from '../pages/History';
import Home from '../pages/Home';
import Library from '../pages/Library';
import Playlist from '../pages/Playlist';
import Profile from '../pages/Profile';
import Search from '../pages/Search';

const publicRoutes = [
    {
        path: configs.routes.home,
        component: Home,
    },
    {
        path: configs.routes.library,
        component: Library,
    },
    {
        path: configs.routes.history,
        component: History,
    },
    {
        path: configs.routes.playList + '/:id',
        component: Playlist,
    },
    {
        path: configs.routes.profile + '/:id',
        component: Profile,
    },
    {
        path: configs.routes.search + '/:keyword?',
        component: Search,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
