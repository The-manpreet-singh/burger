import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

export const Layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, BackDrop</div>
            <main className={classes.Content}>{props.children}</main>
        </Aux>
    )
}
