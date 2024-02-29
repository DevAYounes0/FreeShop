import { Badge, Card, Image } from "antd/lib";
import React from "react";

const OrderCard = ({ details }) => {
  return (
  
    <Badge count={5} >
  <Card style={{height:'400px', width:'300px'}} title={details.title}>
      <Image src={details.image} width={"100px"} height={"100px"}></Image>{" "}
      <br />
    <p>{details.description}</p> 
    <sup>EGP</sup>{details.price}<sup>00</sup> <br />
      <small>{details.other}</small> <br />
    <small style={{color:'red'}}>{details.stock}</small>  
    
    </Card>  </Badge>
  );
};

export default OrderCard;
