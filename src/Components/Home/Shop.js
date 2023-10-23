import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Header from '../Sections/Header/Header';
import { useNavigate, Link } from 'react-router-dom';

function Shop() {

  // GETTING DATA
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

  const { data: product, refetch } = useQuery(GET_ALL_PRODUCT);

  return (<>
    <section className="slider" style={{ paddingTop: "10%" }}>
      <h1 className="text-center ">All Products</h1>
      <div className="container mx-3">
        <div className="row">
        {product && product?.getAllProducts?.map((data, index) => 
          <div key={data.id} className="flexslider col-lg-3 col-md-6 col-sm-12" >
           <Link to={`/product/${data.id}`}  className='stretched-link'>  </Link> 
             <div className="flexslider">
              <ul className="slides" style={{listStyle: "none"}} >
                <li data-thumb="assets/img/1.jpg">
                  <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="/product" >
                    <img style={{ height: 350, objectFit: "contain" }} src={data?.images[0]?.imagePath} />
                  </a>
                </li>
                <div className='text-center'>
                  <h2 className='mt-2 text-black' style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}> {data.productName}</h2>
                  <div>
                  <h4 className="text-black fs-5 text-center">
                  {/* <del> ₹3,000</del> */}
                   ₹ {data.sellingPrice }</h4>
                  </div>
                </div>
              </ul>
            </div>  
          </div> )}
        </div>
      </div>
    </section>
  </>)
}

export default Shop;