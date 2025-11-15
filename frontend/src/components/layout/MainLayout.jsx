import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen bg-gray-100 overflow-hidden">
      <div className="hidden md:block md:w-64 md:border-r md:border-border">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <MobileNav className="flex-shrink-0" />
        <div className="flex-1 overflow-y-scroll bg-gray-100">
          <main>
            {children}
          </main>
        </div>
        <Footer className="flex-shrink-0" />
      </div>
    </div>
  );
};

export default MainLayout;
