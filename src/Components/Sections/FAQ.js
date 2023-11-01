import React from 'react';

function FAQ() {
  return (<>
    <section className="slider" style={{ paddingTop: "10%" }}>
    <h1 className='text-center'>Frequently Asked Questions</h1> </section>
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
  </>);
}

export default FAQ;