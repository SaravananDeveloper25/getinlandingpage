import React from 'react'
import { images } from '../../config/images'
import { Container, Row, Col } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css'
function Footer() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <div className='logo'>
                                <img src={images.logo} alt="" />
                                <h2>Getin <span>Technologies</span> </h2>
                            </div>
                            <div className='social'>
                                <p>Follow us on</p>
                                <div className='links'>
                                    <FacebookIcon></FacebookIcon>
                                    <InstagramIcon></InstagramIcon>
                                    <XIcon></XIcon>
                                    <YouTubeIcon></YouTubeIcon>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
            <hr />
            <div>
                <Container>
                    <p style={{textAlign:'center'}}>&copy; copywrite Ramaussys Technologies</p>
                </Container>
            </div>
        </div>
    )
}

export default Footer