import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import Button from '@material-ui/core/Button';
import netlifyIdentity from 'netlify-identity-widget';

import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import Typography from '@material-ui/core/Typography';
import ProfileMini from './ProfileMini';


const NavBar = props => {
  const {
    TabsProps,
    classes,
    profile,
    tabState,
    cartTotal,
    toggleMenu,
    toggleCart,
    allViews,

    onSignIn,
    onSignOut,
    authenticated,
    user
  } = props;

  return (
    <AppBar variant="fixed" >
      <Toolbar >
        <IconButton edge="start" className={classes.whiteBtn} aria-label="menu" onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>

        <ProfileMini profile={profile} profileVisible={tabState === 0} isNavBar />

        {/*<Button onClick={onSignIn}>*/}
          {/*Login*/}
        {/*</Button>*/}

        {/*<Button onClick={onSignOut}>*/}
          {/*Logout*/}
        {/*</Button>*/}

        {/*<Typography>*/}
          {/*{authenticated ? "logged in" : "logged out"}*/}
        {/*</Typography>*/}


        <Tabs
          {...TabsProps}
        >
          {allViews.map((view) => (
            <Tab label={view.shortName} key={'tab-'+view.shortName}/>
          ))}
        </Tabs>
        <IconButton edge="end" className={classes.cartBtn} aria-label="cart" onClick={toggleCart}>
          <Badge badgeContent={cartTotal} color="secondary">
            <ShoppingCartIcon/>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;