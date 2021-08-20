import "./styles/main.scss";
import { Home } from "./pages/home/Home";
import AuthorizedRoutes from "./routes/AuthorizedRoutes";

function App() {
  return <AuthorizedRoutes />;
}

export default App;
