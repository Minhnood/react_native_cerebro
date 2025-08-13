import React from "react";
import Header from "../components/Header";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";
const HomeMe = () => {
    return (
        <>
            <Header />
            <ListCategory />
            <ListProduct />
        </>
    );
};

export default HomeMe;