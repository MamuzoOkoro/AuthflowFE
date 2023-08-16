import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/auth/Register"
import SignIn from "../pages/auth/SignIn"
import ErrorScreen from "../error/error2/Error"
import Layout from "../components/common/Layout"
import Homescreen from "../pages/screen/home/Homescreen"

export const mainRoute = createBrowserRouter([
    {
        path: "register",
        element: <Register/>
    },
    {
        path: "/sign-in",
        element: <SignIn/>
    },
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Homescreen/>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorScreen/>
    },
])