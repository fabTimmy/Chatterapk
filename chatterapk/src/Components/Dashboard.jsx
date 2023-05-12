import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';
import AuthDetails from "./AuthDetails";
import Nav from './Nav';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    if(loading) {
        return <h1>Loading...</h1>
    }
  return (
    <>
    <div>Welcome to your Dashboard{user.displayName}</div>
    <AuthDetails/>
    <Nav/>
    </>
  )
}

export default Dashboard