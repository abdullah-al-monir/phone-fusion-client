const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Elevate Your Mobile Experience
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Discover a world of cutting-edge technology and innovation at
              Phone Fusion. From flagship to budget-friendly options, find your
              perfect match among our curated collection.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-blue-600">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Stay Ahead with Latest Releases
                </h6>
                <p className="text-sm text-gray-900">
                  Explore the newest arrivals, ensuring you’re always up-to-date
                  with the latest features and advancements in mobile
                  technology.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-blue-600">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Find Your Perfect Fit
                </h6>
                <p className="text-sm text-gray-900">
                  Whether it's a powerful flagship or a budget-friendly option,
                  our diverse range ensures you find the ideal phone that meets
                  your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="/aboutImage.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
