import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Title from "../../Components/Title";
import ProductCard from "../../Components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
const Products = () => {
  const { refetch, data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios(`/products.json`);
      return res.data;
    },
  });
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
  return (
    <div>
      <Title
        heading={"Available Phones"}
        subHeading={"Find the perfect fit from our array of products"}
      />
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
                activeIndex === slideIndex ? "bg-slate-800 text-white" : "bg-slate-200"
              }`}
              onClick={() => handlePaginationClick(slideIndex)}
            >
              {slideIndex + 1}
            </button>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Products;
