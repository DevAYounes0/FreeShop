"use client";
import React, { useState } from "react";
import AuthGuard from "./Components/AuthGuard";
import { Flex } from "antd/lib";
import OrderCard from "./Components/OrderCard";


export default function Shopping() {
  const aat= [{ title:"Carrots"},{title:"Car"}]
  return (
    <Flex>
    {aat.map((item,index)=>{
      return <OrderCard key={index+1} details={item} />
    })}
    </Flex>
  );
}
