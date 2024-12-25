import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import Content from "./Content";
import Details from "./Details";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Content />
            <Details />
            <Outlet />
        </>
    );
};

export default Layout;
