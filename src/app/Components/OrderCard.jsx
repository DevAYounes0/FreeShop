import { Badge, Button, Card, Image, Space } from "antd/lib";
import React from "react";

const OrderCard = ({ details,showCart }) => {
  return (
    <Badge count={details.quantity}>
      <Card
        hoverable
        style={{ height: "320px", width: "300px" }}
        title={details.title}
      >
        <Image
          preview={false}
          alt="none"
          src={details.image}
          width={"100px"}
          height={"100px"}
          style={{ marginLeft: "60%" }}
        ></Image>{" "}
        <br />
        <p>{details.description}</p>
        {details.price}
        <sup>EGP</sup>
        <br />
        <small>{details.other}</small> <br />
        <small style={{ color: "red" }}>
          Only {details.quantity} left in stock - order soon.
        </small>
        <div style={{display:'flex',justifyContent:'center',alignItems:"center" ,marginTop:10 }}>
          <Button onClick={()=>{showCart(true)}} type="primary">+</Button>
          <Button type="primary" style={{marginLeft:5}}>-</Button>
        </div>
      </Card>
    </Badge>
  );
};

export default OrderCard;
