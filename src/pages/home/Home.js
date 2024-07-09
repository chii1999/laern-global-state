import React, { useEffect, useState } from "react";
import { API_URL } from "../../api";
import ProductList from "../product/ProductList";
import ProductLoading from "../../components/ProductLoading";
import { useDispatch } from "react-redux";
import { addProductList } from "../../redux/reducers/productReducer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true)
    await fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false)
        dispatch(addProductList(json))
        // console.log(json) 
      });
  };
  
  return (
    <div className="p-5">
      <h3 className="my-5">All Products</h3>
      {isLoading ? <ProductLoading /> : <ProductList /> }
    </div>
  );
}
