import "./App.css";
import React, { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Login from "./components/login/Login";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home/Home'

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            name: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {user ? (
          <>
            <Header />
            <div className="app-body">
              <SideBar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route exact path="/" component={Home} />
                  
                
              </Switch>
            </div>
          </>
        ) : (
          <Login />
        )}
      </Router>
    </div>
  );
}

export default App;
