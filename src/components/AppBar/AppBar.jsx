import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import ColorModeSelect from '../Shared-theme/ColorModeSelect';
import { Stack } from '@mui/material';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Stack
      direction="row"
      useFlexGap
      sx={{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
      >
          
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {!isLoggedIn && <ColorModeSelect sx={{ display: 'block' }} />}
    </Stack>
  );
};
