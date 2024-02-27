"use client";
import React, { useState } from "react";
import AuthGuard from "./Components/AuthGuard";
import { Flex } from "antd/lib";
import OrderCard from "./Components/OrderCard";

export default function Shopping() {
  const [details, setDetails] = useState({ title: "Carrots" });
  return (
    <Flex>
      <OrderCard details={details} />
    </Flex>
  );
}
