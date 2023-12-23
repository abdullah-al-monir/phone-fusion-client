import Title from "../../Components/Title";
import ProductCard from "../../Components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import ClipLoader from "react-spinners/ClipLoader";
const Products = () => {
  const axiosPublic = useAxios();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosPublic(
      `/phones?search=${search}&brand=${brand}&sortBy=${sortBy}&type=${type}&priceRange=${priceRange}&sortOrder=${sortOrder}`
    ).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [axiosPublic, brand, type, search, sortBy, priceRange, sortOrder]);
  const cardsPerPage = 9;
  const totalSlides = Math.ceil(products.length / cardsPerPage);
  const slides = Array.from({ length: totalSlides }, (_, index) => index);
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePaginationClick = (index) => {
    if (swiper) {
      swiper.slideTo(index);
      setActiveIndex(index);
    }
  };
  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleSearchInputChange = (event) => {
    setSearch(event.target.value);
  };
  const handleTypeChange = (event) => {
    console.log(event.target.value);
    setType(event.target.value);
  };
  const handleBrandChange = (event) => {
    console.log(event.target.value);
    setBrand(event.target.value);
  };
  const handleSelectRange = (event) => {
    const selectedRange = event.target.value;
    setPriceRange(selectedRange);
  };
  const handleSortOrderChange = (event) => {
    const selectedOrder = event.target.value;
    setSortOrder(selectedOrder);
    if (selectedOrder === "asc") {
      setSortBy("price-asc");
    } else if (selectedOrder === "desc") {
      setSortBy("price-desc");
    } else {
      setSortBy("");
    }
  };
  return (
    <div className="my-20">
      <Title
        heading={"Available Phones"}
        subHeading={"Find the perfect fit from our array of products"}
      />

      <div className="mt-5  w-full flex flex-col md:flex-row flex-wrap justify-between gap-5">
        <form onSubmit={handleSearch} action="">
          <label className="text-sm mb-1 block  font-medium">
            Search by Keyword
          </label>
          <div className="flex relative items-center border-slate-800 border-2 rounded-md">
            <input
              className="border-r-0 w-full  px-2 rounded-md py-1  shadow-sm focus:border-slate-800 focus:ring focus:ring-slate-800 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearchInputChange}
            />
            <button
              className="absolute px-2 py-1 right-0 text-white bg-slate-800"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
        <div>
          <div className="">
            <label className="text-sm mb-1 block font-medium">
              Filter by Price Range ($)
            </label>
            <div className="min-w-[200px]">
              <select
                className="block w-full rounded-md px-2 py-1 border-slate-800 border-2 shadow-sm focus:border-slate-800 focus:ring focus:ring-slate-800 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary"
                value={priceRange}
                onChange={handleSelectRange}
              >
                <option value="">Select</option>
                <option value="0-500">0-500</option>
                <option value="500-1000">500-1000</option>
                <option value="1000-1500">1000-1500</option>
                <option value="1500-2000">1500-2000</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <label className="text-sm mb-1 block font-medium">
            Sort by Price
          </label>
          <div className="min-w-[200px]">
            <select
              className="block w-full rounded-md px-2 py-1 border-slate-800 border-2 shadow-sm focus:border-slate-800 focus:ring focus:ring-slate-800 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary"
              value={sortOrder}
              onChange={handleSortOrderChange}
            >
              <option value="">Select</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <div className="">
          <label className=" text-sm mb-1 block  font-medium">
            Filter by Brand
          </label>
          <div className="min-w-[200px]">
            <select
              className="block w-full rounded-md px-2 py-1 border-slate-800 border-2 shadow-sm focus:border-slate-800 focus:ring focus:ring-slate-800 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary"
              value={brand}
              onChange={handleBrandChange}
            >
              <option value="">Select</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Google">Google</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Oppo">Oppo</option>
              <option value="Realme">Realme</option>
              <option value="Nokia">Nokia</option>
            </select>
          </div>
        </div>
        <div className="">
          <label className=" text-sm mb-1 block  font-medium">
            Filter by Type
          </label>
          <div className="min-w-[200px]">
            <select
              className="block w-full rounded-md px-2 py-1 border-slate-800 border-2 shadow-sm focus:border-slate-800 focus:ring focus:ring-slate-800 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary"
              value={type}
              onChange={handleTypeChange}
            >
              <option value="">Select</option>
              <option value="Flagship">Flagship</option>
              <option value="Mid-range">Mid-range</option>
              <option value="Budget">Budget</option>
              <option value="Foldable">Foldable</option>
              <option value="Compact">Compact</option>
            </select>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center my-20">
          <ClipLoader className="text-slate-800" size={50} />
        </div>
      ) : (
        <>
          {products.length === 0 ? (
            <div className="text-slate-800 text-2xl lg:text-4xl md:text-3xl font-semibold my-20 w-full">
              <h2 className="text-center">Sorry! No data found</h2>
            </div>
          ) : (
            <Swiper
              className="mySwiper"
              onSwiper={(swiperInstance) => {
                setSwiper(swiperInstance);
              }}
              onSlideChange={(swiperInstance) => {
                setActiveIndex(swiperInstance.activeIndex);
              }}
            >
              {slides.map((slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                    {products
                      .slice(
                        slideIndex * cardsPerPage,
                        (slideIndex + 1) * cardsPerPage
                      )
                      .map((product, idx) => (
                        <ProductCard key={idx} product={product} />
                      ))}
                  </div>
                </SwiperSlide>
              ))}
              <div className="flex justify-center mt-4">
                {slides.map((slideIndex) => (
                  <button
                    key={slideIndex}
                    className={`cursor-pointer text-lg border border-black font-bold rounded-full mx-2 py-1 px-3 ${
                      activeIndex === slideIndex
                        ? "bg-slate-800 text-white"
                        : "bg-slate-200"
                    }`}
                    onClick={() => handlePaginationClick(slideIndex)}
                  >
                    {slideIndex + 1}
                  </button>
                ))}
              </div>
            </Swiper>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
