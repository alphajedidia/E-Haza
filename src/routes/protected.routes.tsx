import { RouteObject } from "react-router-dom";
import { MainLayout } from "../components/layout/main.layout";
import { PostList } from "../pages/posts.page";
import { Conversation } from "../pages/conversation.page";
import { Map } from "../pages/map.page";
import { Notification } from "../pages/notification.page";
import { NextLayout } from "../components/layout/next.layout";
import { PostRoutes } from "./post.routes";
import { Search } from "../pages/search.page";
import { ProfileRoutes } from "./profile.routes";

export const protectedRoutes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                index:true,
                element: <PostList/>
            },
            {
                path:"message/*",
                element: <Conversation/>
            },
            {
                path:"map/*",
                element: <Map/>
            },
            {
                path:"notification/*",
                element: <Notification/>
            },
            {
                path:"search/*",
                element: <Search/>  
            },
        ]
    },
    {
        path:"details/*",
        element:<NextLayout/>,
        children:[
            {
                path:"post/*",
                element: <PostRoutes/>,
            },
            {
                path:"profile/*",
                element: <ProfileRoutes/>
            },
   
        ]
    },
]