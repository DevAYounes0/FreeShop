"use client";
import React, { useEffect, useState } from "react";
import AuthGuard from "./Components/AuthGuard";
import { Flex } from "antd/lib";
import OrderCard from "./Components/OrderCard";
import { Button, Col, Row } from "antd";
import axios from "axios";
import CartComponent from "./Components/CartComponent";
//import ShoppingData from "../../src/app/DummyData/ShoppingData";
export default function Shopping() {
  const [f, setF] = useState([]);
  let shoppingData = [];
  const [cart, showCart] = useState(false);
  useEffect(() => {
    getShop();
  }, []);
  async function getShop() {
    shoppingData = await axios.get("api/shop").then((data) => {
      return data;
    });
    setF(shoppingData.data.cards);
  }

  return (
    <>
      <Row gutter={24}>
        {f.map((item, index) => {
          return (
            <Col style={{ marginTop: 20 }} key={index}>
              <OrderCard showCart={showCart} details={item} />
            </Col>
          );
        })}
      </Row>
      {cart && <CartComponent />}
    </>
  );
}
