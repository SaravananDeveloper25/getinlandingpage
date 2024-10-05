import React from 'react'
import './explore.css'
import Redbutton from '../buttons/redbutton'
import { Container,Row,Col } from 'react-bootstrap'

function Explore() {
  const courses = [
    {
      title: "python fullstack",
      cd: {
        time: "6 Months",
        code: "3 live projects",
        rating: "4.7/5"
      },
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quam magnam neque. Neque quia quidem sapiente, iste at ipsa temporibus nesciunt ea veritatis porro minima rerum ad veniam placeat inventore?`,
    },
    {
      title: "python fullstack",
      cd: {
        time: "6 Months",
        code: "3 live projects",
        rating: "4.7/5"
      },
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quam magnam neque. Neque quia quidem sapiente, iste at ipsa temporibus nesciunt ea veritatis porro minima rerum ad veniam placeat inventore?`,
    },
    {
      title: "python fullstack",
      cd: {
        time: "6 Months",
        code: "3 live projects",
        rating: "4.7/5"
      },
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quam magnam neque. Neque quia quidem sapiente, iste at ipsa temporibus nesciunt ea veritatis porro minima rerum ad veniam placeat inventore?`,
    },
    {
      title: "python fullstack",
      cd: {
        time: "6 Months",
        code: "3 live projects",
        rating: "4.7/5"
      },
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quam magnam neque. Neque quia quidem sapiente, iste at ipsa temporibus nesciunt ea veritatis porro minima rerum ad veniam placeat inventore?`,
    },
    {
      title: "python fullstack",
      cd: {
        time: "6 Months",
        code: "3 live projects",
        rating: "4.7/5"
      },
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quam magnam neque. Neque quia quidem sapiente, iste at ipsa temporibus nesciunt ea veritatis porro minima rerum ad veniam placeat inventore?`,
    },
    {
      title: "python fullstack",
      cd: {
        time: "6 Months",
        code: "3 live projects",
        rating: "4.7/5"
      },
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quam magnam neque. Neque quia quidem sapiente, iste at ipsa temporibus nesciunt ea veritatis porro minima rerum ad veniam placeat inventore?`,
    },
    {
      title: "python fullstack",
      cd: {
        time: "6 Months",
        code: "3 live projects",
        rating: "4.7/5"
      },
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quam magnam neque. Neque quia quidem sapiente, iste at ipsa temporibus nesciunt ea veritatis porro minima rerum ad veniam placeat inventore?`,
    },
    {
      title: "python fullstack",
      cd: {
        time: "6 Months",
        code: "3 live projects",
        rating: "4.7/5"
      },
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quam magnam neque. Neque quia quidem sapiente, iste at ipsa temporibus nesciunt ea veritatis porro minima rerum ad veniam placeat inventore?`,
    },
  ]
  return (
    <div>

      <h5>Explore the Digital Lync way</h5>
      <div className='S'>
        <div className='sline Slinev'></div>
        <div className='num'>1</div>
        <p className='voilet'>learn</p>
        <p>Experience the New way of Learning with AI
        </p>
        <p>Digital Lync offers best technologies in the work, Curated for your Career Growth

        </p>
      </div>
      <section></section>
      <div className='courses'>
        <h2>Courses</h2>
        <section></section>
        <div className="container">
          <div className="boxes">
            {courses.map((course, index) => {
              return <div className="box">
                <p style={{ fontSize: "20px", fontWeight: 700, margin: '5px' }}>python fullstack</p>
                <div className='cdeatils'>
                  <div><p>6Months</p></div>
                  <div><p>3liveproject</p></div>
                  <div><p>4.5/5</p></div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quam magnam neque. Neque quia quidem sapiente, iste at ipsa temporibus nesciunt ea veritatis porro minima rerum ad veniam placeat inventore?</p>
                <div>
                  <Redbutton />
                </div>

              </div>
            })}

          </div>
          <div className='cbtnm'>
            <button className='cbtn'>view all course</button>
          </div>
        </div>
      </div>

      <section></section>
      <div className='S'>
        <div className='sline Slinev'></div>
        <div className='num'>2</div>
        <p className='voilet'>Build</p>
        <p>Work on our Real-time Projects , Task Based</p>

      </div>
      <section></section>
      <div className='build'>
          <Container>
            <Row className='build-row'>
              
              <Col md={6}>
                <div className='build-img'></div>
              </Col>
              <Col md={6}>
              <div className='build-content'>
                <div className="icon"></div>
                <h4>CRM</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel numquam aut. Autem at ullam dolore quidem praesentium aliquam molestias magnam. Eum sed optio minus, commodi porro possimus voluptates aliquam.</p>
                <div className='build-button'>
                  <Redbutton />
                </div>
              </div>
              </Col>
              <span></span>
            </Row>
            <Row className='build-row'>
              
              <Col md={6}>
                <div className='build-img'></div>
              </Col>
              <Col md={6}>
              <div className='build-content'>
                <div className="icon"></div>
                <h4>CRM</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel numquam aut. Autem at ullam dolore quidem praesentium aliquam molestias magnam. Eum sed optio minus, commodi porro possimus voluptates aliquam.</p>
                <div className='build-button'>
                  <Redbutton />
                </div>
              </div>
              </Col>
              <span></span>
            </Row>
          </Container>
      </div>
    </div>
  )
}

export default Explore