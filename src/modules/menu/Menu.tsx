import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'
import { LoginButton } from '@/modules/authentication';
import { getUser } from '@/modules/authentication';
import { User } from '@/modules/client';

const Menu = () => {
  const user: User = useSelector(getUser);

  return <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}/>
      {user && user.username}
      <LoginButton />
    </Toolbar>
  </AppBar>
};

export default Menu;
