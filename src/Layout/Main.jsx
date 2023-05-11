import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
