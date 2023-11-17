import React from 'react'

function Instagram() {
    const demo =  fetch('https://v1.nocodeapi.com/shahinwithani/instagram/wVLopYpTsNwJbNhh').then((response) => response.json()).then((data) => console.log(data));



  return (
    <div>Instagram</div>
  )
}

export default Instagram