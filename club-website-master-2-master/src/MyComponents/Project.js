import React from 'react'
import '../MyCSS/Project.css'

export default function Project(props) {
  return (
    <>
      
      <div className="project" >
        <video autoPlay muted loop src={props.bgvideo} />
        <div className="event-heading">
          <h1>Our Projects </h1>
        </div>

       <div className="leftk">

        <div className="achievement-card">
          <div className="left-achievement">
            <a href="https://drive.google.com/drive/u/0/folders/1E5fidEF7Q7iybBrPM-sWjuUjF4p1NSh0">
            <img className="image__img"  src={props.slide3} alt="" />
            <div id='image__overlay__secy' class="image__overlay ">
              <p>A RC plane made of balsa wood with the first time use of IC Engine.</p>
              <p>The project is made in summers 2022.</p>
            </div></a>
          </div>
          <div className="right">
            <h4>Balsa-Wood Plane</h4>
          </div>
        </div>

        <div className="achievement-card">
          <div className="left-achievement">
            <a href="https://drive.google.com/drive/u/0/folders/12xqA_QYYlX-Jss9rdx7wmYENlXmJQ4wY">
            <img className='image__img' src={props.Quadplane} alt="" />
            <div id='image__overlay__secy' class="image__overlay ">
              <p>This had 4 rotors for VTOL and sensors for guidance</p>
              <p>The project is made in summers 2019.</p>
            </div></a>
          </div>
          <div className="right">
            <h4>Quadplane</h4>
          </div>
        </div>

        <div className="achievement-card">
          <div className="left-achievement">
            <a href="https://drive.google.com/drive/u/0/folders/1HyZXpviYADxxF1mVIYqB2eVh8o8LI74V">
            <img className='image__img' src={props.ornithopter} alt="" />
            <div id='image__overlay__secy' class="image__overlay ">
              <p>Created a fully controllable flapping wing MAV.</p>
              <p>The project is made in summers 2019.</p>
            </div></a>
          </div>
          <div className="right">
            <h4>Ornithopter</h4>
          </div>
        </div>

        <div className="achievement-card">
          <div className="left-achievement">
            <a href="https://drive.google.com/drive/u/0/folders/1TTkyhJZ6R6SxcO9KiUsucKcYAhycoaq5">
            <img className='image__img' src={props.Quadcopter} alt="" />
            <div id='image__overlay__secy' class="image__overlay ">
              <p>Uses two pairs of
fixed pitched propellers; two
clockwise and two counter clockwise.</p>
              <p>The project is made in summers 2022.</p>
            </div></a>
          </div>
          <div className="right">
            <h4>Quad-N_Heli</h4>
          </div>
        </div>

        </div>



        <div className="leftk">

        <div className="achievement-card">
          <div className="left-achievement">
            <a href="https://drive.google.com/drive/u/0/folders/17bKmPx5fBY3K7euMPtNNzwLgyaFwIxWK">
            <img className="image__img"  src={props.tailsitter} alt="" />
            <div id='image__overlay__secy' class="image__overlay ">
              <p>Made for vertical take off and landing</p>
              <p>The project is made in summers 2018.</p>
            </div></a>
          </div>
          <div className="right">
            <h4>Tailsitter</h4>
          </div>
        </div>

        <div className="achievement-card">
          <div className="left-achievement">
            <a href="https://drive.google.com/drive/u/0/folders/1IQl41jtaJeX_l-YmuZW451z-5yBLl6Gt">
            <img className='image__img' src={props.aerial} alt="" />
            <div id='image__overlay__secy' class="image__overlay ">
              <p>Different Air Maneuvers were tested using an acrobatic plane.</p>
              <p>The project is made in summers 2018.</p>
            </div></a>
          </div>
          <div className="right">
            <h4>Aerial Maneuvers</h4>
          </div>
        </div>

        </div>
      </div>

    </>
  )
}
