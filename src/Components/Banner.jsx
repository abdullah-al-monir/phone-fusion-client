import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative h-[800px] bg-cover bg-center bg-opacity-50"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2022/02/01/02/47/smartphone-6985369_1280.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Welcome to Phone Fusion
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
            Explore our curated selection of top-tier products to elevate your
            journey.
          </p>
          <Link to="/products">
            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-600 text-white text-lg font-semibold rounded-md transition-colors duration-300">
              Let's Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
