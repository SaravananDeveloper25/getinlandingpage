import React from 'react'
import './train.css'
import { Container, Row, Col } from 'react-bootstrap'
import { images } from '../../config/images'
import { Redbtn } from '../buttons/redbutton'
function train() {
    const std = [
        {
            "simg": images.dummy1,
            "studentname": "studentname",
            "placed": "placed role in company",
            "cimg": images.cam

        },
        {
            "simg": images.dummy1,
            "studentname": "studentname",
            "placed": "placed role in company",
            "cimg": images.cam

        },
        {
            "simg": images.dummy1,
            "studentname": "studentname",
            "placed": "placed role in company",
            "cimg": images.cam

        },
        {
            "simg": images.dummy1,
            "studentname": "studentname",
            "placed": "placed role in company",
            "cimg": images.cam

        }
    ]
    const branch = [
        {
            bimg: images.dummy3,
            bhead: 'Kovilpatti,Tamil Nadu',
            address: `971G/6, Kalki Street, Manthithoppu Road,  Krishna Nagar, Kovilpatti – 628502Landmark: After six veedu Line`
        },
        {
            bimg: images.dummy3,
            bhead: 'Virudhunagr,Tamil Nadu',
            address: `1st Floor, Venkadachalapathy Complex, NH 7, Kooraikundu– 626002,Landmark: Opp of Virudhunagar Collectorate
`
        },
        {
            bimg: images.dummy3,
            bhead: 'Bengaluru,Tamil Nadu',
            address: `79, KGF Munireddy Layout, Mahadevapura, Bangalore – 560048,Landmark: Near Atal Apartment
`
        },
    ]
    return (
        <div className='trainning'>
            <h4>IT Engineers who got Trained from Getin technologies</h4>
            <div className='placed-student'>
                <Container>
                    <Row>
                        {std.map((std) => {
                            return <Col sm={12} md={6} lg={3}>
                                <div className='std-box'>

                                    <img src={images.dummy1} alt="" className='std-img' />
                                    <div className='std-content'>
                                        <h5>studentname</h5>
                                        <p>placed role in company</p>
                                        <img src={images.cam} alt="" width="200px" style={{ marginBottom: "20px" }} />
                                    </div>

                                </div>
                            </Col>
                        })}

                    </Row>
                </Container>
            </div>
            <section></section>
            <h4>Upcoming Batch Schedule</h4>
            <div>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <div className="batch">
                                <h5>Week Day Batches
                                </h5>
                                <p>(Mon-Fri)</p>
                                <hr />
                                <div className='timing-boxs'>
                                    <div className='timing-box'>
                                        <div className='tbox'></div>
                                        <div className="boxx">
                                            <h5>14th Oct 2024
                                            </h5>
                                            <p>Monday</p>
                                        </div>

                                    </div>
                                    <div className='timing-box'>
                                        <div className='tbox'></div>
                                        <div className="boxx">
                                            <p>
                                                8 AM (IST)
                                            </p>
                                            <p>1hr-1:30hr / Per Session</p>
                                        </div>

                                    </div>
                                </div>
                                <Redbtn />
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <div className="batch">
                                <h5>Week Day Batches
                                </h5>
                                <p>(Mon-Fri)</p>
                                <hr />
                                <div className='timing-boxs'>
                                    <div className='timing-box'>
                                        <div className='tbox'></div>
                                        <div className="boxx">
                                            <h5>14th Oct 2024
                                            </h5>
                                            <p>Monday</p>
                                        </div>

                                    </div>
                                    <div className='timing-box'>
                                        <div className='tbox'></div>
                                        <div className="boxx">
                                            <p>
                                                8 AM (IST)
                                            </p>
                                            <p>1hr-1:30hr / Per Session</p>
                                        </div>

                                    </div>
                                </div>
                                <Redbtn />

                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <div className="batch">
                                <h5>Week Day Batches
                                </h5>
                                <p>(Mon-Fri)</p>
                                <hr />
                                <div className='timing-boxs'>
                                    <div className='timing-box'>
                                        <div className='tbox'></div>
                                        <div className="boxx">
                                            <h5>14th Oct 2024
                                            </h5>
                                            <p>Monday</p>
                                        </div>

                                    </div>
                                    <div className='timing-box'>
                                        <div className='tbox'></div>
                                        <div className="boxx">
                                            <p>
                                                8 AM (IST)
                                            </p>
                                            <p>1hr-1:30hr / Per Session</p>
                                        </div>

                                    </div>
                                </div>
                                <Redbtn />

                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <div className="batch batch-black">
                                <div style={{ marginBottom: '4rem' }}>
                                    <h3>Can’t find a batch you were looking for?</h3>
                                </div>


                                <Redbtn />

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <section></section>
            <hr />
            <section></section>
            <div>
                <h4 style={{ fontWeight: 700 }}>Why Getin Tech</h4>
                <Container>
                    <Row>
                        <Col>
                            <div className='why'>
                                <h3>50,000+</h3>
                                <p>Learners</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='why'>
                                <h3>5000+</h3>
                                <p>Batches</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='why'>
                                <h3>3+</h3>
                                <p>years</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='why'>
                                <h3>24/7</h3>
                                <p>Supports</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr />
            <section></section>
            <h4 style={{ fontWeight: 700 }}>Our Locations</h4>
            <div>
                <Container>
                    <Row>
                        {branch.map((branch) => {
                           return <Col key={branch.bhead} md={6} lg={4} sm={12}>
                                <div className='location'>
                                    <img src={branch.bimg} alt="" />
                                    <div className='branch-c'>
                                    <h4>{branch.bhead}</h4>
                                    <p>{branch.address}</p>
                                    </div>
                                  
                                </div>
                            </Col>
                        })}

                    </Row>
                </Container>
            </div>
            <section></section>
            <hr />
        </div>
    )
}

export default train