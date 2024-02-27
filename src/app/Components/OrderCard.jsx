import { Card } from 'antd/lib';
import React from 'react';

const OrderCard = ({details}) => {
  return (
    <Card title={details.title} >
      {details.description}
    </Card>
  );
}

export default OrderCard;
