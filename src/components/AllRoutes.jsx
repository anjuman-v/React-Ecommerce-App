import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import ProductDetails from "./ProductDetails"
import ProductListing from "./ProductListing"
// import SignupCard from "./Signup"




export const AllRoutes = () => {
    return(
        <>
        
            <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/product" element={<ProductListing />} />
               <Route path="/product/:productId" element={<ProductDetails />} />
               {/* <Route path="/signup" element={<SignupCard />} /> */}
               <Route path="/login" element={<Login />} />
                
            </Routes>
        </>
    )
}