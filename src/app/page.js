"use client";
import React, { useState } from "react";
import AuthGuard from "./Components/AuthGuard";
import { Flex } from "antd/lib";
import OrderCard from "./Components/OrderCard";
import { Col, Row } from "antd";
import ShoppingData from "../../src/app/DummyData/ShoppingData";
export default function Shopping() {
  return (
    <>
      <Row gutter={24}>
        {ShoppingData.map((item, index) => {
          return (
            <Col style={{ marginTop: 20 }} key={index}>
              <OrderCard key={index + 1} details={item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
