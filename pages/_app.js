import { ContextProvider } from "../contexts/ContextProvider";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
const MyApp = ({ Component, pageProps, session }) => {
  return (
    <SessionProvider session={session}>
      <ContextProvider>
        {/* set active menu */}
        <div className="w-full flex">
          {<Sidebar />}
          <div className="w-full bg-woman-in-black bg-contain bg-right bg-no-repeat flex flex-col z-10 overscroll-none max-h-screen overflow-y-hidden">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </div>
      </ContextProvider>
    </SessionProvider>
  );
};

export default MyApp;
