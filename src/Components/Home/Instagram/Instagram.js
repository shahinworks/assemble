import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import insta from './insta.json';

function Instagram() { 
  const navigate = useNavigate();


      // Steps: GO TO nocodeapi and 
    // create instagram api

    // GO TO meta developer site
    // create a new project 
    // go to instagram BASIC API
    // create a test instagram user
    // give access
    // get token

    // paste token in nocodeapi



    // const [ insta, setInsta ] = useState([]);



    // const [ insta, setInsta ] = useState({caption
    //   : 
    //   "दशहरे के पावन पर्व की हार्दिक शुभकामनाएँ।",
    //   id
    //   : 
    //   "17977692260373201",
    //   media_type
    //   : 
    //   "VIDEO",
    //   media_url
    //   : 
    //   "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/AA4B001EE5AD0530B891267F0451D88F_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&vs=1420721118505408_1155515649&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9BQTRCMDAxRUU1QUQwNTMwQjg5MTI2N0YwNDUxRDg4Rl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dQQk5neGVnMTdfdXJrUUJBRzRvRlVEeWR4TU5icV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJsTgoIvx58s%2FFQIoAkMzLBdALiPXCj1wpBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfByfcRL_71qC_vMuz93jxDeTs-9Ql7E3BkVOOVMu52g0A&oe=655D2CC7&_nc_sid=1d576d&_nc_rid=a681d7cd4c",
    //   permalink
    //   : 
    //   "https://www.instagram.com/reel/Cyw2UDGxEbJ/",
    //   thumbnail_url
    //   : 
    //   "https://scontent.cdninstagram.com/v/t51.29350-15/394691112_320297084058161_1276413800792809892_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=9rIU1wkHz9AAX-OpqSM&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCNWZaXlf88y2DEOiE2u_F2nK7wDuPGkhqr9nloJMmdyw&oe=65600A8E",
    //   timestamp
    //   : 
    //   "2023-10-24T01:36:44+0000",
    //   username
    //   : 
    //   "trp_fits_official"});


    const handleGoToInsta = (link) => {
      navigate(`${link}`);
    }


    // Fetch_DATA_Insta

  //   useEffect(() => {
  //       fetch('https://v1.nocodeapi.com/assemble/instagram/ygwCsqxcoNGtGxbc').then((response) => response.json()).then((data) => setInsta(data));
  // console.log("insta", insta );
  //   }, []); 
    
//    fetch('https://v1.nocodeapi.com/shahinwithani/instagram/wVLopYpTsNwJbNhh').then((response) => response.json()).then((data) => setInsta(data));
  console.log("insta", insta );
 
  return (<> 
    <section id="instagram">
      <h1 className="text-center mt-5" style={{marginTop: "30px"}}>Check out our Instagram</h1>
      <p className="text-center">#BeDressponsible</p>
      <br />
      <br />
      <div className="container justify-content-center" style={{ marginLeft: "20% !important", paddingLeft: "100px" , paddingRight: "20px"}}>
        <div className="row portfolio text-light">
        {insta && insta?.data?.map((i) =>  i?.media_type === "IMAGE" && 
        <div className="col-lg-4 col-md-6 col-sm-6 me-1 mb-1" onClick={() => handleGoToInsta(i?.permalink)}>
          <img style={{height: "280px", width: "280px"}} className='me-1' src={i.media_url} alt="ask "/>
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
            color='orangered'
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
        </div>)}
    </div>
  </div>
</section>
  </>
    
  )
}

export default Instagram