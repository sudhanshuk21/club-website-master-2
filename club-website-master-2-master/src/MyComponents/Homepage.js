import React from 'react'
import '../MyCSS/Homepage.css'
import '../MyCSS/About.css'
import '../MyCSS/Glance.css'
import {Carousel} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
export default function Homepage(props) {
  return (
    <>
    <div className='homepage' style={{ 
      backgroundImage: `url(${props.bg2})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      height: 800 
    }}>
      <div className="content">
        <h1>WELCOME TO AEROMODELLING CLUB, IITK</h1>
        <h3>DESIGN, BUILD, FLY...</h3>
        <h5>SINCE 2003</h5>
      </div>
    </div>


    <div className="about" >
        <video autoPlay muted loop src={props.bgvideo} />
    <Card className="text-center text-white bg-transparent">
      <Card.Body className="about-content">
        <Card.Title><h1>About</h1></Card.Title>
        <hr />
        <Card.Text>
        Aeromodelling is the activity involving design, development and flying of small air vehicles. It is a very exciting and interesting way to learn, apply and understand science and engineering principles.

        Aeromodelling generally involves small sized flying objects like Radio Controlled Aircraft (RC Aircraft), Gliders, Ornithopters, Boomerangs and Paper Planes. Although Aeromodelling looks like a lot of Aerospace/ Aeronautical engineering topic, it involves a lot of interdisciplinary concepts from from various streams of engineering - primarily Aerospace/ Aeronautical, Mechanical, Electronics, Electrical and Computer Science. Aeromodelling gives a good understanding of the roles each of these engineering skills play in real aircraft industry and provides enormous opportunities to develop innovative thinking and implementation.

        While designing an aeromodel is highly based on engineering principles, flying part of Aeromodelling is also considered to be an expensive hobby/ sport.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    
    <div className="glance">
        <h1>Glance</h1>
      <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.slide4} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>IC Plane</h3>
          <p>Runs on an internal combustion engine</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.slide1} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Quad Plane</h3>
          <p>SnT Award for "MOST INDUSTRIALLY RELEVANT PROJECT</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Composite Aircraft</h3>
          <p>One of the finest aircraft made</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.slide3} 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Balsa</h3>
          <p>
          Fabricated with Perfection
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}
