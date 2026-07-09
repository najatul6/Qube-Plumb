import TopBar from "@/components/ui/common/TopBar";
import Navbar from "@/components/ui/navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div>
            <header>
                <TopBar/>
                <Navbar/>
            </header>
            {/* Main content goes here */}
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </div>
    );
};

export default MainLayout;