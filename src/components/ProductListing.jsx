import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setProduct} from '../Redux/actions/action'
import { Navbar } from './Navbar';
import Product from './Product'

function ProductListing() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
    

  return (
    <>
      <Navbar />
    <div className="ui grid container">
      <Product />
    </div>
    </>
  )
}

export default ProductListing