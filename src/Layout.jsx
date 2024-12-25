import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import Content from "./Content";
import Details from "./Details";

const Layout = () => {
    return (
        <div className="relative w-full h-full">
            <NavBar />
            <Content />
            <Details />
            <Outlet />
        </div>
    );
};

export default Layout;
