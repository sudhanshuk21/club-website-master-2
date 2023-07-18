import React from 'react'
import '../MyCSS/Glance.css'
import {Carousel} from 'react-bootstrap'
// import { Alert } from '@coreui/react';
// import '@coreui/coreui/dist/css/coreui.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { CCarousel, CCarouselItem, CCarouselCaption, CImage} from '@coreui/react'



export default function Glance(props) {
  return (
    <>
    <div className="glance">
        <h1>Glance</h1>
      <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.slide1} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>IC Plane</h3>
          <p>Runs on an internal combustion engine.</p>
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
