import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useForm } from 'react-hook-form';
import { Button, DialogActions, DialogContent, TextField } from '@mui/material';

export interface LoginDialogProps {
  open: boolean;
  onLogin: (username: string, password: string) => void;
  onClose: () => void;
}

interface FormData {
  username: string,
  password: string,
}

const errorMessages: {[key: string]: string} = {
  required: 'Value is required',
  minLength: 'Min Length is 3',
  maxLength: 'Max Length is 20',
};

const LoginDialog = (props: LoginDialogProps) => {
  const { onLogin, onClose, open } = props;
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const clickLogin = handleSubmit((data: FormData) => {
    onLogin(data.username, data.password);
  });

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Login</DialogTitle>

      <form onSubmit={clickLogin}>
        <DialogContent>
            <TextField
              label="Username"
              type="text"
              variant="standard"
              error={!!errors.username}
              helperText={errors?.username?.message}
              autoFocus
              fullWidth
              {...register('username', {
                required: { value: true, message: errorMessages.required },
                minLength: { value: 3, message: errorMessages.minLength },
                maxLength: { value: 20, message: errorMessages.maxLength },
              })}
            />
            <TextField
              label="Password"
              type="password"
              variant="standard"
              error={!!errors.password}
              helperText={errors?.password?.message}
              fullWidth
              {...register('password', { required: { value: true, message: errorMessages.required } })}
            />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" onClick={clickLogin}>Login</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default LoginDialog;
