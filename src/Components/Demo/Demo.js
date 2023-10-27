import React from 'react'

function Demo() {
  return (
    <div>Demo</div>
  )
}

export default Demo

// import React from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// // Default theme
// import '@splidejs/react-splide/css';


// // or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';


// // or only core styles
// import '@splidejs/react-splide/css/core';

// function Demo() {

//     // GETTING DATA
//     const GET_ALL_PRODUCT = gql`
//     query GetAllProducts {
//       getAllProducts {
//         id
//         color
//         description
//         discount
//         gender
//         gst
//         priveiwName
//         productName
//         sellingPrice
//         size
//         stock {
//           quantity
//           gender
//           color
//           size
//         }
//         images {
//           imagePath
//           color
//           gender
//         }
//       }
//     }
//   `;

//   const { data: product, refetch } = useQuery(GET_ALL_PRODUCT);

//   return (<>
//     <div className="slider ">
//     <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={0} slidesPerView={2  } navigation pagination={{ clickable: true }}
//     onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log('slide change')} >
//     {event && event.map((data) =>
//         <SwiperSlide key={data._id} >
//             <div className="card mt-3" style={{ width: "9rem", height: '9rem' }}>
//                 <img src={data.Image} className="card-img-top px-3 pt-3 mt-1"  style={{ borderRadius: '20px' ,height:'7rem' }} alt="..." />
//                 <div className="">
//                     <div className=" text-center pt-2" style={{ fontSize: 10, fontWeight: 500 }} >{data.name}</div>
//                 </div>
//             </div>
//         </SwiperSlide>)}
// </Swiper>
//     </div>
//   </>);
// }

// export default Demo;