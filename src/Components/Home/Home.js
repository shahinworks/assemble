import React, { useState , useEffect} from 'react';
import {Speedometer, List, Person, Search, Cart, Bag, CaretLeft, CaretRight, ChevronLeft, ChevronRight} from 'react-bootstrap-icons';
import { Button, Modal, Card, Row, Col } from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';
import { useNavigate, Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './Home.css';
import MediaQuery from 'react-responsive';
import Instagram from './Instagram/Instagram';

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

    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
      {homePageSlider?.getAllHomePageSlider && homePageSlider?.getAllHomePageSlider[0]?.images && <div className="carousel-item active">
          <img className="d-block w-100" 
          // style={{height: "700px", width: "1200px"}} 
          src={homePageSlider?.getAllHomePageSlider[0]?.images} alt="First slide" />
        </div>}
      {homePageSlider?.getAllHomePageSlider &&  homePageSlider?.getAllHomePageSlider?.map((item, index) => index > 0 &&
        <div key={item.id} className="carousel-item">
          <img className="d-block w-100" 
          // style={{height: "30%"}} 
         // style={{height: "700px", width: "1200px"}} 
          src={item.images} alt="Second slide" />
        </div>)} 
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
                {product && <Carousel responsive={responsive} >
                  {product && product?.getAllProducts?.map((data, index) => 
                    <div key={index} className='mx-5' >
                      <img src={data?.images[0]?.imagePath[0]}
                        style={{width: "300px", height: "450px"}}
                        alt="Image 2" />
                      <a href={`/shop/product/${data.id}`} className='stretched-link'> <h4 className="text-center text-black">{data.productName}</h4> </a>
                      {/* <Link to={`/product/${data.id}`} className='stretched-link'> <h4 className="text-center text-black">{data.productName}</h4> </Link> */}
                      <h4 className="fs-5 text-center"> ₹ {data.sellingPrice }</h4>
                   </div>)}
                </Carousel>}
              </div>
            </div>
          </div>
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

      <Instagram /> 
  </>)
}

export default Home;