import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';

import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import SliceForm from './components/SliceForm'
import StoreForm from './components/StoreForm'
import Slice from './components/Slices';
import Store from './components/Stores'
import AllCheckIns from './components/AllCheckIns';
import Footer from './components/FooterLinks';

import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/addslice">
            <SliceForm />
          </Route>
          <Route path="/addstore">
            <StoreForm />
          </Route>
          <Route path="/slices">
            <Slice />
          </Route>
          <Route path="/stores">
            <Store />
          </Route>
          <Route path="/checkins">
            <AllCheckIns />
          </Route>
          <Route>
            <h1>PAGE NOT FOUND</h1>
          </Route>
        </Switch>
      )}

      <Footer />
    </>
  );
}

export default App;
