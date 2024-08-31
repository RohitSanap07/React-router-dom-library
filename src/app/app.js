import Navbar from "../navbar/navbar";
import img1 from "./mobile-app-development.png";
const imgstyle = {
    borderRadius: "5px",
    height : "500px",
    width : "800px",
    margin : "10px",
    marginLeft:"450px"
}
function Appdev(){
    return <div>
        <Navbar/>
        <center><h1>App Development</h1></center>
        <img src={img1} style={imgstyle}/>
    </div>
}
export default Appdev