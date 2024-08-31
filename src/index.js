import { createRoot } from "react-dom/client";
import Navbar from "./navbar/navbar";
import Appdev from "./app/app";
import Fullstack from "./full/full";
import img from "./homepage.png";
const root = createRoot(document.getElementById("root"))
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const imgstyle = {
    borderRadius: "5px",
    marginLeft:"340px",
    height : "600px",
    width : "1000px"
}
function Home(){
    return <div> 
        <Navbar/>
        <center><h1>Unlock Your Future with Cutting-Edge Tech Courses</h1></center>
        <img src={img} style={imgstyle}/>
    </div>
}
const router=createBrowserRouter([{
    path:"/",
    element: <Home/>},
   { path:"/app",
    element: <Appdev/>
},{
    path :"/full",
    element :<Fullstack/>
}

]
)
root.render(<RouterProvider router={router}/>)