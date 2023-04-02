import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const ButtonGreenLg = ({children, icon, onClick}: any) => {
    return (
        <button className='btn-green-lg'>
            {icon ? <FontAwesomeIcon icon={icon}/> : ''}
            {children}
        </button>
    );
};

export const ButtonGreenMd = ({children, icon}: any) => {
    return (
        <button className='btn-green-md'>
            {icon ? <FontAwesomeIcon icon={icon}/> : ''}
            {children}
        </button>
    );
};

export const ButtonGreenSm = ({children, icon, onClick}: any) => {
    return (
        <button className='btn-green-sm' onClick={onClick}>
            {icon ? <FontAwesomeIcon icon={icon}/> : ''}
            {children}
        </button>
    );
};

export const ButtonDarkLg = ({children, icon}: any) => {
    return (
        <button className='btn-dark-lg'>
            {icon ? <FontAwesomeIcon icon={icon}/> : ''}
            {children}
        </button>
    );
};

export const ButtonDarkMd = ({children, icon}: any) => {
    return (
        <button className='btn-dark-md'>
            {icon ? <FontAwesomeIcon icon={icon}/> : ''}
            {children}
        </button>
    );
};

export const ButtonDarkSm = ({children, icon}: any) => {
    return (
        <button className='btn-dark-sm'>
            {icon ? <FontAwesomeIcon icon={icon}/> : ''}
            {children}
        </button>
    );
};