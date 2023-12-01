import { useState } from "react"
import SignIn from '../../Pages/LogIn/SignIn'
import SignUp from '../../Pages/LogIn/SignUp'


const Login = () => {
    const [currentForm, setCurrentForm] = useState('register');
  
    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }
  
    return (
      <>
        {currentForm === 'register' ? (
          <SignUp onFormSwitch={toggleForm} />
        ) : (
          <SignIn onFormSwitch={toggleForm} />
        )}
      </>
    );
  }
  
  export default Login