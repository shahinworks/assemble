import React, { useState , useEffect} from 'react';
import {Speedometer, List, Person, Search, Cart, Bag, CaretLeft, CaretRight, ChevronLeft, ChevronRight} from 'react-bootstrap-icons';
import { Button, Modal, Card, Row, Col } from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';
import { useNavigate, Link } from 'react-router-dom';

import './Home.css';
import MediaQuery from 'react-responsive';
import Header from '../Sections/Header/Header';

function Home() {

  const navigate = useNavigate();
  const [header, setHeader] = useState("header");

  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const [ editModal, setEditModal] = useState(false);

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

  const handleNext = () => {

  }
  const handlePrev = () => {
    
  }

  const GET_HOME_PAGE_SLIDER = gql`
    query GetAllHomePageSlider {
      getAllHomePageSlider {
        id
        images
        url
        content
      }
    }
  `;

  const {data: homePageSlider} = useQuery(GET_HOME_PAGE_SLIDER);
  if(homePageSlider){
    console.log("homePageSlider", homePageSlider);
  }

  // onClick={() => goToProductPage(data.id)}

  // function goToProductPage(id){
  //   console.log(id);
  //   navigate(`/product/${id}`);
  // }

  
  // handlePrev
  // handleNext
  return (<>
  {/* <Header /> */}
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="assets/img/hero-bg.jpg" alt="First slide" />
        </div>
      {homePageSlider?.getAllHomePageSlider &&  homePageSlider?.getAllHomePageSlider?.map((item) =>
        <div key={item} className="carousel-item">
          <img className="d-block w-100" src={item.images} alt="Second slide" />
        </div>)}
    {/* <div className="carousel-item">
      <img className="d-block w-100" src="assets/img/VeshtiCompanyHaremPants1_c404fad7-cfa0-4ae3-a4f0-789c30a0c43b_540x.webp" alt="Third slide" />
    </div> */}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" /> 
    {/* <CaretLeft color='black' size={33} /> */}
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" /> 
    {/* <CaretRight color='black' size={33} />  */}
    </a>
    </div> 

    <section id="about" className="about">
      <p className="text-center">#BEDRESSPONSIBLE</p>
      <h1 className="text-center">The Vagabond Hipster Series</h1> <br /> <br />
      <div className="container">
        <div id="carouselExampleControlsDamn" className="carousel slide" data-ride="carousel" >
          <div className="carousel-inner">
            
             <div className="carousel-item active">
             <div className="row row1">
             {product && product?.getAllProducts?.map((data, index) => <div key={data.id}  className="col-lg-4 col-md-4 col-sm-6">
                 <img src={data.images} alt=""/>
                <Link to={`/product/${data.id}`}> <h4 className="text-center">{data.productName}</h4> </Link>
                 <p className="text-center"> <del>121212</del>{data.sellingPrice }</p>
               </div> )}
               {/* <div className="col-lg-4 col-md-4 col-sm-6">
               <img src="assets/img/TheVeshticompanyHaremPants5_705544aa-d64f-46ae-bdcd-78bf2fe50905_540x.webp" alt="" />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
           <p className="text-center">
             <del>4534534</del>999
           </p>
               </div> */}
               {/* <div className="col-lg-4 col-md-4 col-sm-6">
           <img
             src="assets/img/VeshtiCompanyHaremPants1_c404fad7-cfa0-4ae3-a4f0-789c30a0c43b_540x.webp"
             alt=""
           />
           <h4 className="text-center">Lorem, ipsum dolor.</h4>
           <p className="text-center">0932 </p>
               </div> */}
             </div>
           </div>
           
              {/* <div className="carousel-item">
          <div className="row row1">
           <MediaQuery minWidth={769} >
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src='assets/img/31.jpg'
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>333333</del>999
              </p>
            </div> </MediaQuery>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/TheVeshticompanyHaremPants5_705544aa-d64f-46ae-bdcd-78bf2fe50905_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
555555              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/VeshtiCompanyHaremPants1_c404fad7-cfa0-4ae3-a4f0-789c30a0c43b_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>10000</del>999
              </p>
            </div>
          </div>
              </div>
              <div className="carousel-item">
          <div className="row row1">
          <MediaQuery minWidth={769} > 
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/TheVeshtiCompanyHaremPants50_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>7777777777</del>999
              </p>
            </div> </MediaQuery>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/TheVeshticompanyHaremPants5_705544aa-d64f-46ae-bdcd-78bf2fe50905_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
888888888888888              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/VeshtiCompanyHaremPants1_c404fad7-cfa0-4ae3-a4f0-789c30a0c43b_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>99999999</del>999
              </p>
            </div>
          </div>
              </div> */}
          </div>
          <MediaQuery minWidth={576} >
          <a className="carousel-control-prev" href="#carouselExampleControlsDamn" role="button"  data-slide="prev" onClick={() => handlePrev()} >
              <ChevronLeft color='black' size={33} />
          </a>
          <a className="carousel-control-next" href="#carouselExampleControlsDamn" role="button" data-slide="next"  onClick={() => handleNext()}>
              <ChevronRight color='black' size={33} />
          </a>
          </MediaQuery>
        </div>
      </div>
    </section>
      <MediaQuery minWidth={769} >
        <Row className='SideRow' >
            <Col className='SideColLeft col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center'> 
            <Row>
            <h4 style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway" , letterSpacing: "2px"}} className='mx-4 text-left'>UNIQUE & UNISEX</h4>
            <h5 style={{fontSize: "50px", fontFamily: "league gothic"}} className='mx-4 text-left'>Hipster Series</h5>
           <p style={{ fontFamily: "raleway", fontSize: "20px"}} className='mx-4 text-left'> The Hipster Series compliments all your quirks and crazines. Explore Playful prints, Fun colors and Unique designs that flatters your every move.
            </p> 
            <Col className='ms-4 text-left'>
            <Button  style={{backgroundColor: "black", color: "white", fontWeight: "bolder", borderRadius: "0px"}}>
                Shop Hipster Series</Button> 
                </Col>
               <Col   className='me-4 text-left'> <Button  style={{backgroundColor: "black", color: "white", fontWeight: "bolder", borderRadius: "0px"}}>
                Shop ALL</Button> 
              </Col>
                </Row>
            </Col>
            <Col className='col-lg-6 col-md-6 col-sm-12  justify-content-center  SideColRightImage'>
            <img src="assets/img/HD-wallpaper-d-red-model-shopping-yellow-woman-laptop-girl-funny-white-thumbnail.jpg" alt="" />
            </Col>
        </Row>
        <Row  className='SideRow'>
          <Col className='SideColLeftImage  col-lg-6 col-md-6 col-sm-12'>
            <img src="assets/img/HD-wallpaper-d-red-model-shopping-yellow-woman-laptop-girl-funny-white-thumbnail.jpg" alt="" />
          </Col>
          <Col className='col-lg-5 col-md-5 col-sm-12 d-flex SideColRight ' > 
            <Row>
              <h4 style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}} className='mx-4 text-left'>#BEDRESSPONSIBLE</h4>
              <h5 style={{fontSize: "50px", fontFamily: "league gothic"}} className='mx-4 text-left'>The Vagabond</h5>
              <p style={{ fontFamily: "raleway", fontSize: "20px"}} className='mx-4 text-left'> 
           Inspired from the earthy roots of Bohemian Culture, The vagabond collection transcends the realm of ordinary fashion with bewitching bohemian harem pants.
              </p> 
              <Col className='ms-4 text-left'>
                <Button  style={{backgroundColor: "black", color: "white", fontWeight: "bolder", borderRadius: "0px"}}>
                Shop The Vagabond</Button>
              </Col>
              <Col className='me-4 text-left'> <Button  style={{backgroundColor: "black", color: "white", fontWeight: "bolder", borderRadius: "0px"}}>
                Shop ALL</Button>
              </Col>
            </Row>
          </Col>
        </Row>  
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <Row className='mx-2'>
          <h4 style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway" , letterSpacing: "2px"}}
            className='mx-4 text-left'>UNIQUE & UNISEX</h4>
          <h5 style={{fontSize: "50px", fontFamily: "league gothic"}} className='mx-4 text-left'>Hipster Series</h5>
          <div style={{ fontFamily: "raleway", fontSize: "20px", marginRight: "35px", paddingRight: "35px"}} className='mx-4 text-left d-flex'>The Hipster Series compliments all your quirks and crazines. 
          Explore Playful prints, 
          Fun colors and Unique designs that flatters your every move.
          </div> 
          <Col className='mt-4 ms-4 text-left'>
            <Button  style={{backgroundColor: "black", color: "white", fontWeight: "bolder", borderRadius: "0px"}}>
                Shop Hipster Series
            </Button> 
          </Col>
          <Col className='mt-4 ms-4 text-left'>
            <Button style={{backgroundColor: "black", color: "white", fontWeight: "bolder", borderRadius: "0px"}}>
                Shop ALL
            </Button> 
          </Col>
        </Row>
        <Row className='my-5'> <img src="assets/img/HD-wallpaper-d-red-model-shopping-yellow-woman-laptop-girl-funny-white-thumbnail.jpg" alt="" /></Row>
        <Row className='mx-2'>
        <h4 style={{fontSize: "20px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}} className='mx-4 text-left'>#BEDRESSPONSIBLE</h4>
            <h5 style={{fontSize: "50px", fontFamily: "league gothic"}} className='mx-4 text-left'>The Vagabond</h5>
           <p style={{ fontFamily: "raleway", fontSize: "20px"}} className='mx-4 text-left'> 
           Inspired from the earthy roots of Bohemian Culture, The vagabond collection transcends the realm of ordinary fashion with bewitching bohemian harem pants.
            </p> 
            <Col className='mt-4  ms-4 text-left'>
            <Button  style={{backgroundColor: "black", color: "white", fontWeight: "bolder", borderRadius: "0px"}}>
                Shop The Vagabond</Button> </Col>
               <Col   className='mt-4  ms-4 text-left'> <Button  style={{backgroundColor: "black", color: "white", fontWeight: "bolder", borderRadius: "0px"}}>
                Shop ALL</Button> </Col>
        </Row>
        <Row className='my-5'> 
        <img  src="assets/img/HD-wallpaper-d-red-model-shopping-yellow-woman-laptop-girl-funny-white-thumbnail.jpg" alt="" /></Row>
      </MediaQuery>


      <Row  className='SideRow'>
        <div className="position-relative">
        <iframe
        id="YouTubeVideo-template--16577403715829__hero-video"
        className="video-div iframe"
        data-type="youtube"
        data-video-id="CSp5KEg4K-g"
        frameBorder={0}
        // allowFullScreen={1}
         width="100%"
         height="100%"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         title="The Veshti Company - An ode to all the ones who wear their opinions & are proud to #BEDRESSPONSIBLE!"
         src="https://www.youtube.com/embed/CSp5KEg4K-g?autohide=0&cc_load_policy=0&controls=0&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&&autoplay=1;origin=https%3A%2F%2Ftheveshticompany.com&widgetid=1?autoplay=1&mute=1"
         tabIndex={-1}
         data-gtm-yt-inspected-11="true"
      />

 <div className='text-left position-absolute' style={{paddingLeft: "80px", paddingTop:"80px"}}>
   <h1 style={{fontSize: "80px", fontWeight: 'bold'}}>#BE</h1>
   <h1 style={{fontSize: "80px", fontWeight: 'bold'}}>DRESS</h1>
   <h1 style={{fontSize: "80px", fontWeight: 'bold'}}>PONSIBLE</h1>
  </div>
       </div>
      </Row>

   <section id="instagram">
    <h1 className="text-center mt-5" style={{marginTop: "30px"}}>Check out our Instagram</h1>
    <p className="text-center">#BeDressponsible</p>
    <br />
    <br />
    <div className="container justify-content-center" style={{ marginLeft: "20% !important", paddingLeft: "100px" , paddingRight: "20px"}}>
      <div className="row portfolio text-light">
        <div className="col-lg-4 col-md-6 col-sm-6 div1">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div2">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div3">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div4">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div5">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div6">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div7">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div8">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 div9">
          <div style={{ width: "80%" }} className="minilogo ">
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <path
                d="M17.7 1.5c-2 0-3.3.5-4.9 2.1l-.7.7-.7-.7c-1.6-1.6-3-2.1-5-2.1C2.6 1.5 0 4.6 0 8.3c0 4.2 3.4 7.1 8.6 11.5.9.8 1.9 1.6 2.9 2.5.1.1.3.2.5.2s.3-.1.5-.2c1.1-1 2.1-1.8 3.1-2.7 4.8-4.1 8.5-7.1 8.5-11.4-.1-3.6-2.7-6.7-6.4-6.7zm-3.1 17.1c-.8.7-1.7 1.5-2.6 2.3-.9-.7-1.7-1.4-2.5-2.1-5-4.2-8.1-6.9-8.1-10.5 0-3.1 2.1-5.5 4.9-5.5 1.5 0 2.6.3 3.8 1.5l1.2 1.2c.3.4.4.5.7.6.3 0 .5-.2.7-.4 0 0 .2-.2 1.2-1.3 1.3-1.3 2.1-1.5 3.8-1.5 2.8 0 4.9 2.4 4.9 5.5 0 3.5-3.2 6.2-8 10.2z"
                fill="white"
              />
            </svg>
            <h6 style={{ margin: 10 }}>38</h6>
            <svg
              style={{ margin: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.626 511.627"
              width={14}
              height={14}
            >
              <path
                d="M477.364 127.481c-22.839-28.072-53.864-50.248-93.072-66.522-39.208-16.274-82.036-24.41-128.479-24.41-46.442 0-89.269 8.136-128.478 24.41s-70.233 38.446-93.074 66.522C11.419 155.555 0 186.15 0 219.269c0 28.549 8.61 55.299 25.837 80.232 17.227 24.934 40.778 45.874 70.664 62.813-2.096 7.611-4.57 14.842-7.426 21.7-2.855 6.851-5.424 12.467-7.708 16.847-2.286 4.374-5.376 9.23-9.281 14.555-3.899 5.332-6.849 9.093-8.848 11.283a4550.42 4550.42 0 0 0-9.851 10.848c-4.565 5.041-7.517 8.33-8.848 9.853-.193.097-.953.948-2.285 2.574-1.331 1.615-1.999 2.419-1.999 2.419l-1.713 2.57c-.953 1.42-1.381 2.327-1.287 2.703.096.384-.094 1.335-.57 2.854-.477 1.526-.428 2.669.142 3.429v.287c.762 3.234 2.283 5.853 4.567 7.851 2.284 1.992 4.858 2.991 7.71 2.991h1.429c12.375-1.526 23.223-3.613 32.548-6.279 49.87-12.751 93.649-35.782 131.334-69.094 14.274 1.523 28.074 2.283 41.396 2.283 46.442 0 89.271-8.135 128.479-24.414 39.208-16.276 70.233-38.444 93.072-66.517 22.843-28.072 34.263-58.67 34.263-91.789.001-33.114-11.418-63.713-34.261-91.787zm-32.12 164.594c-19.896 22.456-46.733 40.303-80.517 53.529-33.784 13.223-70.093 19.842-108.921 19.842-11.609 0-23.98-.76-37.113-2.286l-16.274-1.708-12.277 10.852c-23.408 20.558-49.582 36.829-78.513 48.821 8.754-15.414 15.416-31.785 19.986-49.102l7.708-27.412-24.838-14.27c-24.744-14.093-43.918-30.793-57.53-50.114-13.61-19.315-20.412-39.638-20.412-60.954 0-26.077 9.945-50.343 29.834-72.803 19.895-22.458 46.729-40.303 80.515-53.531 33.786-13.229 70.089-19.849 108.92-19.849 38.828 0 75.13 6.617 108.914 19.845 33.783 13.229 60.62 31.073 80.517 53.531 19.89 22.46 29.834 46.727 29.834 72.802s-9.944 50.347-29.833 72.807z"
                fill="white"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <path
                d="M17.1 1H6.9C3.7 1 1 3.7 1 6.9V17c0 3.3 2.7 6 5.9 6H17c3.3 0 5.9-2.7 5.9-5.9V6.9C23 3.7 20.3 1 17.1 1zm4.4 16.1c0 2.4-2 4.4-4.4 4.4H6.9c-2.4 0-4.4-2-4.4-4.4V6.9c0-2.4 2-4.4 4.4-4.4h10.3c2.4 0 4.4 2 4.4 4.4v10.2z"
                fill="#FFF"
              />
              <path
                d="M16.9 11.2c-.2-1.1-.6-2-1.4-2.8-.8-.8-1.7-1.2-2.8-1.4-.5-.1-1-.1-1.4 0-1.3.3-2.4 1-3.2 2s-1.1 2.4-.9 3.7c.2 1.3.8 2.4 1.9 3.2.9.6 1.9 1 2.9 1 .2 0 .5 0 .7-.1 1.3-.2 2.5-.9 3.2-1.9.9-1.1 1.2-2.4 1-3.7zm-4.3 4.2c-.9.1-1.8-.1-2.6-.6-.7-.6-1.2-1.4-1.4-2.3-.1-.9.1-1.8.6-2.6.6-.7 1.4-1.2 2.3-1.4h1c1.5.2 2.7 1.4 2.9 2.9.4 1.9-.9 3.7-2.8 4zM18.4 5.6c-.2-.2-.4-.3-.6-.3s-.5.1-.6.3c-.2.2-.3.4-.3.6s.1.5.3.6c.2.2.4.3.6.3s.5-.1.6-.3c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>


  
  </>)
}

export default Home;