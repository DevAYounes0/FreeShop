"use client";
import React, { useState } from "react";
import AuthGuard from "./Components/AuthGuard";
import { Card, Flex } from "antd/lib";
import OrderCard from "./Components/OrderCard";

export default function Shopping() {
  const aat = [
    {
      title: "adidas",
      image: "/shoes.jpg",
      description: "womens PUREBOOSTJET W CBLACK/BEAMPK/FTWWHT",
      price: "4,089",
      other: "Fulfilled by Amazon - FREE Shipping",
    },
    {
      title: "Desert",
      image: "/51ddCIFIEAL._AC_UL320_.jpg",
      description: "Wx21 - Basic Lace-Up Sneakers For Women Size",
      price: "269",
      other: "Fulfilled by Amazon - FREE Shipping",
      stock: "Only 3 left in stock - order soon.",
    },
  ];
  return (
    <Flex gap={'7'}>
      {aat.map((item, index) => {
        return <OrderCard key={index + 1} details={item} />;
      })}
    </Flex>

  
  );
}
