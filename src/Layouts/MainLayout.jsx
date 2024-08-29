import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <Navbar />
            </div>
            <div className="flex-1 mx-2 md:mx-6">
                <Outlet />
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;