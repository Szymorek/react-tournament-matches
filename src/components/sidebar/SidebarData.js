import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import ReorderIcon from '@material-ui/icons/Reorder';

const SidebarData = [
    {
        title: 'Browser',
        icon: <AccountTreeIcon />,
        link: '/tournaments/all',
    },
    {
        title: 'Manager',
        icon: <ReorderIcon />,
        link: '/tournaments/manage',
    },
    {
        title: 'Matches',
        icon: <VideogameAssetIcon />,
        link: '/matches',
    },
    {
        title: 'Log out',
        icon: <AccountCircleIcon />,
        link: '/logout',
    },
]

export default SidebarData

