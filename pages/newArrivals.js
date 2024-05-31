import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Product from "../components/Products";

const NewArrivals = () => {
    return (
      <Layout>
        <div className="pt-32">
            <h1>New Arrivals</h1>
            <div className="px-8 sm:px-12 md:px-20 lg:px-20 xl:px-20 bg-gradient-to-r from-neutral-700 to-black py-6 gap-8">
            <Product />
            </div>
        </div>
        </Layout>
    );
};

export default NewArrivals;