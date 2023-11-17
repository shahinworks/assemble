import React, { useState } from 'react'

function Instagram() {

    const [ insta, setInsta ] = useState([]);

    
   fetch('https://v1.nocodeapi.com/shahinwithani/instagram/wVLopYpTsNwJbNhh').then((response) => response.json()).then((data) => setInsta(data));
  console.log("insta", insta );


  return (
    <div>Instagram</div>
  )
}

export default Instagram