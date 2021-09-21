import "./styles/main.scss";
import React, { useContext } from "react";
import AuthorizedRoutes from "./routes/AuthorizedRoutes";
import UnAuthorizedRoutes from "./routes/UnAuthorizedRoutes";
import { AuthContext } from "./context/authContext/AuthContext";

const App = () => {
  const user = useContext(AuthContext);
  if (user.user) {
    return <AuthorizedRoutes />;
  } else {
    return <UnAuthorizedRoutes />;
  }
};

export default App;
