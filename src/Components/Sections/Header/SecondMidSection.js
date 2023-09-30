import React from 'react';
import { CaretDown, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

function SecondMidSection() {
  return (
    <section id="about" className="about">
      <p className="text-center">#BEDRESSPONSIBLE</p>
      <h1 className="text-center">The Vagabond Hipster Series</h1> <br /> <br />
      <div className="container">
        <div id="carouselExampleControlsDamn" className="carousel slide" data-ride="carousel" >
          <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row row1">
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <img src="assets/img/TheVeshtiCompanyHaremPants50_540x.webp" alt="" />
                    <h4 className="text-center">Lorem, ipsum dolor.</h4>
                    <p className="text-center"> <del>121212</del>999 </p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                  <img src="assets/img/TheVeshticompanyHaremPants5_705544aa-d64f-46ae-bdcd-78bf2fe50905_540x.webp" alt="" />
                 <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>4534534</del>999
              </p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/VeshtiCompanyHaremPants1_c404fad7-cfa0-4ae3-a4f0-789c30a0c43b_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
0932              </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
          <div className="row row1">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src='assets/img/31.jpg'
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>333333</del>999
              </p>
            </div>
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
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="assets/img/TheVeshtiCompanyHaremPants50_540x.webp"
                alt=""
              />
              <h4 className="text-center">Lorem, ipsum dolor.</h4>
              <p className="text-center">
                <del>7777777777</del>999
              </p>
            </div>
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
              </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControlsDamn" role="button"  data-slide="prev" >
            {/* <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true" /> */}
            {/* <span class="carousel-control-prev-icon" aria-hidden="true"> */}
              <ChevronLeft color='black' size={33} />
            {/* </span> */}
           {/* <span class="sr-only">Previous</span> */}
          </a>
          <a className="carousel-control-next" href="#carouselExampleControlsDamn" role="button" data-slide="next" >
            {/* <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true" /> */}
        {/* <span class="sr-only">Next</span> */}
            {/* <span class="carousel-control-next-icon" aria-hidden="true"> */}
              <ChevronRight color='black' size={33} />
            {/* </span> */}
          </a>
        </div>
      </div>
    </section>)
}

export default SecondMidSection;