import NavBar from "./partials/NavBar"
import Footer from "./partials/Footer";
import RoutePath from "./RoutePath";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; 
function App() {
    const location = useLocation();
    const isDashboard = location.pathname.startsWith("/dashboard");
  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={3000} />
      {isDashboard ? "" : <NavBar />}
      <RoutePath />
      {isDashboard ? "" : <Footer />}
    </div>
  );
}

export default App;
