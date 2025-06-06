import NavBar from "./partials/NavBar"
import Footer from "./partials/Footer";
import RoutePath from "./RoutePath";
import { useLocation } from "react-router-dom";

function App() {
    const location = useLocation();
    const isDashboard = location.pathname.startsWith("/dashboard");
  return (
    <div className="App">
      {isDashboard ? "" : <NavBar />}
      <RoutePath />
      {isDashboard ? "" : <Footer />}
    </div>
  );
}

export default App;
