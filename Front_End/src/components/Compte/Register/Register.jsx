
import {useState} from "react";
import PropTypes from "prop-types";
import Input from '../Inputs/inputs.jsx';

const Register = (props) => {

    const { setIsRegistered } = props;
    console.log(setIsRegistered);

    const [inputValue, setInputValue] = useState({
        email: '',
        password: ''
    });
    console.log(inputValue)
    const handleChange = (name, val) => {
        setInputValue((prevState) => ({...prevState, [name]: val}))
    }

    return (
        <>
            <form>
           
                <label htmlFor="CIVILISATION">Choisissez votre civilisation :</label>
                    <input type="text" id="civilisation" name="civilisation" list="options" />
                    <datalist id="options">
                        <option value="Madame">Madame</option>
                        <option value="Monsieur">Monsieur</option>
                        <option value="Autre">Autre</option>
                    </datalist>

                <Input label="NOM" type="text" name="name" className="input" value={inputValue.name} onChange={(val) => handleChange("name", val)} />

                <Input label="PRÉNOM" type="text" name="prenom" className="input" value={inputValue.prenom} onChange={(val) => handleChange("prenom", val)} />

                <Input label="DATE DE NAISSANCE" type="date" name="date" className="input" value={inputValue.date} onChange={(val) => handleChange("date", val)} />

                <Input label="CODE POSTAL" type="text" name="name" className="input" value={inputValue.name} onChange={(val) => handleChange("name", val)} />

                <Input label="PAYS" type="text" name="pays" className="input" value={inputValue.pays} onChange={(val) => handleChange("pays", val)} />

                <Input label="VILLE" type="text" name="ville" className="input" value={inputValue.ville} onChange={(val) => handleChange("ville", val)} />

                <Input label="EMAIL" type="" name="email" className="input" value={inputValue.email} onChange={(val) => handleChange("email", val)} />

                <Input label="CONFIRMATION DE VOTRE EMAIL" type="email" name="email" className="input" value={inputValue.email} onChange={(val) => handleChange("email", val)} />

                <Input label="MOT DE PASSE" type="password" name="password" className="input" value={inputValue.password} onChange={(val) => handleChange("password", val)} />

                <Input label="CONFIRMATION DE VOTRE MOT DE PASSE" type="password" name="password" className="input" value={inputValue.password} onChange={(val) => handleChange("password", val)} />

                <button type="submit">Enregistrer</button>
                
            </form>
            <button onClick={setIsRegistered}>Déjà membre ? Connectez-vous ici !</button>
        </>
    )
}

Register.propTypes = {
    setIsRegistered : PropTypes.func,
}

export default Register;