// import React, { useEffect, useState } from 'react';
// import Navber from "../components/Navber";

// // import About from "../pages/About";
// // import Projects from "../pages/Projects";

// // import Contact from "../pages/Contact";
// import Error from "../pages/Error";
// import Home from "../components/Home";
// import About from '../pages/About';
// import Projects from '../pages/Projects';
// import Skill from '../pages/Skill';
// import Contact from '../pages/Contact';
// // import Skill from '../pages/Skill';

// const Homearlayout = () => {
//      const [route, setRoute] = useState(window.location.pathname);

//   // Handle manual routing
//   useEffect(() => {
//     const handleRouteChange = () => {
//       setRoute(window.location.pathname);
//     };

//     window.addEventListener("popstate", handleRouteChange);

//     return () => {
//       window.removeEventListener("popstate", handleRouteChange);
//     };
//   }, []);

//   // Render component based on the route
//   const renderPage = () => {
//     if (route === "/" || route === "/home") return <Home />;
//     if (route === "/about") return <About />;
//     if (route === "/projects") return <Projects />;
//    if (route === "/skill") return <Skill />;
  
//     if (route === "/contact") return <Contact />;
//     return <Error />;
//   };

//   return (
//     <div className="max-w-7xl mx-auto">
//       <Navber />
//       <div className="min-h-screen">
//         {renderPage()}
//           {/* <Banner></Banner> */}
//           {/* <Outlet></Outlet> */}
//       </div>
    
//     </div>
//   );
// };

// export default Homearlayout;




import React from 'react';

import Navber from "../components/Navber";
import { Outlet } from 'react-router';
const Homearlayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default Homearlayout;