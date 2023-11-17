import React, { useEffect, useState } from 'react'

function Instagram() {

      // Steps: GO TO nocodeapi and 
    // create instagram api

    // GO TO meta developer site
    // create a new project 
    // go to instagram BASIC API
    // create a test instagram user
    // give access
    // get token

    // paste token in nocodeapi

    const [ insta, setInsta ] = useState([]);


    useEffect(() => {
        fetch('https://v1.nocodeapi.com/shahinwithani/instagram/wVLopYpTsNwJbNhh').then((response) => response.json()).then((data) => setInsta(data));
  console.log("insta", insta );
    }, []); 
    
//    fetch('https://v1.nocodeapi.com/shahinwithani/instagram/wVLopYpTsNwJbNhh').then((response) => response.json()).then((data) => setInsta(data));
  console.log("insta", insta );


  return (
    <div>Instagram</div>
  )
}

export default Instagram