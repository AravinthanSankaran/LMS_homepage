import Image from "next/image";
import React from "react";

function BrandCard({ name, image }) {
  return (
    <div className="border w-[300px] rounded-lg">
      <div className="relative">
        <Image src={image} alt={name} />
      </div>
      <div className="space-y-2 px-3">
        <h2 className="text-base text-heading font-semibold pt-2">{name}</h2>
      </div>
    </div>
  );
}

export default BrandCard;
