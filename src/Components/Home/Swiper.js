// import Swiper core and required modules
import React from 'react';
import { Link } from 'react-router-dom';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default ({product}) => {
  return (<>
   
    <Swiper
   
      // install Swiper modules
    //   modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    > {product && product?.getAllProducts?.map((data, index) => 
         
          <SwiperSlide  key={data.id}> <img style={{height: "50px", width: "50px"}} src={data.images} alt=""/></SwiperSlide> )}

   
      
    </Swiper>
    </>);
};

// {product && product?.getAllProducts?.map((data, index) => <div key={data.id}  className="col-lg-4 col-md-4 col-sm-6">
// <img src={data.images} alt=""/>
// <Link to={`/product/${data.id}`} className='stretched-link'> <h4 className="text-center text-black">{data.productName}</h4> </Link>
// <h4 className="fs-5 text-center">
//   ₹ {data.sellingPrice }</h4>
// </div> )}