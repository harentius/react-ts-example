import Button from '@mui/material/Button';
import LoginDialog from './LoginDialog';
import { useState } from 'react';
import { apiClient } from '@/modules/client';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { set } from './userStoreSlice';
import { AppDispatch } from '@/app/store';

const LoginButton = () => {
  const [isLoginDialogOpened, setIsLoginDialogOpened] = useState<boolean>(false);
  const openLoginDialog = () => setIsLoginDialogOpened(true);
  const closeLoginDialog = () => setIsLoginDialogOpened(false);

  const dispatch = useDispatch<AppDispatch>();
  const login = async (username: string, password: string) => {

    try {
      const user = await apiClient.login(username, password);
      dispatch(set(user))
      closeLoginDialog();
    } catch (e) {
      // @ts-ignore
      toast.error(e.message);
    }
  };

  return <>
    <Button color="inherit" onClick={openLoginDialog}>Login</Button>
    <LoginDialog open={isLoginDialogOpened} onLogin={login} onClose={closeLoginDialog}/>
  </>
};

export default LoginButton;
