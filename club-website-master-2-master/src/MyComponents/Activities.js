import React from 'react'
import '../MyCSS/Activities.css'
export default function Activities(props) {
  return (
    <>
      <div className="activities">
        <video autoPlay muted loop src={props.bgvideo} />

        <div className="activities-container">
          <div className="event">
            <div className="event-heading">
              <h1>Our Events</h1>
            </div>

            <div className="event-container">
              <div className="event-card">
                <div className="left">
                  <a href="https://techkriti.org/"><img className='image__img' src={props.techkriti} alt="" /></a>
                </div>
                <div className="right">
                  <h4>Techkriti</h4>
                </div>
              </div>

              <div className="event-card">
                <div className="left">
                  <img className='image__img' src={props.aeroweek} alt="" />
                </div>
                <div className="right">
                  <h4>Aeroweek </h4>
                </div>
              </div>

              <div className="event-card">
                <div className="left">
                  <img className='image__img' src={props.takneek} alt="" />
                </div>
                <div className="right">
                  <h4>Takneek</h4>
                </div>
              </div>

              <div className="event-card">
                <div className="left">
                  <a href="https://drive.google.com/drive/u/0/folders/1s99281zyok7oCvY35MB_vTrVde_rLemj"><img className='image__img' src={props.summer} alt="" /></a>
                </div>
                <div className="right">
                  <h4>Summer Project</h4>
                </div>
              </div>

            </div>
          </div>


          <div className="achievement">
            <div className="achievement-heading">
              <h1>Resources</h1>
            </div>

            <div className="achievement-container">

              <div className='leftk'>
              <div className="achievement-card">
                <div className="left-achievement">
                  <a href="https://docs.google.com/presentation/d/189NT1lFvKx0I25_xUMMUa0ufJM4AIZ6U/edit?usp=sharing&ouid=110997027722677821428&rtpof=true&sd=true"><img className='image__img' src={props.slide3} alt="" /></a>

                </div>
                <div className="right">
                  <h4>Intro</h4>

                </div>
              </div>

              <div className="achievement-card">
                <div className="left-achievement">
                  <a href="https://docs.google.com/presentation/d/1-c7QeHH_AiSAYnAaYed3sMezNzE-yWYv/edit?usp=sharing&ouid=110997027722677821428&rtpof=true&sd=true"><img className='image__img' src={props.introductory} alt="" /></a>

                </div>
                <div className="right">
                  <h4>Introductory lectures</h4>

                </div>
              </div>

              <div className="achievement-card">
                <div className="left-achievement">
                  <a href="https://docs.google.com/presentation/d/18Uq3FVqda_7BgLp_5UnpppjYoXnnzdrt/edit?usp=sharing&ouid=110997027722677821428&rtpof=true&sd=true"><img className='image__img' src={props.types} alt="" /></a>
                </div>
                <div className="right">
                  <h4>Different types of planes </h4>

                </div>
              </div>

              <div className="achievement-card">
                <div className="left-achievement">
                  <a href="https://docs.google.com/document/d/18cU77tgfsyupFmwOguIhvS_MV-P0RFkG/edit?usp=sharing&ouid=110997027722677821428&rtpof=true&sd=true"><img className='image__img' src={props.terminology} alt="" /></a>

                </div>
                <div className="right">
                  <h4>Terminologies</h4>

                </div>
              </div>
              </div>
              
              <div className='leftk'>
              <div className="achievement-card">
                <div className="left-achievement">
                  <a href="https://docs.google.com/presentation/d/1aVbbyUECyX031zmOkLa4IAXY36tEuiKh/edit?usp=sharing&ouid=110997027722677821428&rtpof=true&sd=true"><img className='image__img' src={props.avionics} alt="" /></a>

                </div>
                <div className="right">
                  <h4>Avionics</h4>

                </div>
              </div>

              <div className="achievement-card">
                <div className="left-achievement">
                  <a href="https://docs.google.com/presentation/d/1GTYhHLtpa4j6eIZ9EiuZ2pgXF7p8sLjP/edit?usp=sharing&ouid=110997027722677821428&rtpof=true&sd=true"><img className='image__img' src={props.drone} alt="" /></a>

                </div>
                <div className="right">
                  <h4>Drone Avionics</h4>

                </div>
              </div>

              <div className="achievement-card">
                <div className="left-achievement">
                  <a href="https://docs.google.com/presentation/d/1h_qNzknZR2tjqeBuvULd3CskGtUG0zD7/edit?usp=sharing&ouid=110997027722677821428&rtpof=true&sd=true"><img className='image__img' src={props.drone} alt="" /></a>

                </div>
                <div className="right">
                  <h4>Drone Dynamics</h4>

                </div>
              </div>

              <div className="achievement-card">
                <div className="left-achievement">
                  <a href="https://drive.google.com/file/d/1pCauUzRtUsAEo71D-VGuEez1gR78supT/view?usp=sharing"><img className='image__img' src={props.xflr} alt="" /></a>

                </div>
                <div className="right">
                  <h4>XFLR5</h4>

                </div>
              </div> 
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}














