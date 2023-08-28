"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustonButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newPage = (pageNumber + 1) * 10;

    const newPathname = updateSearchParams("pageSize", String(newPage));

    router.push(newPathname, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-red-700 rounded-2xl text-white font-bold"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};
export default ShowMore;
