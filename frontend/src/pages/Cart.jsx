import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../redux/cartSlice";
export default function Cart() {
  const dispatch = useDispatch();
  // preload card with certain items
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  console.log("totalPrice :", totalPrice);
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="z-10 h-full w-full translate-x-0 transform overflow-x-hidden transition duration-700 ease-in-out"
        id="checkout"
      >
        <div className="flex flex-col justify-center md:flex-row" id="cart">
          {items.map((item) => (
            <div
              className="h-screen w-full overflow-y-auto overflow-x-hidden bg-white py-8 pl-4 pr-10 md:py-12 md:pl-10 md:pr-4 lg:w-1/2"
              id="scroll"
            >
              <div
                className="flex cursor-pointer items-center text-gray-500 hover:text-gray-600"
                onClick={() => setShow(!show)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <p className="pl-2 text-sm leading-none">Back</p>
              </div>
              <p className="pt-3 text-5xl font-black leading-10 text-gray-800">
                Bag
              </p>
              <div className="mt-14 items-center border-t border-gray-200 py-8 md:flex">
                <div className="w-1/4">
                  <img
                    src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png"
                    alt
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="md:w-3/4 md:pl-3">
                  <p className="pt-4 text-xs leading-3 text-gray-800 md:pt-0">
                    {item.id}
                  </p>
                  <div className="flex w-full items-center justify-between pt-1">
                    <p className="text-base font-black leading-none text-gray-800">
                      {item.name}
                    </p>
                    <select className="mr-6 border border-gray-200 px-1 py-2 focus:outline-none">
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <p className="pt-2 text-xs leading-3 text-gray-600">
                    Height: 10 inches
                  </p>
                  <p className="py-4 text-xs leading-3 text-gray-600">
                    Color: Black
                  </p>
                  <p className="w-96 text-xs leading-3 text-gray-600">
                    Composition: 100% calf leather
                  </p>
                  <div className="flex items-center justify-between pr-6 pt-5">
                    <div className="itemms-center flex">
                      <p className="cursor-pointer text-xs leading-3 text-gray-800 underline">
                        Add to favorites
                      </p>
                      <p
                        className="cursor-pointer pl-5 text-xs leading-3 text-red-500 underline"
                        onClick={() => dispatch(removeItemFromCart(item.id))}
                      >
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="h-full w-full bg-gray-100 md:w-1/3 xl:w-1/2 xl:w-1/4">
            <div className="flex flex-col justify-between overflow-y-auto px-14 py-20 md:h-screen">
              <div>
                <p className="text-4xl font-black leading-9 text-gray-800">
                  Summary
                </p>
                <div className="flex items-center justify-between pt-16">
                  <p className="text-base leading-none text-gray-800">
                    Total Items
                  </p>
                  <p className="text-bold font-bold leading-none text-gray-800">
                    {totalQuantity} Pieces
                  </p>
                </div>
                <div className="flex items-center justify-between pt-16">
                  <p className="text-base leading-none text-gray-800">
                    Subtotal
                  </p>
                  <p className="text-base leading-none text-gray-800">
                    ${totalPrice}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-gray-800">
                    Shipping
                  </p>
                  <p className="text-base leading-none text-gray-800">$30</p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-gray-800">Tax</p>
                  <p className="text-base leading-none text-gray-800">$35</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between pb-6 pt-20 lg:pt-5">
                  <p className="text-2xl leading-normal text-gray-800">Total</p>
                  <p className="text-right text-2xl font-bold leading-normal text-gray-800">
                    ${totalPrice}
                  </p>
                </div>
                <button
                  onClick={() => setShow(!show)}
                  className="w-full border border-gray-800 bg-gray-800 py-5 text-base leading-none text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
