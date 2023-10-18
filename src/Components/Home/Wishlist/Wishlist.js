import { gql, useQuery } from '@apollo/client';
import React from 'react'

function Wishlist() {  
  const GET_WISHLIST_ITEMS = gql`
    query Wishlist {
        wishlist {
          userId
          wishlistProducts {
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
          }
        }
      }
    `;

  const {data} = useQuery(GET_WISHLIST_ITEMS);
  if(data){
    console.log("data", data);
  }
  return (<>
    <div style={{marginTop: "10%"}}>Wishlist Item</div>
    <ul>
     {data && data?.wishlist?.wishlistProducts?.map((wish) => 
       <li key={wish?.productId?.id}>{wish?.productId?.productName}</li>
     )}
    </ul>
  </>)
}

export default Wishlist;