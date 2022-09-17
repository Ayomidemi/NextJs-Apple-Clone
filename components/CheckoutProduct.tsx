import * as React from "react";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../redux/basketSlice";
import toast from "react-hot-toast";
import Image from "next/image";
import { urlFor } from "../sanity";
import { ChevronDownIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import Currency from "react-currency-formatter";
import Link from "next/link";

interface ICheckoutProductProps {
  items: Product[];
  id: string;
}

const CheckoutProduct: React.FunctionComponent<ICheckoutProductProps> = ({
  id,
  items,
}) => {
  const imgasst = items.filter((item) => item)[1];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const asst = imgasst.filter((item: any) => item)[0];

  console.log(asst.image[0].asset._ref);

  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));

    toast.error(`This feature is coming soon, please bear with us`, {
      position: "bottom-center",
    });
  };

  console.log(id);

  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center py-6">
      <div className="relative h-44 w-44">
        <Image
          src={urlFor(asst.image[0].asset._ref).url()}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl mt-3">
            <h4 className="font-semibold lg:w-96">{asst.title}</h4>
            <p className="flex items-end gap-x-1 font-semibold">
              {imgasst.length}
            </p>
          </div>

          <p className="flex cursor-pointer items-end text-blue-500 hover:underline" onClick={removeItemFromBasket}>
            Product details
            <ChevronDownIcon className="h-6 w-6" />
          </p>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <h4 className="text-xl font-semibold lg:text-2xl">
            <Currency
              quantity={imgasst.reduce((total, item) => total + item.price, 0)}
              currency="USD"
            />
          </h4>
          <div className="flex cursor-pointer">
          <a href="/#products"> <PlusCircleIcon className="h-8 w-6 mr-2" /> </a> 
          <TrashIcon className="h-8 w-6" onClick={removeItemFromBasket}/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
