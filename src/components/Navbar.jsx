import './style.css'
import { Link } from "react-router-dom";



export const Navbar =()=>{
    
    
    return( 
  <div className="maindiv">
    <ul>
        <li><Link to={'/'}>NAVBAR</Link></li>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/product'}>ProductListing</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/signup'}>SignUP</Link></li>
   
    
    </ul>       
         
  </div>
    )
}