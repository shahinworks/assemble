import React from 'react';


function Privacy() {

    // Steps: GO TO nocodeapi and 
    // create instagram api

    // GO TO meta developer site
    // create a new project 
    // go to instagram BASIC API
    // create a test instagram user
    // give access
    // get token

    // paste token in nocodeapi

  const demo =  fetch('https://v1.nocodeapi.com/shahinwithani/instagram/wVLopYpTsNwJbNhh').then((response) => response.json()).then((data) => console.log(data));
    const media_url = "image link";
    const permalink = "post link";
    const id = "";

// axios({
//     method: 'get',
//     url: 'https://v1.nocodeapi.com/shahinwithani/instagram/wVLopYpTsNwJbNhh', 
//     params: {},
// }).then(function (response) {
//         // handle success
//         console.log(response.data);
// }).catch(function (error) {
//         // handle error
//         console.log(error);
// })


console.log(demo);

  return (<>
    <div style={{ paddingTop: "10%" }}>
      <h1 className='text-center'> Privacy </h1>
    </div>
  </>)
}

export default Privacy;