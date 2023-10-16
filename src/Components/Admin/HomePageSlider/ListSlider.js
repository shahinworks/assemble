import { gql, useQuery } from '@apollo/client';
import React from 'react';

function ListSlider() {

  const GET_SLIDER = gql`
    query GetAllHomePageSlider {
      getAllHomePageSlider {
        id
        images
        content
        url
      }
    }
  `;

  const {data} = useQuery(GET_SLIDER);
  if(data) {
    console.log("data",  data);
  }
  
  return (<>
   <div>ListSlider</div>
   
  </>)
}

export default ListSlider;