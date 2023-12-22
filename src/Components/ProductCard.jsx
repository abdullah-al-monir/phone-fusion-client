import { TbBrand4Chan } from "react-icons/tb";
import { FiType } from "react-icons/fi";
import { BiMemoryCard } from "react-icons/bi";
import { GiProcessor, GiMoneyStack } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";
const ProductCard = ({ product }) => {
  const { brand, model, type, processor, price, memory, OS, image } = product;
  return (
    <div className="flex max-w-md p-5 rounded-xl bg-gray-50 shadow-lg gap-2 mx-auto">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          {model}
        </h5>
        <p className="flex gap-2 items-center">
          <TbBrand4Chan />
          {brand}
        </p>
        <p className="flex gap-2 items-center">
          <FiType />
          {type}
        </p>
        <p className="flex gap-2 items-center">
          <BiMemoryCard />
          {memory}
        </p>
        <p className="flex gap-2 items-center">
          <GiProcessor />
          {processor}
        </p>
        <p className="flex gap-2 items-center">
          <MdOutlineSettings />
          {OS}
        </p>
        <p className="flex gap-2 items-center">
          <GiMoneyStack />
          {price} $
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
