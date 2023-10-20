import { gql, useQuery } from '@apollo/client'
import React from 'react'

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
    console.log("data", data);
  }
  return (
    <div>ListOrder</div>
  )
}

export default ListOrder;