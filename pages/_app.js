import { ContextProvider } from "../contexts/ContextProvider";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      {/* set active menu */}
      <div className="flex">
        <div className="sidebar w-80 fixed">
          <Sidebar />
        </div>

        <div className="min-h-screen w-full ml-80">
          <div className="w-full">
            <Navbar />
          </div>

          <div>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
};

export default MyApp;
