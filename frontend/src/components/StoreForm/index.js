import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StoreForm = () => {
    const sessionUser = useSelector(state => state.session.user);

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [desc, setDesc] = useState('');

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    return (
        <>
        
        </>
    )
}

export default StoreForm;
