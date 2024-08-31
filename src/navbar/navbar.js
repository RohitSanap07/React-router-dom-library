import { Link } from "react-router-dom";
const stylenav={
    backgroundColor: " #0099ff",
    borderRadius: "0px",
    padding: "20px",
    height : "20px"
  
}
const linkstyle={
    borderRadius: "2px",
    backgroundColor: "white",
    padding: "10px",
    margin: " 5px 10px",
    fontWeight :"bold",
    textDecoration :"none",
    height : "20px"

}

function Navbar() {
  return (
    <nav style={stylenav}>
      <Link to="/" style={linkstyle}>Home</Link>
      <Link to="/app"  style={linkstyle} >App Development</Link>
      <Link to="/full"  style={linkstyle}>Full Stack Development</Link>
    </nav>
  );
}

export default Navbar;