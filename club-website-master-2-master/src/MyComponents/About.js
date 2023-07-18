import React from 'react'
import '../MyCSS/About.css'
import { Card } from 'react-bootstrap'
export default function About(props) {
    return (
        <>
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
        </>
    )
}
