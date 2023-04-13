import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Chat from "./chat";
import Login from "./login";
import Register from "./registration";


const ReactRouter = () => {

    const router = createBrowserRouter([
      
        {
            path: "/registration",
            element: <Register/>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
          path: "/chat",
          element: <Chat/>,
        },
      ]);
      

    return <RouterProvider router={router} />
}

export default ReactRouter;