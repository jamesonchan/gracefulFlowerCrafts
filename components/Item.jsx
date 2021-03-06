import React, { useState } from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useRouter } from "next/router";

function Item({
  id: item_id,
  title,
  price,
  description,
  category,
  image,
  name,
}) {
  const [hasFreeShipping] = useState(Math.random() < 0.5);

  const router = useRouter();

  return (
    <div className="mb-5">
      {/* iamge tag */}
      <div className="group relative flex flex-col m-5 transition hover:shadow-lg duration-300 cursor-pointer rounded-lg overflow-hidden transform hover:scale-105 ease-in-out">
        <Image
          onClick={() => router.push(`/product/${item_id}`)}
          src={image.url}
          height={200}
          width={200}
          objectFit="cover"
        />
      </div>
      {/* price tag */}
      <div className="-mt-3 flex flex-col m-5">
        <h4 className="text-xs truncate">{name}</h4>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-xs text-gray-400"
        ></p>
        <div className="text-sm font-bold text-gray-700 flex">
          <Currency quantity={price.raw} currency="USD" />
          {hasFreeShipping && (
            <div className="flex items-center ml-2 bg-red-300 rounded-full px-1">
              <p className="text-xs">Free shipping</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;

// test for git
