import { createBrowserRouter } from "react-router";


import About from "../pages/About";
import Projects from "../pages/Projects";

import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Home from "../components/Home";
import Skill from "../pages/Skill";
import Homearlayout from "../layouts/Homearlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homearlayout></Homearlayout>,
    children:[
        {
                index: true,
                Component: Home,
                
            },
   {
    path: "/about",
    element: <About></About>,
  },
   {
    path: "/projects",
    element: <Projects></Projects>,
  },
   {
    path: "/skill",
    element: <Skill></Skill>,
  },
   {
    path: "/contact",
    element: <Contact></Contact>,
  },

    ],
  },
   




    {
    path: "/*",
    element: <Error></Error>,
  },
]);

export default router;