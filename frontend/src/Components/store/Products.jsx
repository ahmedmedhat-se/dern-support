import { useContext, useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

function Products() {
  const { products } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter out invalid products
  const validProducts = products.filter(product => product?.title && product?.category);

  // Filter products based on search term and selected category
  const filteredProducts = validProducts.filter(product =>
    (selectedCategory === "All" || product.category === selectedCategory) &&
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const productsPerPage = 4;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Extract unique categories
  const categories = ["All", ...new Set(validProducts.map(product => product.category))];

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container text-light products-container p-5 mt-5">
      <h3 className="mt-4 text-dark">Products</h3>

      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          placeholder="Search products..."
          className="form-control w-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-select w-25"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      
      {/* Products Grid */}
      <div className="row">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div className="col-md-3 mb-5" key={product.id}>
              <div className="card p-3 h-100">
                <div className="card-header">
                  <img src={product.image} alt={product.title} className="card-img-top" />
                </div>
                <div className="card-body">
                  <h5 className="card-name">{product.title}</h5>
                  <p className="text-center">{product.category}</p>
                  <p>Price: {product.price}<span className="dollar">$</span></p>
                </div>
                <div className="card-footer">
                  <Link to="/cart" className="btn btn-primary w-100 d-block">
                    <FontAwesomeIcon icon={faCartShopping} /> Cart
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No products found.</p>
          </div>
        )}
      </div>
      
      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-primary mx-2"
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="align-self-center text-dark">Page {currentPage} of {totalPages}</span>
        <button
          className="btn btn-primary mx-2"
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;