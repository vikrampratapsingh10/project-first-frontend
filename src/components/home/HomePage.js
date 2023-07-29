import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function HomePage(){
    return <>
     <div>
      <div>
     <Navbar/>
      <Outlet/>
     </div>
     </div>
    </>
}

export default HomePage;