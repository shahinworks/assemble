import React from 'react';
import { Row } from 'react-bootstrap';

function Frame() {
  return (<>
    <Row  style={{paddingTop: "100px", marginTop: "30px"}}>
  


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


    <section id="iframe">
    <div className="position-relative">
      {/* <div className="iframe">
        <iframe
          id="YouTubeVideo-template--16577403715829__hero-video"
          className="video-div"
          data-type="youtube"
          data-video-id="CSp5KEg4K-g"
          frameBorder={0}
          // allowFullScreen={1}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="The Veshti Company - An ode to all the ones who wear their opinions & are proud to #BEDRESSPONSIBLE!"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/CSp5KEg4K-g?autohide=0&cc_load_policy=0&controls=0&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&&autoplay=1;origin=https%3A%2F%2Ftheveshticompany.com&widgetid=1?autoplay=1&mute=1"
          data-gtm-yt-inspected-11="true"
          tabIndex={-1}
        />
      </div> */}
      <div className="text-light position-absolute ">
        <h1 className="text-light">#Be</h1>
        <h1 className="text-light">Dress</h1>
        <h1 className="text-light">Ponsible</h1>
      </div>
    </div>
  </section>
  </>
  
  )
}

export default Frame;