import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Filter from "../../components/Filter";
import filterSideProducts from "../../store-data/FilterSideProducts";
import ProductsContainer from "../../components/ProductsContainer";
import { products } from "../../store-data/Allproduct";

const Grocery = () => {
  const filteredProducts = products.filter((product) => {
    return (product.title === "Groceries")
  })
  const groceryDesc = () => {
    return (
      <div className='mb-10'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim, velit et luctus interdum, est quam scelerisque tellus, eget luctus mi diam vitae erat. Praesent porttitor lacus vitae dictum posuere. Suspendisse elementum metus ac dolor tincidunt, eu imperdiet nisi dictum.</p>
      </div>
    )
  }
  return (
    <>
      <Header background={"#FFFFFF"} groceryColor={"#8BC34A"} />
      <div className="bg-content-background">
        <div className="flex max-w-[1260px] m-auto">
          <Filter products={filterSideProducts} />
          <div>
            <ProductsContainer heading={"Groceries"} products={filteredProducts} desc={groceryDesc()} />
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Grocery;
