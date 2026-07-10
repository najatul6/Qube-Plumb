import TopBar from "@/components/ui/common/TopBar";
import Navbar from "@/components/ui/navbar/Navbar";
import { Outlet } from "react-router";

const ErrorLayout = () => {
    return (
        <div>
            <header>
                <TopBar/>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                
            </footer>
        </div>
    );
};

export default ErrorLayout;