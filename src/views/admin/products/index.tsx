/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import ProductsTable from "../tables/components/ProductsTable";
import useManufacturers from "@/hooks/useManufacturers";
import useCategories from "@/hooks/useCategories";
import { useEffect } from "react";
import useProducts from "@/hooks/useProducts";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, getProducts } = useProducts();
  const { getManufacturers } = useManufacturers();
  const { getCategories } = useCategories();

  useEffect(() => {
    getProducts();
    getManufacturers();
    getCategories();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8 mt-5">
      <div className="w-full flex justify-between items-center">
        <button className="linear rounded-md bg-brand-500 px-3 py-2 text-xs font-bold text-white transition duration-200 uppercase hover:bg-brand-700 active:bg-brand-600">
          View all orders
        </button>
        <Link
          to={"create"}
          className="linear rounded-md border border-brand-500 text-brand-500 px-3 py-2 text-xs font-bold transition duration-200 uppercase active:border-brand-600 disabled:bg-brand-400 disabled:hover:bg-brand-400"
        >
          create a new product
        </Link>
      </div>

      <ProductsTable tableData={products} />
    </div>
  );
};

export default Products;
