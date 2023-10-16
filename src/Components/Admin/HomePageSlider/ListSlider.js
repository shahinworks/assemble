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
  
  return (<>
    <h2 className='text-center my-2'>List of Slider Images</h2>
   <ul>
    {data?.getAllHomePageSlider && data?.getAllHomePageSlider?.map((item) => 
     <li><img style={{height: "40px", width: "70px"}} src={item.images} aly="pic"/></li>
    )}
   </ul>
   
  </>)
}

export default ListSlider;