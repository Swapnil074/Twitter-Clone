import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/homeScreen";
import LoginPage from "./Pages/loginScreen";
import Redirect from "./Pages/Redirect";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import store from "./Redux";
import React from "react";
import { setCurrentUser, logoutUser } from "./Redux/Actions/userActions";

import { Provider } from "react-redux";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());

    window.location.href = "/";
  }
}
function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/:token" element={<Redirect />} />

            <Route path="/home" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
