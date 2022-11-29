import React from 'react';
import {Topbar, Sidebar} from './partials';
import './portal-layout.module.css';

const PortalLayout = ({children}: any) => {
    return (
        <>
            <Topbar/>
            <Sidebar/>
            {children}
        </>
    );
}

export default PortalLayout