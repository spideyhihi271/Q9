import configs from '../configs';

// Components
import Home from '../pages/Home';
import Library from '../pages/Library';
import History from '../pages/History';
import Playlist from '../pages/Playlist';
import Profile from '../pages/Profile';
import Watch from '../pages/Watch';

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
        path: configs.routes.playList,
        component: Playlist,
    },
    {
        path: configs.routes.profile,
        component: Profile,
    },
    {
        path: configs.routes.watch,
        component: Watch,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
