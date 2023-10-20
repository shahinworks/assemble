import React from 'react';
import { gql, useQuery } from '@apollo/client';

function ListOrder() {

  const LIST_ORDER = gql`
    query GetAllOrder {
        getAllOrder {
          id
          paymentId
          paymentMethod
          paymentProof
          paymentStatus
          status
          totalAmount
          orderProducts {
            productId {
              id
              productName
              priveiwName
              sellingPrice
              images
              size
              color
              gender
              discount
              gst
              description
              stock
            }
            price
            quantity
            packedImage
            shippedImage
            shippedBy
            trackingNo
            trackingUrl
          }
        }
      }
  `;

  const {data} = useQuery(LIST_ORDER);
  if(data) {
    console.log("Data", data);
  }

  return (<>
    <div>ListOrder</div>
   {data &&  <h5>Data is being Received.</h5>}
  </>)
}

export default ListOrder;