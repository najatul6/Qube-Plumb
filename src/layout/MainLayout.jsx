import TopBar from "@/components/ui/common/TopBar";
import Navbar from "@/components/ui/navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <header>
                <TopBar/>
                <Navbar/>
            </header>
            {/* Main content goes here */}
            <main></main>
            <footer></footer>
        </div>
    );
};

export default MainLayout;