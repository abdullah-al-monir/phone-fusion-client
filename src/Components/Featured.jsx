import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Title from "./Title";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
const Featured = () => {
  const axiosPublic = useAxios();
  const { isPending, data: featured = [] } = useQuery({
    queryKey: ["featured"],
    queryFn: async () => {
      const res = await axiosPublic.get("/featured");
      return res.data;
    },
  });
  return (
    <div className="container mx-auto px-5 my-20">
      <Title
        heading={"Latest Phones"}
        subHeading={"Explore our latest phones"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {featured.map((product) => (
          <div key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to="/products">
          <button className="px-6 py-3 bg-slate-800 hover:bg-slate-600 text-white text-lg font-semibold rounded-md transition-colors duration-300">
            See All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
