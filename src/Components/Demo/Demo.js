import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { gql, useQuery } from '@apollo/client'; 
import { useEffect } from "react";

function Demo() {

  const GET_ALL_PRODUCT = gql`
  query GetAllProducts {
    getAllProducts {
      id
      color
      description
      discount
      gender
      gst
      priveiwName
      productName
      sellingPrice
      size
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
  }
`;


const [data, setData ] = useState([]);

const { data: product, refetch } = useQuery(GET_ALL_PRODUCT);


useEffect(() => {
  setData(product?.getAllProducts);
}, [product]);



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (<>
  <div className="container">
        <div id="carouselExampleControlsDamn" className="carousel slide" data-ride="carousel" >
          <div className="carousel-inner">
            
             <div className="carousel-item active">
             <div className="row row1">
    {data && <Carousel responsive={responsive}>
    {data && data?.map((data, index) => <div key={index} >
          <img src={data?.images[0]?.imagePath[0]} alt="Image 2" />
        </div> )}
       
    </Carousel>}
    </div>
    </div>
    </div>
    </div>
    </div>
  </>);
}

export default Demo;


  //  <div  >
  //         <img src="https://source.unsplash.com/300x300/?perth" alt="Image 2" />
  //       </div>
  //       <div  >
  //         <img src="https://source.unsplash.com/300x300/?fremantle,australia" alt="Image 1" />
  //       </div>
  //       <div  >
  //         <img src="https://source.unsplash.com/300x300/?perth" alt="Image 3" />
  //       </div>
