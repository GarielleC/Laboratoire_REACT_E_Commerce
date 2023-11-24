import Input from '../Inputs/inputs.jsx';
import { useState } from "react";
import PropTypes from "prop-types";
import Register from '../Register/Register.jsx'


const Login = (props) => {
    const { setIsRegistered } = props;
  
    const [inputValue, setInputValue] = useState({
      email: '',
      password: ''
    });
  
    console.log(inputValue);
  
    const handleChange = (name, val) => {
      setInputValue((prevState) => ({ ...prevState, [name]: val }));
    };
  
    return (
      <>
        <form>
          <Input label="Email" type="text" name="email" className="input" value={inputValue.email} onChange={(val) => handleChange("email", val)} />
          <Input label="Password" type="password" name="password" className="input" value={inputValue.password} onChange={(val) => handleChange("password", val)} />
          <button type="submit">Login</button>
        </form>
        <button onClick={setIsRegistered}>Pas encore membre ? Inscrivez-vous ici !</button>
      </>
    );
  };
  
  Login.propTypes = {
    setIsRegistered: PropTypes.func,
  };
  
  export default Login;