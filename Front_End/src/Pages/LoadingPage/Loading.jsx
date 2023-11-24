import {useState} from 'react';
import Register from '../../components/Compte/Register/Register.jsx'
import Login from '../../components/Compte/Login/Login.jsx';

const LoadingPage = () => {

    const [isRegistered, setIsRegistered] = useState(false);


    const handleFormDisplay = () => {
        console.log('test');
        setIsRegistered(!isRegistered)
    }

    return (
        <>
            {isRegistered ? <Login setIsRegistered={handleFormDisplay}/> : <Register setIsRegistered={handleFormDisplay}/>}
        </>
    )
}

export default LoadingPage;