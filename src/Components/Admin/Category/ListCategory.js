import { gql, useQuery } from '@apollo/client'
import React from 'react'

function ListCategory() {
  
  const GET_ALL_CATEGORY = gql`
    query GetAllCategory {
      getAllCategory {
        id
        categoryName
      }
    }
  `;

  const { data } = useQuery(GET_ALL_CATEGORY);

  if(data) {
    console.log(data);
  }
  return (
    <div>ListCategory</div>
  )
}

export default ListCategory