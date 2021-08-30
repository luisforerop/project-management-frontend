import SignIn from "../signIn/SignIn";
import Login from "../login/Login";
import React, {useState} from "react";

const Toogle = ({userExist, toogle}) => {
  const style = {
    display: 'inline-block',
    marginRight: '5px',    
  }
  return (  
    <>
    <p style={style}>
        {userExist ? '¿No tienes cuenta? ' : '¿Tienes cuenta? '}
      <span onClick={toogle} style={{...style, cursor: 'pointer'}}>
        {userExist  ? 'Regístrate': 'Inicia sesión'}
      </span>
      </p>
    </>
)}

const Home = () => {
  const [userExist, setUser] = useState(false)
  const toogle = () => {
    setUser(!userExist)
  }
  return (

    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexFlow: 'column',

    }}>
      {userExist ? <Login></Login> : <SignIn></SignIn>}
      <Toogle userExist={userExist} toogle={toogle} />
    </div>
      
  );
}

export default Home;