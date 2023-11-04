import { Avatar, Box, Button, Link, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import { asyncUnsetAuthUser } from '../../../../states/authUser/action';

const apiUrl = import.meta.env.VITE_FE_BASE_URL;

function AccountButton() {
  const authUser = useSelector((states) => states.authUser);
  const [isAdmin, setIsAdmin] = useState(authUser?.isAdmin || false);
  // if (authUser?.isAdmin) setIsAdmin(authUser.isAdmin);
  const dispatch = useDispatch();
  const nav = useNavigate();
  // const [authUser, setAuthUser] = useState(globalAuthUser);

  function logout() {
    dispatch(asyncUnsetAuthUser());
    nav('/');
  }

  // useEffect(() => {
  //   setAuthUser(globalAuthUser);
  // }, [globalAuthUser]);

  return (
    <Tooltip
      disableFocusListener
      slotProps={{
        tooltip: {
          sx: {
            p: 2,
            bgcolor: 'background.paper',
            boxShadow: 2,
          },
        },
      }}
      title={
        <Box display="flex" flexDirection="column">
          <Button
            onClick={() => nav('/user/settings')}
            // sx={{ textTransform: 'none', textDecoration: 'none' }}
          >
            <AccountCircleIcon fontSize="small" />
            &nbsp; Profile
          </Button>
          <Button
            sx={{ display: isAdmin ? 'block' : 'none' }}
            onClick={() => {
              nav('/admin/dashboard');
            }}
          >
            <AdminPanelSettingsIcon />
            Admin Page
          </Button>
          <Button>My Order</Button>
          <Button>My Wishlist</Button>
          <Button onClick={() => nav('/user/address')}>
            <HomeIcon />
            My Address
          </Button>
          <Button color="error" onClick={logout}>
            <LogoutIcon fontSize="small" />
            Logout
          </Button>
        </Box>
      }
    >
      <Button
        color="text"
        size="small"
        startIcon={
          <Avatar
            alt={authUser.firstName}
            // src={`${import.meta.env.VITE_API_BASE_URL}/api/users/${
            //   authUser.id
            // }/image`}
          />
        }
        sx={{ textTransform: 'none' }}
      >
        {authUser.firstName}
      </Button>
    </Tooltip>
  );
}

export default AccountButton;
