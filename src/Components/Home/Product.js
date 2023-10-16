import React from 'react';
import './Product.css';
import { Tab, TabContainer, TabContent, Tabs } from 'react-bootstrap';
import Header from '../Sections/Header/Header';
import { useParams } from 'react-router-dom';
import { useQuery, gql, useMutation } from '@apollo/client';
import toast from "react-hot-toast";

function Product() {
  const { id } = useParams();

  const GET_PRODUCT = gql`
    query GetProduct($getProductId: ID) {
      getProduct(id: $getProductId) {
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

  const {data: product} = useQuery(GET_PRODUCT, {
    variables: {
      getProductId: id
    }
  });
  if(product) 
  {
    console.log(product);
  }


  const ADD_TO_CART = gql`
    mutation AddToCart($productId: ID!, $quantity: Int!) {
      addToCart(productId: $productId, quantity: $quantity) {
        _id
      }
    }
  `;
  
  const [addToCart, {data}] = useMutation(ADD_TO_CART, {
    onCompleted : () => {
      toast.success("Product Added Successfully in cart");
    },
    onError : (error) => {
      toast.error("Error Occured");
      console.error("ERROR: ", error.message)
    }
  });
  if(data) {
    console.log("data", data );
  }
  
  const handleAddToCart = async (id) => {
    console.log("Add to Cart");
    await addToCart({
      variables: {  
        productId: id,
        quantity: 2
      }
    })

    
  }

  return (<>
  {/* <Header /> */}
  <>
  <div className="container">
    <section className="slider" style={{ paddingTop: "10%" }}>
      <div className="container" id="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center flex-row-reverse">
              <div className="image-display">
                <img
                  id="selected-image"
                  src={product?.getProduct?.images}
                  // src="assets/img/31.jpg"
                  alt="Selected Image"
                />
                <div />
              </div>
              <div className="variant-options ">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly"
                  }}
                >
                  <div
                    className="variant active"
                    id="act"
                    data-image="assets/img/31.jpg"
                  >
                    <img
                      style={{ objectFit: "contain" }}
                      src="assets/img/31.jpg"
                      alt=""
                    />
                  </div>
                  <div className="variant" data-image="assets/img/32.jpg">
                    <img
                      style={{ objectFit: "contain" }}
                      src="assets/img/32.jpg"
                      alt=""
                    />
                  </div>
                  <div className="variant" data-image="assets/img/33.jpg">
                    <img
                      style={{ objectFit: "contain" }}
                      src="assets/img/33.jpg"
                      alt=""
                    />
                  </div>
                  <div className="variant" data-image="assets/img/34.jpg">
                    <img
                      style={{ objectFit: "contain" }}
                      src="assets/img/34.jpg"
                      alt=""
                    />
                  </div>
                  {/* Add more color divs as needed */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="container">
              <h1>{product?.getProduct?.productName}</h1>
              <br />
              <h3>
                {/* <del> ₹3,000.00</del>  */}
                ₹ {product?.getProduct?.sellingPrice}
              </h3>
              <p className="text-disable">Tax included.</p>
              <hr />
              <div className="container">
                <p>
                  <b>
                  {product?.getProduct?.description}
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, vel ratione. */}
                  </b>
                </p>
                <div className="row" id="row">
                  <div className="col ">
                    <a href="#">
                      <div>
                        <img src="assets/img/31.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="col">
                    <a href="#">
                      {" "}
                      <div>
                        <img src="assets/img/32.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="col">
                    <a href="#">
                      {" "}
                      <div>
                        <img src="assets/img/33.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="col">
                    <a href="#">
                      {" "}
                      <div>
                        <img src="assets/img/34.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="col">
                    <a href="#">
                      {" "}
                      <div>
                        <img src="assets/img/35.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <br />

              <h6 className='fw-bold mx-2 text-left'> Colour </h6>
              <div className='ms-0 d-flex'>
             {product?.getProduct && product?.getProduct?.color.map((color) =>
              <div key={color} className='mx-2 my-2 px-3 py-2' style={{border: "1px solid black"}}>
              {color}
            </div>)} 
            </div>


              <h6 className='fw-bold mx-2 text-left'>
                Gender
              </h6>
              <div className='ms-0 d-flex'>
               {product?.getProduct && product?.getProduct?.gender.map((gender) =>
              <div key={gender} className='mx-2 my-2 px-3 py-2' style={{border: "1px solid black"}}> {gender} </div>)}
              </div>
             
              <h6 className='fw-bold mx-2 text-left'>
                Size
              </h6>
              <div className='ms-0 d-flex'>
             {product?.getProduct && product?.getProduct?.size.map((size) =>
              <div key={size} className='mx-2 my-2 px-3 py-2' style={{border: "1px solid black"}}>
              {size}
            </div>)}
            </div>
             


              {/* <div className="row row2 text-uppercase">
                <div
                  className="col-lg-2 variant text-center"
                  data-image="assets/img/orange.webp"
                  id="act"
                >
                  {" "}
                  Orange
                </div>
                <div
                  className="col-lg-2 variant text-center"
                  data-image="assets/img/brown.webp"
                >
                  Brown
                </div>
                <div
                  className="col-lg-2 variant text-center"
                  data-image="assets/img/31.jpg"
                >
                  Green
                </div>
                <div
                  className="col-lg-2 variant text-center"
                  data-image="assets/img/32.jpg"
                >
                  blue
                </div>
                <div
                  className="col-lg-2 variant text-center"
                  data-image="assets/img/33.jpg"
                >
                  black
                </div>
                <div
                  className="col-lg-2 variant text-center"
                  data-image="assets/img/34.jpg"
                  style={{ marginRight: 5 }}
                >
                  mustard
                </div>
                <div
                  className="col-2 variant text-center"
                  data-image="assets/img/31.jpg"
                >
                  purple
                </div>
              </div>
              <br />
              <h6>
                <b>Gender</b>
              </h6>
              <div className="row row2 text-uppercase">
                <div className="col-lg-2 col-md-2 col-sm-6">men</div>
                <div className="col-lg-2  col-md-2 col-sm-6 ">women</div>
              </div> */}
            </div>
            <br />

            <div className="mx-2 d-flex align-items-center">
              <svg
                style={{ marginRight: 9 }}
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                className="bi bi-globe"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
              </svg>{" "}
              <h6 style={{ paddingTop: 5, color: "rgba(59, 59, 59, 0.8)" }}>
                Worldwide shipping
              </h6>
            </div>
            <br />
            <div className="mx-2  d-flex align-items-flexstart">
              <svg height={20} width={20}>
                <circle
                  cx={10}
                  cy={10}
                  r={8}
                  stroke="green"
                  strokeWidth={3}
                  fill="green"
                />
              </svg>
              <p style={{ paddingLeft: 13, marginTop: "-3px" }}>
                {" "}
                In stock, ready to ship
              </p>
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <button className="button  d-flex justify-content-evenly" onClick={() => handleAddToCart(product?.getProduct?.id)}>
                <a href="#" className="text-center">
                  Add to cart
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </a>
              </button>
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <button className="button2  d-flex justify-content-evenly">
                <a href="#" className="text-center">
                  Buy Now
                </a>
              </button>
            </div>
            <br />
           
         <Tabs>
          <Tab eventKey="measurement" title="Measurement" className='my-3'>
          <h6 className='fw-bold mx-2 my-3 text-left'>
                Free Size : 
              </h6>
            <ul>
              <li style={{fontWeight: "bold", textAlign: "left"}} className='my-2'> Waist : 26" - 48" (Full Elasticated Waist with
                        tightening lace)</li>
              
              <li style={{fontWeight: "bold", textAlign: "left"}} className='my-2'>Height : 40"</li>
              </ul>
              <h6 className='fw-bold mx-2 my-3 text-left'>
                Medium : 
              </h6>
            <ul>
              <li style={{fontWeight: "bold", textAlign: "left"}} className='my-2'> Waist : 26" - 48" (Full Elasticated Waist with
                        tightening lace)</li>
              
              <li style={{fontWeight: "bold", textAlign: "left"}} className='my-2'>Height : 40"</li>
              </ul>
              <h6 className='fw-bold mx-2 my-3 text-left'>
                Features : 
              </h6>
            <ul>
              <li style={{fontWeight: "bold", textAlign: "left"}} className='my-2'>
                Finest Long Staple 100% cotton</li>
                <li style={{fontWeight: "bold", textAlign: "left"}} className='my-2'>
               Super Sized Pocket</li>
               <li style={{fontWeight: "bold", textAlign: "left"}} className='my-2'>
               High quality Skin safe colours</li>
            
              </ul>
          </Tab>
          <Tab eventKey="description" title="Description">
            <div className="my-3" style={{fontWeight: "bold" , textAlign: "left"}}>
            Elevate your style and feel oh so comfortable in the Tribal Stone pants! These harem pants are everything you need and more to feel truly comfortable and at easy. The pants are made of 100% cotton and feature a full elasticated waist. Pair the pants with a simple&nbsp;tank top and some comfortable&nbsp;footwear for a complete look. Treat yourself to comfort today!
            </div>
          </Tab>
          <Tab eventKey="size" title="Size">
          <h6 className='fw-bold mx-2 text-left'>
                Features : 
              </h6>
            <ul>
              <li style={{fontWeight: "bold", textAlign: "left"}}>
                Finest Long Staple 100% cotton</li>
                <li style={{fontWeight: "bold", textAlign: "left"}}>
               Super Sized Pocket</li>
               <li style={{fontWeight: "bold", textAlign: "left"}}>
               High quality SKin safe colours</li>
            
              </ul>
          </Tab>
         </Tabs>


            {/* <dir>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item text-dark" role="presentation">
                  <button
                    className="nav-link text-dark active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Measurement
                  </button>
                </li>
                <li className="nav-item text-dark" role="presentation">
                  <button
                    className="nav-link text-dark"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    {" "}
                    Description{" "}
                  </button>
                </li>
                <li className="nav-item text-dark" role="presentation">
                  <button
                    className="nav-link text-dark"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Size
                  </button>
                </li>
              </ul>
              <div style={{marginLeft: "0px", paddingLeft: "0px"}} >
             
                <div  style={{paddingLeft: "0px", marginLeft: "0px"}}
                  // className="tab-pane fade show active container"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <p style={{ paddingTop: 20 }}>
                    <b>Free Size:</b>
                  </p>
                  <ul className='px-0 mx-0'  style={{paddingLeft: "0px", marginLeft: "0px"}}>
                    <li>
                      <b>
                        Waist : 26" - 48" (Full Elasticated Waist with
                        tightening lace)
                      </b>
                    </li>
                    <li className='px-0 mx-0' style={{paddingLeft: "0px", marginLeft: "0px"}}>
                      <b className='px-0 mx-0'  style={{paddingLeft: "0px", marginLeft: "0px"}}>Height : 40" </b>
                    </li>
                  </ul>
                  <p style={{ paddingTop: 20 }}>
                    <b>Medium : </b>
                  </p>
                  <ul>
                    <li>
                      <b>
                        Waist : 24" - 44" (Full Elasticated Waist with
                        tightening lace)
                      </b>
                    </li>
                    <li>
                      <b>Height : 38" </b>
                    </li>
                  </ul>
                  <p style={{ paddingTop: 20 }}>
                    <b>features: </b>
                  </p>
                  <ul>
                    <li>
                      <b>Finest Long Staple 100% Cotton</b>
                    </li>
                    <li>
                      <b>Super sized pocket </b>
                    </li>
                    <li>
                      <b>High quality Skin Safe Colours</b>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  style={{
                    backgroundImage: "url(assets/img/size.jpg)",
                    width: "100%",
                    height: 300,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain"
                  }}
                ></div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  {" "}
                  <p style={{ paddingTop: 20 }}>
                    <b>
                      Redefine your fashion with comfort. The Mythical Mana is
                      designed for a world of hope, desires &amp; It is all that
                      you need to make an outstanding fashion statement.Here’s
                      why you’ll love it:{" "}
                    </b>
                  </p>
                  <b>
                    <ul>
                      <li>
                        <b>
                          These harem pants are weaved from super-combed premium
                          cotton fabric.
                        </b>
                      </li>
                      <li>
                        <b>
                          Cut for a relaxed fit and elevated with a signature
                          style, these harem pants provide superb breathability
                          and hence are the most popular loungewear.
                        </b>
                      </li>
                      <li>
                        <b>
                          Rich bohemian and quirky designs elevate your style
                          statement with a bold and street chic touch.
                        </b>
                      </li>
                    </ul>
                  </b>
                </div>
                <b></b>
              </div>
              <b></b>
            </dir> */}
            <hr />
            <b>
              <div className="d-flex">
                <div
                  className="d-flex align-items-center flex-wrap"
                  style={{ paddingRight: 21 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>{" "}
                  <p style={{ paddingLeft: 6, paddingTop: 15 }}>Share</p>
                </div>
                <div
                  className="d-flex align-items-center flex-wrap"
                  style={{ paddingRight: 21 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                  <p style={{ paddingLeft: 6, paddingTop: 15 }}>Tweet</p>
                </div>
                <div
                  className="d-flex align-items-center flex-wrap"
                  style={{ paddingRight: 21 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    fill="currentColor"
                    className="bi bi-pinterest"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                  </svg>
                  <p style={{ paddingLeft: 6, paddingTop: 15 }}>Pin It</p>
                </div>
              </div>
            </b>
          </div>
          <b></b>
        </div>
        <b></b>
      </div>
      <b></b>
    </section>
  </div>
  <b></b>
</>



<section className="slider">
  <h1 className="text-center" style={{ fontFamily: "poppins", fontWeight: "bolder", fontSize: "30px" }}>
    You may also like 
  </h1>
  <div className="container">
    <div className="row">
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
      {/* <div className="flexslider col-lg-3 col-md-6 col-sm-12">
        <div className="flexslider">
          <ul className="slides">
            <li data-thumb="assets/img/TheVeshtiCompanyHaremPants50_540x.webp">
              <a
                data-fslightbox="mygalley"
                className="rounded-4"
                target="_blank"
                data-type="image"
                href="admin-panel/uploadproduct/<?php echo $imageArray[$i];?>"
              >
                <img
                  style={{ height: 350, objectFit: "contain" }}
                  src="assets/img/TheVeshtiCompanyHaremPants50_540x.webp"
                />
              </a>
            </li>
            <li data-thumb="assets/img/TheVeshtiCompanyHaremPants2_360x.webp">
              <a
                data-fslightbox="mygalley"
                className="rounded-4"
                target="_blank"
                data-type="image"
                href="admin-panel/uploadproduct/<?php echo $imageArray[$i];?>"
              >
                <img
                  style={{ height: 350, objectFit: "contain", width: "100%" }}
                  src="assets/img/TheVeshtiCompanyHaremPants2_360x.webp"
                />
              </a>
            </li>
          </ul>
        </div>
        <h2 style={{ position: "absolute", top: 365 }}>
          Lorem ipsum dolor sit amet.
        </h2>
        <p style={{ position: "absolute", left: 100, top: 400 }}>
          <del> ₹3,000</del> ₹1999
        </p>
      </div>
      <div className="flexslider col-lg-3 col-md-6 col-sm-12">
        <div className="flexslider">
          <ul className="slides">
            <li data-thumb="assets/img/VeshtiCompanyHaremPants1_c404fad7-cfa0-4ae3-a4f0-789c30a0c43b_360x.webp">
              <a
                data-fslightbox="mygalley"
                className="rounded-4"
                target="_blank"
                data-type="image"
                href="admin-panel/uploadproduct/<?php echo $imageArray[$i];?>"
              >
                <img
                  style={{ height: 350, objectFit: "contain" }}
                  src="assets/img/VeshtiCompanyHaremPants1_c404fad7-cfa0-4ae3-a4f0-789c30a0c43b_360x.webp"
                />
              </a>
            </li>
            <li data-thumb="assets/img/22.webp">
              <a
                data-fslightbox="mygalley"
                className="rounded-4"
                target="_blank"
                data-type="image"
                href="admin-panel/uploadproduct/<?php echo $imageArray[$i];?>"
              >
                <img
                  style={{ height: 350, objectFit: "contain", width: "100%" }}
                  src="assets/img/22.webp"
                />
              </a>
            </li>
          </ul>
        </div>
        <h2 style={{ position: "absolute", top: 365 }}>
          Lorem ipsum dolor sit amet.
        </h2>
        <p style={{ position: "absolute", left: 100, top: 400 }}>
          <del> ₹3,000</del> ₹1999
        </p>{" "}
      </div>
      <div className="flexslider col-lg-3 col-md-6 col-sm-12">
        <div className="flexslider">
          <ul className="slides">
            <li data-thumb="assets/img/23.webp">
              <a
                data-fslightbox="mygalley"
                className="rounded-4"
                target="_blank"
                data-type="image"
                href="admin-panel/uploadproduct/<?php echo $imageArray[$i];?>"
              >
                <img
                  style={{ height: 350, objectFit: "contain" }}
                  src="assets/img/23.webp"
                />
              </a>
            </li>
            <li data-thumb="assets/img/24.webp">
              <a
                data-fslightbox="mygalley"
                className="rounded-4"
                target="_blank"
                data-type="image"
                href="admin-panel/uploadproduct/<?php echo $imageArray[$i];?>"
              >
                <img
                  style={{ height: 350, objectFit: "contain", width: "100%" }}
                  src="assets/img/24.webp"
                />
              </a>
            </li>
          </ul>
        </div>
        <h2 style={{ position: "absolute", top: 365 }}>
          Lorem ipsum dolor sit amet.
        </h2>
        <p style={{ position: "absolute", left: 100, top: 400 }}>
          <del> ₹3,000</del> ₹1999
        </p>{" "}
      </div>
      <div className="flexslider col-lg-3 col-md-6 col-sm-12">
        <div className="flexslider">
          <ul className="slides">
            <li data-thumb="assets/img/25.webp">
              <a
                data-fslightbox="mygalley"
                className="rounded-4"
                target="_blank"
                data-type="image"
                href="admin-panel/uploadproduct/<?php echo $imageArray[$i];?>"
              >
                <img
                  style={{ height: 350, objectFit: "contain" }}
                  src="assets/img/25.webp"
                />
              </a>
            </li>
            <li data-thumb="assets/img/26.webp">
              <a
                data-fslightbox="mygalley"
                className="rounded-4"
                target="_blank"
                data-type="image"
                href="admin-panel/uploadproduct/<?php echo $imageArray[$i];?>"
              >
                <img
                  style={{ height: 350, objectFit: "contain", width: "100%" }}
                  src="assets/img/26.webp"
                />
              </a>
            </li>
          </ul>
        </div>
        <h2 style={{ position: "absolute", top: 365 }}>
          Lorem ipsum dolor sit amet.
        </h2>
        <p style={{ position: "absolute", left: 100, top: 400 }}>
          <del> ₹3,000</del> ₹1999
        </p>{" "}
      </div> */}
    </div>
  </div>
</section>

<section>
  <div className="container" id="container-last">
    <h4>
      <b className="text-start">Recently Viewed</b>
    </h4>
    <div className="row">
      <div className="col-lg-2 col-md-3 col-md-6 d-flex flex-column align-items-center">
        <div className="d-flex ">
          <img
            style={{
              objectFit: "contain",
              borderRadius: 16,
              position: "relative"
            }}
            src="assets/img/TheVeshtiCompanyHaremPants1_medium.avif"
            alt=""
          />
          <p
            style={{
              color: "white",
              background: "#b77b12",
              borderRadius: "50%",
              marginLeft: "-30px",
              zIndex: 0,
              height: 50,
              display: "flex",
              alignItems: "center",
              fontSize: "15px",
              fontWeight: "bold",
              padding: "0px 10px",
              marginTop: "-10px"
            }}
          >
            33%
          </p>
        </div>
        <p style={{ paddingTop: 6, marginLeft: "-14px", marginBottom: 0 }}>
          <b>Terra Fragments</b>
        </p>
        <p
          style={{
            marginLeft: "-14px",
            marginBottom: 0,
            fontWeight: "normal",
            fontSize: "large"
          }}
        >
          {" "}
          ₹1,999.00
        </p>
        <select
          name=""
          id=""
          style={{
            border: "3px solid whitesmoke",
            height: 50,
            width: "80%",
            color: "rgba(0, 0, 0, 0.6)",
            boxShadow: "1px 1px  rgba(0, 0, 0, 0.5)"
          }}
        >
          <option value="black">Black-Beige / Men / Free Size</option>
          <option value="black">Black-Beige / Women / Free Size</option>
          <option value="black">Brown / Men / Free Size</option>
          <option value="black">Brown / Women / Free Size</option>
          <option value="black">Blue / Men / Free Size</option>
          <option value="black">Blue / Women / Free Size</option>
          <option value="black">Orange / Men / Free Size</option>
          <option value="black">Orange / Women / Free Size</option>
          <option value="black">Red / Men / Free Size</option>
          <option value="black">Red / Women / Free Size</option>
        </select>{" "}
        <br />
        <div
          className="d-flex align-items-center shade justify-content-center"
          style={{ border: "2px solid rgb(0, 0, 0)", height: 40, width: "80%" }}
        >
          <a href="" style={{ textDecoration: "none", color: "rgb(0, 0, 0)" }}>
            <p style={{ margin: 0 }}>
              <b>Add to Cart</b>
            </p>
          </a>
        </div>
      </div>
      {/* <div className="col-lg-2 col-md-3 col-md-6 d-flex flex-column align-items-center">
        <div className="d-flex ">
          <img
            style={{
              objectFit: "contain",
              borderRadius: 16,
              position: "relative"
            }}
            src="assets/img/TheVeshtiCompanyHaremPants1_medium.avif"
            alt=""
          />
          <h4
            style={{
              color: "white",
              background: "#b77b12",
              borderRadius: "50%",
              marginLeft: "-25px",
              zIndex: 0,
              height: 50,
              display: "flex",
              alignItems: "center"
            }}
          >
            33%
          </h4>
        </div>
        <p style={{ paddingTop: 6, marginLeft: "-14px", marginBottom: 0 }}>
          <b>Terra Fragments</b>
        </p>
        <p
          style={{
            marginLeft: "-14px",
            marginBottom: 0,
            fontWeight: "normal",
            fontSize: "large"
          }}
        >
          {" "}
          ₹1,999.00
        </p>
        <select
          name=""
          id=""
          style={{
            border: "3px solid whitesmoke",
            height: 50,
            width: "80%",
            color: "rgba(0, 0, 0, 0.6)",
            boxShadow: "1px 1px  rgba(0, 0, 0, 0.5)"
          }}
        >
          <option value="black">Black-Beige / Men / Free Size</option>
          <option value="black">Black-Beige / Women / Free Size</option>
          <option value="black">Brown / Men / Free Size</option>
          <option value="black">Brown / Women / Free Size</option>
          <option value="black">Blue / Men / Free Size</option>
          <option value="black">Blue / Women / Free Size</option>
          <option value="black">Orange / Men / Free Size</option>
          <option value="black">Orange / Women / Free Size</option>
          <option value="black">Red / Men / Free Size</option>
          <option value="black">Red / Women / Free Size</option>
        </select>{" "}
        <br />
        <div
          className="d-flex align-items-center shade justify-content-center"
          style={{ border: "2px solid rgb(0, 0, 0)", height: 40, width: "80%" }}
        >
          <a href="" style={{ textDecoration: "none", color: "rgb(0, 0, 0)" }}>
            <p style={{ margin: 0 }}>
              <b>Add to Cart</b>
            </p>
          </a>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-md-6 d-flex flex-column align-items-center">
        <div className="d-flex ">
          <img
            style={{
              objectFit: "contain",
              borderRadius: 16,
              position: "relative"
            }}
            src="assets/img/TheVeshtiCompanyHaremPants1_medium.avif"
            alt=""
          />
          <h4
            style={{
              color: "white",
              background: "#b77b12",
              borderRadius: "50%",
              marginLeft: "-25px",
              zIndex: 0,
              height: 50,
              display: "flex",
              alignItems: "center"
            }}
          >
            33%
          </h4>
        </div>
        <p style={{ paddingTop: 6, marginLeft: "-14px", marginBottom: 0 }}>
          <b>Terra Fragments</b>
        </p>
        <p
          style={{
            marginLeft: "-14px",
            marginBottom: 0,
            fontWeight: "normal",
            fontSize: "large"
          }}
        >
          {" "}
          ₹1,999.00
        </p>
        <select
          name=""
          id=""
          style={{
            border: "3px solid whitesmoke",
            height: 50,
            width: "80%",
            color: "rgba(0, 0, 0, 0.6)",
            boxShadow: "1px 1px  rgba(0, 0, 0, 0.5)"
          }}
        >
          <option value="black">Black-Beige / Men / Free Size</option>
          <option value="black">Black-Beige / Women / Free Size</option>
          <option value="black">Brown / Men / Free Size</option>
          <option value="black">Brown / Women / Free Size</option>
          <option value="black">Blue / Men / Free Size</option>
          <option value="black">Blue / Women / Free Size</option>
          <option value="black">Orange / Men / Free Size</option>
          <option value="black">Orange / Women / Free Size</option>
          <option value="black">Red / Men / Free Size</option>
          <option value="black">Red / Women / Free Size</option>
        </select>{" "}
        <br />
        <div
          className="d-flex align-items-center shade justify-content-center"
          style={{ border: "2px solid rgb(0, 0, 0)", height: 40, width: "80%" }}
        >
          <a href="" style={{ textDecoration: "none", color: "rgb(0, 0, 0)" }}>
            <p style={{ margin: 0 }}>
              <b>Add to Cart</b>
            </p>
          </a>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-md-6 d-flex flex-column align-items-center">
        <div className="d-flex ">
          <img
            style={{
              objectFit: "contain",
              borderRadius: 16,
              position: "relative"
            }}
            src="assets/img/TheVeshtiCompanyHaremPants1_medium.avif"
            alt=""
          />
          <h4
            style={{
              color: "white",
              background: "#b77b12",
              borderRadius: "50%",
              marginLeft: "-25px",
              zIndex: 0,
              height: 50,
              display: "flex",
              alignItems: "center"
            }}
          >
            33%
          </h4>
        </div>
        <p style={{ paddingTop: 6, marginLeft: "-14px", marginBottom: 0 }}>
          <b>Terra Fragments</b>
        </p>
        <p
          style={{
            marginLeft: "-14px",
            marginBottom: 0,
            fontWeight: "normal",
            fontSize: "large"
          }}
        >
          {" "}
          ₹1,999.00
        </p>
        <select
          name=""
          id=""
          style={{
            border: "3px solid whitesmoke",
            height: 50,
            width: "80%",
            color: "rgba(0, 0, 0, 0.6)",
            boxShadow: "1px 1px  rgba(0, 0, 0, 0.5)"
          }}
        >
          <option value="black">Black-Beige / Men / Free Size</option>
          <option value="black">Black-Beige / Women / Free Size</option>
          <option value="black">Brown / Men / Free Size</option>
          <option value="black">Brown / Women / Free Size</option>
          <option value="black">Blue / Men / Free Size</option>
          <option value="black">Blue / Women / Free Size</option>
          <option value="black">Orange / Men / Free Size</option>
          <option value="black">Orange / Women / Free Size</option>
          <option value="black">Red / Men / Free Size</option>
          <option value="black">Red / Women / Free Size</option>
        </select>{" "}
        <br />
        <div
          className="d-flex align-items-center shade justify-content-center"
          style={{ border: "2px solid rgb(0, 0, 0)", height: 40, width: "80%" }}
        >
          <a href="" style={{ textDecoration: "none", color: "rgb(0, 0, 0)" }}>
            <p style={{ margin: 0 }}>
              <b>Add to Cart</b>
            </p>
          </a>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-md-6 d-flex flex-column align-items-center">
        <div className="d-flex ">
          <img
            style={{
              objectFit: "contain",
              borderRadius: 16,
              position: "relative"
            }}
            src="assets/img/TheVeshtiCompanyHaremPants1_medium.avif"
            alt=""
          />
          <h4
            style={{
              color: "white",
              background: "#b77b12",
              borderRadius: "50%",
              marginLeft: "-25px",
              zIndex: 0,
              height: 50,
              display: "flex",
              alignItems: "center"
            }}
          >
            33%
          </h4>
        </div>
        <p style={{ paddingTop: 6, marginLeft: "-14px", marginBottom: 0 }}>
          <b>Terra Fragments</b>
        </p>
        <p
          style={{
            marginLeft: "-14px",
            marginBottom: 0,
            fontWeight: "normal",
            fontSize: "large"
          }}
        >
          {" "}
          ₹1,999.00
        </p>
        <select
          name=""
          id=""
          style={{
            border: "3px solid whitesmoke",
            height: 50,
            width: "80%",
            color: "rgba(0, 0, 0, 0.6)",
            boxShadow: "1px 1px  rgba(0, 0, 0, 0.5)"
          }}
        >
          <option value="black">Black-Beige / Men / Free Size</option>
          <option value="black">Black-Beige / Women / Free Size</option>
          <option value="black">Brown / Men / Free Size</option>
          <option value="black">Brown / Women / Free Size</option>
          <option value="black">Blue / Men / Free Size</option>
          <option value="black">Blue / Women / Free Size</option>
          <option value="black">Orange / Men / Free Size</option>
          <option value="black">Orange / Women / Free Size</option>
          <option value="black">Red / Men / Free Size</option>
          <option value="black">Red / Women / Free Size</option>
        </select>{" "}
        <br />
        <div
          className="d-flex align-items-center shade justify-content-center"
          style={{ border: "2px solid rgb(0, 0, 0)", height: 40, width: "80%" }}
        >
          <a href="" style={{ textDecoration: "none", color: "rgb(0, 0, 0)" }}>
            <p style={{ margin: 0 }}>
              <b>Add to Cart</b>
            </p>
          </a>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-md-6 d-flex flex-column align-items-center">
        <div className="d-flex ">
          <img
            style={{
              objectFit: "contain",
              borderRadius: 16,
              position: "relative"
            }}
            src="assets/img/TheVeshtiCompanyHaremPants1_medium.avif"
            alt=""
          />
          <h4
            style={{
              color: "white",
              background: "#b77b12",
              borderRadius: "50%",
              marginLeft: "-25px",
              zIndex: 0,
              height: 50,
              display: "flex",
              alignItems: "center"
            }}
          >
            33%
          </h4>
        </div>
        <p style={{ paddingTop: 6, marginLeft: "-14px", marginBottom: 0 }}>
          <b>Terra Fragments</b>
        </p>
        <p
          style={{
            marginLeft: "-14px",
            marginBottom: 0,
            fontWeight: "normal",
            fontSize: "large"
          }}
        >
          {" "}
          ₹1,999.00
        </p>
        <select
          name=""
          id=""
          style={{
            border: "3px solid whitesmoke",
            height: 50,
            width: "80%",
            color: "rgba(0, 0, 0, 0.6)",
            boxShadow: "1px 1px  rgba(0, 0, 0, 0.5)"
          }}
        >
          <option value="black">Black-Beige / Men / Free Size</option>
          <option value="black">Black-Beige / Women / Free Size</option>
          <option value="black">Brown / Men / Free Size</option>
          <option value="black">Brown / Women / Free Size</option>
          <option value="black">Blue / Men / Free Size</option>
          <option value="black">Blue / Women / Free Size</option>
          <option value="black">Orange / Men / Free Size</option>
          <option value="black">Orange / Women / Free Size</option>
          <option value="black">Red / Men / Free Size</option>
          <option value="black">Red / Women / Free Size</option>
        </select>{" "}
        <br />
        <div
          className="d-flex align-items-center shade justify-content-center"
          style={{ border: "2px solid rgb(0, 0, 0)", height: 40, width: "80%" }}
        >
          <a href="" style={{ textDecoration: "none", color: "rgb(0, 0, 0)" }}>
            <p style={{ margin: 0 }}>
              <b>Add to Cart</b>
            </p>
          </a>
        </div>
      </div> */}
    </div>
  </div>
</section>

  </>)
}

export default Product;