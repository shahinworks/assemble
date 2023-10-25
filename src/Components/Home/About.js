import React from 'react';
import { Card } from 'react-bootstrap';

function About() {

  return (<>
   <section className="slider" style={{ paddingTop: "10%" }}>
    <h1 className='text-center'>About Us</h1> </section>
    <Card style={{border: "none"}}>
      <Card.Body className='mx-lg-5'>
        <div className='text-left mx-lg-5' >
          <p style={{fontSize: "14px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}> Try putting some prose onscreen, though, and they mix themselves up pretty quickly. This has much to do with the time constraints we claim to feel in the digital age. We don’t have time to compose letters and post them anymore–much less pay postage, what with all the banks kinda-sorta losing our money these days–so we blast a few emails. We don’t have time to talk, so we text. We don’t have time to text to specific people, so we update our Facebook status. We don’t have time to write essays, so we blog. </p>
          <p style={{fontSize: "14px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}> I’m less interested by the superficial reduction of words–i.e. the always charming imho or c u l8r–than the genres in which those communications occur: blogs, texts, tweets, emails. All these interstitial communiques, do they really reflect super brevity that would make Twain proud? Or do they just reflect poorly stylized writing that desperately seeks a clearer form? </p>
          <p style={{fontSize: "14px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}> I rather think the latter. Clive Thompson wrote last month in the NYT Magazine that constant digital updates, after a day, can begin “to feel like a short story; follow it for a month, and it’s a novel.” He was right to see the bits as part of a larger whole. The words now flying through our digital pipes & ether more or less tend to resemble parts of bigger units, perhaps even familiar genres. But stories and novels have definite conclusions; they also have conventional lengths. Quick, how long is the conventional blog, when you add up all of its posts and comments? How long is the longest email thread you send back and forth on a single topic? </p>
          <p style={{fontSize: "14px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}> Most important: What exactly are we writing when we’re doing all of this writing? I won’t pretend to coin a whole new term here; I still think the best we can muster is a more fitting analogue. And if we must find an analogue in an existing literary unit, I propose the paragraph. Our constant writing has begun to feel like a neverending digital paragraph. Not a tight, stabbing paragraph from The Sun Also Rises or even a graceful, sometimes-slinking, sometimes-soaring paragraph from Absalom! Absalom!, I mean a convoluted, haphazard, meandering paragraph, something like Kerouac’s original draft of On the Road–only taped together by bytes. And 1 percent as</p>
        </div>
      </Card.Body>
    </Card>


    {/* <div style={{ marginLeft: "70px", marginRight: "70px", paddingLeft: "70px", paddingRight: "70px"}} className='text-left'>
    <p style={{fontSize: "14px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}} >
    Try putting some prose onscreen, though, and they mix themselves up pretty quickly. This has much to do with the time constraints we claim to feel in the digital age. We don’t have time to compose letters and post them anymore–much less pay postage, what with all the banks kinda-sorta losing our money these days–so we blast a few emails. We don’t have time to talk, so we text. We don’t have time to text to specific people, so we update our Facebook status. We don’t have time to write essays, so we blog. </p>
    

    <p style={{fontSize: "14px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}>I’m less interested by the superficial reduction of words–i.e. the always charming imho or c u l8r–than the genres in which those communications occur: blogs, texts, tweets, emails. All these interstitial communiques, do they really reflect super brevity that would make Twain proud? Or do they just reflect poorly stylized writing that desperately seeks a clearer form? </p>

   <p style={{fontSize: "14px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}> I rather think the latter. Clive Thompson wrote last month in the NYT Magazine that constant digital updates, after a day, can begin “to feel like a short story; follow it for a month, and it’s a novel.” He was right to see the bits as part of a larger whole. The words now flying through our digital pipes & ether more or less tend to resemble parts of bigger units, perhaps even familiar genres. But stories and novels have definite conclusions; they also have conventional lengths. Quick, how long is the conventional blog, when you add up all of its posts and comments? How long is the longest email thread you send back and forth on a single topic? </p>

   <p style={{fontSize: "14px", fontWeight: "bold", fontFamily: "raleway", letterSpacing: "2px"}}>Most important: What exactly are we writing when we’re doing all of this writing? I won’t pretend to coin a whole new term here; I still think the best we can muster is a more fitting analogue. And if we must find an analogue in an existing literary unit, I propose the paragraph. Our constant writing has begun to feel like a neverending digital paragraph. Not a tight, stabbing paragraph from The Sun Also Rises or even a graceful, sometimes-slinking, sometimes-soaring paragraph from Absalom! Absalom!, I mean a convoluted, haphazard, meandering paragraph, something like Kerouac’s original draft of On the Road–only taped together by bytes. And 1 percent as
    </p>  

    </div> */}



    {/* <header id="site-header" className="fixed-top">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="index.html">
        <span>L</span>aundries
        <i className="fas fa-hands-wash" />
      </a>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon fa icon-expand fa-bars" />
        <span className="navbar-toggler-icon fa icon-close fa-times" />
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="index.html">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="about.html">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="services.html">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">
              Contact
            </a>
          </li>
        </ul>
        <form
          action="#error"
          method="GET"
          className="d-flex search-header ms-lg-2"
        >
          <input
            className="form-control"
            type="search"
            placeholder="Enter Keyword..."
            aria-label="Search"
            required=""
          />
          <button className="btn btn-style" type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    
      <div className="cont-ser-position">
        <nav className="navigation">
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              <div className="mode-container">
                <i className="gg-sun" />
                <i className="gg-moon" />
              </div>
            </label>
          </div>
        </nav>
      </div>
     
    </nav>
  </div>
    </header>
    <section className="inner-banner py-5">
  <div className="w3l-breadcrumb py-lg-5">
    <div className="container pt-5 pb-sm-4 pb-2">
      <h4 className="inner-text-title font-weight-bold pt-5">About Us</h4>
      <ul className="breadcrumbs-custom-path">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li className="active">
          <i className="fas fa-angle-right mx-2" />
          About
        </li>
      </ul>
    </div>
  </div>
</section> */}
  </>)
}

export default About;