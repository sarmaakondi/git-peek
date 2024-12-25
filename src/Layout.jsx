import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import Content from "./Content";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Content />
            <Outlet />
        </>
    );
};

export default Layout;
