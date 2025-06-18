import React from "react";
import ProductCard from "./components/ProductCard";
import { mockProducts } from "@/types/mocks";
const products = mockProducts;
const ProductsPage = () => {
  return (
    <div>
      <div>Product Page</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
         products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))
      }
      </div>

    </div>
  );
};

export default ProductsPage;
