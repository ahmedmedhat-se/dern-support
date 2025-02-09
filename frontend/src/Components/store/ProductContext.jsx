import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const apiRequest = await axios.get("https://fakestoreapi.com/products");
            setProducts(apiRequest.data);
        } catch (error) {
            console.error(`Error Occured When Fetching Data: ${error}`)
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
};