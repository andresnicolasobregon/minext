import React from "react";
import Image from "next/image";


export  function Carousel (){
  
  return (
      <div className="w-full">
            <Image
                src={"/img/carousel1.png"}
                alt="Logotipo de ElectroWEb"
                layout="responsive"
                width={1000}
                height={100}
            />
      </div>
      
  )
}
