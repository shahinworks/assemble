import React, { useState , useEffect} from 'react';
import { CaretLeft, CaretRight } from 'react-bootstrap-icons';
import { Button, Modal, Card } from 'react-bootstrap';


function MidSection() {
  return (<>
    {/* <section id="hero">
      <div id="heroCarousel" data-bs-interval={1000} className="carousel slide carousel-fade" data-bs-ride="carousel" >
        <ol className="carousel-indicators" id="hero-carousel-indicators" />
          <div id="carouselExampleAutoplaying"  className="carousel-inner" role="listbox">
            <div className="carousel-item active" style={{  backgroundImage: "url(assets/img/hero-bg.jpg)", backgroundSize: "cover" }}>
              <div className="carousel-container ">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown"> COMFYAF <br /> ESSENTIALS </h2>
                   <p>#BEDRESSPONSIBLE</p>
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{ backgroundImage:"url(assets/img/trendy-stylish-woman-rejoicing-with-sales-shopping-time-isolated-pink-wearing-casual-outfit_273443-4585.avif)" }}>
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown"> #BE <br /> DRESS <br /> PONSIBLE </h2>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev"  type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true" > <CaretLeft color='black' size={33} /> </span>    
          </button>
          <button className="carousel-control-next"  type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true" > <CaretRight color='black' size={33} /> </span>
          </button>


    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <i className="bi bi-arrow-bar-left carousel-control-prev-icon" aria-hidden="true"></i>

      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <i className="bi bi-arrow-bar-right carousel-control-next-icon" aria-hidden="true"></i>
      </a>


  </div>
</section> */}

<section  id="hero" >
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="assets/img/hero-bg.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src='assets/img/trendy-stylish-woman-rejoicing-with-sales-shopping-time-isolated-pink-wearing-casual-outfit_273443-4585.avif' alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="assets/img/VeshtiCompanyHaremPants1_c404fad7-cfa0-4ae3-a4f0-789c30a0c43b_540x.webp" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true">
    <CaretLeft color='black' size={33} />
    </span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true">
    <CaretRight color='black' size={33} /> 
    </span>
  </a>
    </div> 
    </section>
  </>)
}

export default MidSection;