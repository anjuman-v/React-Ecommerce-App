import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from "react-router-dom";
import { Navbar } from './Navbar'

export default function Home(){
  const { isAuth } = useContext(AuthContext) 
  
  if(!isAuth){
    return<Navigate to={"/login"} />
}
    return(
       <div>
           <Navbar />

           <div>

           </div>
        </div>
    )
}