"use client";

import { CardData } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { getPokemonType } from "@/utils";

interface CardDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  card: CardData;
}

const CardDetails = ({ isOpen, closeModal, card }: CardDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex w-full min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative  max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <div className="relative w-full h-[750px] lg:h-full flex flex-col lg:flex-row bg-transparent bg-center bg-cover rounded-lg">
                      <div className="flex-1 w-full min-w-[280px] min-h-[390px] xl:min-w-[490px] xl:min-h-[680px] relative ">
                        <Image
                          src={card.images.large}
                          alt={card.name}
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 flex flex-col gap-6 w-[280px] self-stretch xl:w-[490px] xl:h-[680px] bg-pattern bg-cover p-4">
                        <div className=" w-full flex justify-between mb-5">
                          <h4 className="font-bold text-sm xl:text-2xl uppercase">
                            {card.name}
                          </h4>
                          <div className="flex gap-1 lg:gap-4 text-xs xl:text-lg">
                            {card.types?.map((type) => (
                              <span
                                key={type}
                                className={`px-3 py-1 font-bold text-black rounded-full shadow-lg ${getPokemonType(
                                  type
                                )}`}
                              >
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="w-full flex justify-between text-sm xl:text-lg">
                          <h4 className="text-gray-500 font-bold">Set Name:</h4>
                          <h4 className="font-bold text-md xl:text-xl">
                            {card.set.name}
                          </h4>
                        </div>
                        <div className="w-full flex justify-between text-sm xl:text-lg">
                          <h4 className="text-gray-500 font-bold">Series:</h4>
                          <h4 className="font-bold xl:text-xl">
                            {card.set.series}
                          </h4>
                        </div>
                        <div className="w-full flex justify-between text-sm xl:text-lg">
                          <h4 className="text-gray-500 font-bold">
                            Release Date:
                          </h4>
                          <h4 className="font-bold xl:text-xl">
                            {card.set.releaseDate}
                          </h4>
                        </div>
                        <div className="w-full flex justify-between text-sm xl:text-lg">
                          <h4 className="text-gray-500 font-bold">Rarity:</h4>
                          <h4 className="font-bold xl:text-xl">
                            {card.rarity}
                          </h4>
                        </div>
                        <div className="w-full flex justify-between text-sm xl:text-lg">
                          <h4 className="text-gray-500 font-bold">Value:</h4>
                          <h4 className="font-bold xl:text-xl">
                            {card.tcgplayer?.prices?.holofoil?.market
                              ? card.tcgplayer?.prices?.holofoil?.market
                              : "-"}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default CardDetails;
