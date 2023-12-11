import React, { useState } from "react";
import PropTypes from "prop-types";
// import { Redirect } from "react-router-dom";
import Input from "../Inputs/inputs.jsx";
import Register from "../Register/Register.jsx";

const Login = (props) => {
  const { isRegistered, setIsRegistered } = props;

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleChange = (name, val) => {
    setInputValue((prevState) => ({ ...prevState, [name]: val }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const isAuthenticated = true;

    if (isAuthenticated) {
      setLoggedIn(true);
    }
  };

  // Si l'utilisateur est connecté, rediriger vers la page d'accueil
  // if (isLoggedIn) {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      {isRegistered ? (
        <Register setIsRegistered={setIsRegistered} />
      ) : (
        <>
          <form onSubmit={handleLogin}>
            <Input
              label="Email"
              type="text"
              name="email"
              className="input"
              value={inputValue.email}
              onChange={(val) => handleChange("email", val)}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              className="input"
              value={inputValue.password}
              onChange={(val) => handleChange("password", val)}
            />
            <button type="submit">Connexion</button>
          </form>
          <button onClick={() => setIsRegistered(true)}>
            Pas encore membre ? Inscrivez-vous ici !
          </button>
        </>
      )}
    </>
  );
};

Login.propTypes = {
  isRegistered: PropTypes.bool,
  setIsRegistered: PropTypes.func,
};

export default Login;
