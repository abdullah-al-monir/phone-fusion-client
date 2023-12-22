const Title = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">{heading}</h2>
      <h4 className="font-semibold text-lg sm:text-xl md:text-2xl mt-2">
        {subHeading}
      </h4>
    </div>
  );
};

export default Title;
