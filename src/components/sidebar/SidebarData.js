import HomeIcon from '@material-ui/icons/Home'
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';

const SidebarData = [
    {
        title: 'All Tournaments',
        icon: <HomeIcon />,
        link: '/tournaments/all',
    },
    {
        title: 'Your Tournaments',
        icon: <AccountTreeIcon />,
        link: '/tournaments/manage',
    },
    {
        title: 'Create Tournament',
        icon: <GroupIcon />,
        link: '/tournaments/create',
    },
    {
        title: 'Account',
        icon: <AccountCircleIcon />,
        link: '/account',
    },
]

export default SidebarData

