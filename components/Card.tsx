"use client";

import { CardData } from "@/types";
import Image from "next/image";
import { CardDetails } from ".";
import { useState } from "react";
import CustomButton from "./CustonButton";
export interface Card {
  card: CardData;
}

const Card = ({ card }: Card) => {
  const [isOpen, setIsOpen] = useState(false);

  const { name, images } = card;

  return (
    <div>
      <div className="flex-1 min-w-[150px] min-h-[209px] lg:min-w-[250px] lg:min-h-[350px] relative">
        <Image
          src={images.large}
          alt={name}
          fill
          priority
          className="object-contain"
          sizes="(max-width: 375px) 50vw, (max-width: 1200px) 25vw"
        />
        <div className="absolute w-full h-full flex flex-col justify-center group hover:bg-black hover:bg-opacity-30">
          <CustomButton
            title="Details"
            containerStyles="opacity-0 group-hover:opacity-100 bg-black bg-opacity-0 rounded w-full h-full"
            textStyles="text-gray-200 text-2xl uppercase font-bold"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CardDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        card={card}
      />
    </div>
  );
};
export default Card;
