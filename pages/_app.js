import { ContextProvider } from "../contexts/ContextProvider";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      {/* set active menu */}
      <div className="w-full flex">
        {<Sidebar />}
        <div className="w-full bg-woman-in-black bg-contain bg-right bg-no-repeat flex flex-col z-10 overscroll-none">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ContextProvider>
  );
};

export default MyApp;
