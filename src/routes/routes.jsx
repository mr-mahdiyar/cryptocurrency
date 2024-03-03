import { createBrowserRouter } from "react-router-dom";
import { App } from "../components/";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    }
])
export default routes;