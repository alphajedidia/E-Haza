import { RouteObject } from "react-router-dom";
import LoginLayout from "../components/layout/login.layout";
import SignUpLayout from "../components/layout/signUp.layout";



export const publicRoutes: RouteObject[] = [

    {
        path:"auth/*",
        children:[
            {
                path:"login/*",
                element: <LoginLayout/>,
            },
            {
                path:"signup/*",
                element: <SignUpLayout/>
            },
   
        ]

    },
]