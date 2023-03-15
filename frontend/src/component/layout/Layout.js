import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <>
          <Sidebar />
        </>
        {children}
      </div>
    </>
  );
}

export default Layout;
