import SignIn from "../signIn/SignIn";
import Login from "../login/Login";
import React, {useState} from "react";

const Toogle = ({userExist, toogle}) => (
    <>
    <p>
        {userExist ? '¿No tienes cuenta?' : '¿Tienes cuenta?'}
      </p> <br></br>
      <p onClick={toogle}>
        {userExist  ? 'Regístrate': 'Inicia sesión'}
      </p>
    </>
)

const Home = () => {
  const [userExist, setUser] = useState(false)
  const toogle = () => {
    setUser(!userExist)
  }
  return (

    <div>
      {userExist ? <Login></Login> : <SignIn></SignIn>}
      <Toogle userExist={userExist} toogle={toogle} />
    </div>
      
  );
}

export default Home;