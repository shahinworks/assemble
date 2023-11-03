import React, { useEffect, useState } from 'react';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';

function OrderList() {
 
  const USER_ORDERS = gql`
    query GetUserorder {
        getUserorder {
          id
          paymentMethod
          status
          totalAmount
          billingAddress {
            id
            firstName
            lastName
            mobileNo
            addressLine1
            addressLine2
            city
            state
            postalCode
            country
          }
          paymentId
          paymentStatus
          shippingAddress {
            id
            firstName
            lastName
            mobileNo
            addressLine1
            addressLine2
            city
            state
            postalCode
            country
          }
          user {
            id
            firstName
            lastName
            email
            profilepic
            mobileNo
            password
            role
          }
          paymentProof
          orderProducts {
            productId {
              id
              productName
              priveiwName
              sellingPrice
              size
              color
              gender
              discount
              gst
              description
              stock {
                quantity
                gender
                color
                size
              }
              images {
                imagePath
                color
                gender
              }
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
  const {data: orderData} = useQuery(USER_ORDERS);

  if(orderData){
    console.log("UserOrders", orderData);
  }

  return (<>
   <h4 style={{marginTop: "10%"}} className='text-center mb-5'>LIST OF ORDERS</h4>
   
  </>)
}

export default OrderList;