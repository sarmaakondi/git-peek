import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import NotFoundPage from "./NotFoundPage";

import "./App.css";

const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
            },
        ],
    },
];

const router = createBrowserRouter(routes);

function App() {
    return (
        <div className="flex h-screen">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
