import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
