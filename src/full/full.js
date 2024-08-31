import Navbar from "../navbar/navbar";
import img from "./full-stack-web-developer.png"
const imgstyle = {
    borderRadius: "5px",
    height : "500px",
    width : "800px",
    marginLeft:"450px"
}
function Fullstack(){

    return <div>
        <Navbar/>
        <center><h1>Full Stack Development</h1></center>
        <img src={img} style={imgstyle}/>
    </div>
}
export default Fullstack