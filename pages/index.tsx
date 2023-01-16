import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <div
        className={` bg-red-700 flex flex-col justify-center items-center h-screen w-screen text-6xl`}
      >
        <Image src={"/initial.jpg"} width={800} height={800} alt=""></Image>
      </div>
    </>
  );
}
