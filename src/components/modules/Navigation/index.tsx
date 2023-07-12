import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Link,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const pages = [
  { id: 1, name: 'Categories', path: 'categories/:categoryName' },
  { id: 2, name: 'Add recipes', path: 'add' },
  { id: 3, name: 'My recipes', path: 'my' },
  { id: 4, name: 'Favorites', path: 'favorite' },
  { id: 5, name: 'Shopping list', path: 'shopping-list' },
];

export const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(!isDrawerOpen);
  };

  const navigationList = () => {
    return (
      <Box
        sx={{ width: 250 }}
        role='presentation'
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          {pages.map(({ id, name, path }) => (
            <ListItem key={id}>
              <Link component={RouterLink} to={path} textAlign='center'>
                {name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <>
      {/* small */}
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size='large'
          aria-label='open mobile menu'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={toggleDrawer}
          color='inherit'
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor='right' open={isDrawerOpen} onClose={toggleDrawer}>
          <IconButton
            size='large'
            onClick={toggleDrawer}
            sx={{
              alignSelf: 'end',
              marginRight: '16px',
              width: '48px',
            }}
          >
            <CloseIcon />
          </IconButton>
          {navigationList()}
        </Drawer>
      </Box>
      {/* large */}
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            component={RouterLink}
            to={page.path}
            key={page.id}
            sx={{ my: 2, display: 'block' }}
          >
            {page.name}
          </Button>
        ))}
      </Box>
    </>
  );
};
