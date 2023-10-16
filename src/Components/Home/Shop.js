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
  `;

  const { data: product, refetch } = useQuery(GET_ALL_PRODUCT);

  return (<>
  {/* <Header /> */}
    <section className="slider" style={{ paddingTop: "10%" }}>
      <h1 className="text-center ">All Products</h1>
      <div className="container mx-3">
        <div className="row">
        {product && product?.getAllProducts?.map((data, index) => 
          <div key={data.id} className="flexslider col-lg-3 col-md-6 col-sm-12" >
           <Link to={`/product/${data.id}`}> 
             <div className="flexslider">
              <ul className="slides" style={{listStyle: "none"}} >
                <li data-thumb="assets/img/1.jpg">
                  <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="/product" >
                    <img style={{ height: 350, objectFit: "contain" }} src={data.images} />
                  </a>
                </li>
                <div className='text-center'>
                  <h2 className='mt-2' style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}> {data.productName}</h2>
                  <p>
                    <del> ₹3,000</del> ₹1999
                  </p>
                </div>
              </ul>
            </div>  </Link> 
          </div> )}
          {/* <div className="flexslider col-lg-3 col-md-6 col-sm-12" >
            <div className="flexslider">
              <ul className="slides" style={{listStyle: "none"}} >
                <li data-thumb="assets/img/1.jpg">
                  <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="/product" >
                    <img style={{ height: 350, objectFit: "contain" }} src="assets/img/TheVeshtiCompanyHaremPants50_540x.webp" />
                  </a>
                </li>
                <div className='text-center'>
                  <h2 className='mt-2' style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}> Mythical Mana </h2>
                  <p>
                    <del> ₹3,000</del> ₹1999
                  </p>
                </div>
              </ul>
            </div>
          </div>
          <div className="flexslider col-lg-3 col-md-6 col-sm-12" >
            <div className="flexslider">
              <ul className="slides" style={{listStyle: "none"}} >
                <li data-thumb="assets/img/1.jpg">
                  <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="/product" >
                    <img style={{ height: 350, objectFit: "contain" }} src="assets/img/VeshtiCompanyHaremPants1_c404fad7-cfa0-4ae3-a4f0-789c30a0c43b_360x.webp" />
                  </a>
                </li>
                <div className='text-center'>
                  <h2 className='mt-2' style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}> Mythical Mana </h2>
                  <p>
                    <del> ₹3,000</del> ₹1999
                  </p>
                </div>
              </ul>
            </div>
          </div>
          <div className="flexslider col-lg-3 col-md-6 col-sm-12" >
            <div className="flexslider">
              <ul className="slides" style={{listStyle: "none"}} >
                <li data-thumb="assets/img/1.jpg">
                  <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="/product" >
                    <img style={{ height: 350, objectFit: "contain" }} src="assets/img/23.webp" />
                  </a>
                </li>
                <div className='text-center'>
                  <h2 className='mt-2' style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}> Mythical Mana </h2>
                  <p>
                    <del> ₹3,000</del> ₹1999
                  </p>
                </div>
              </ul>
            </div>
          </div>
          <div className="flexslider col-lg-3 col-md-6 col-sm-12" >
            <div className="flexslider">
              <ul className="slides" style={{listStyle: "none"}} >
                <li data-thumb="assets/img/1.jpg">
                  <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="/product" >
                    <img style={{ height: 350, objectFit: "contain" }} src="assets/img/24.webp" />
                  </a>
                </li>
                <div className='text-center'>
                  <h2 className='mt-2' style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}> Mythical Mana </h2>
                  <p>
                    <del> ₹3,000</del> ₹1999
                  </p>
                </div>
              </ul>
            </div>
          </div>
          <div className="flexslider col-lg-3 col-md-6 col-sm-12" >
            <div className="flexslider">
              <ul className="slides" style={{listStyle: "none"}} >
                <li data-thumb="assets/img/1.jpg">
                  <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="/product" >
                    <img style={{ height: 350, objectFit: "contain" }} src="assets/img/25.webp" />
                  </a>
                </li>
                <div className='text-center'>
                  <h2 className='mt-2' style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}> Mythical Mana </h2>
                  <p>
                    <del> ₹3,000</del> ₹1999
                  </p>
                </div>
              </ul>
            </div>
          </div>
          <div className="flexslider col-lg-3 col-md-6 col-sm-12" >
            <div className="flexslider">
              <ul className="slides" style={{listStyle: "none"}} >
                <li data-thumb="assets/img/1.jpg">
                  <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="/product" >
                    <img style={{ height: 350, objectFit: "contain" }} src="assets/img/1.jpg" />
                  </a>
                </li>
                <div className='text-center'>
                  <h2 className='mt-2' style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}> Mythical Mana </h2>
                  <p>
                    <del> ₹3,000</del> ₹1999
                  </p>
                </div>
              </ul>
            </div>
          </div>
          <div className="flexslider col-lg-3 col-md-6 col-sm-12" >
            <div className="flexslider">
              <ul className="slides" style={{listStyle: "none"}} >
                <li data-thumb="assets/img/1.jpg">
                  <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="/product" >
                    <img style={{ height: 350, objectFit: "contain" }} src="assets/img/2.jpg" />
                  </a>
                </li>
                <div className='text-center'>
                  <h2 className='mt-2' style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}> Mythical Mana </h2>
                  <p>
                    <del> ₹3,000</del> ₹1999
                  </p>
                </div>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  </>)
}

export default Shop;