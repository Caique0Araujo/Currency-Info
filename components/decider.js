import React from 'react';
import { useContext } from 'react';
import Login from '../screens/LoginScreen';
import Tabs from '../navigation/tabs';
import Context from '../context/context';

const Decider = () => {
    const [ authenticated ] = useContext(Context);
    if (!authenticated?.email)
        return <Login />;
    else
        return <Tabs />;
};

export default Decider;