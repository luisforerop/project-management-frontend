// import { NavLink } from "react-router-dom";
import MyRoutes from "./components/routes/router";
import { UserProvider } from "./components/stateManagement/UserContext";
import ViewTest from "./components/usersViews/viewTest";

function App() {
  return (
    <>
      <UserProvider>
      <div>
        <MyRoutes/>
        <ViewTest/>
      </div>
      </UserProvider>
      Todo fuera del app
    </>
      
  );
}

export default App;
