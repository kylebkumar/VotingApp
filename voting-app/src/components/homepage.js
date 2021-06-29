import React from "react";
import {useAuth} from '../contexts/AuthContext';
import icon1 from './votingIcon.png'
import icon2 from './votingProcess.png'
import { Card, Carousel, Container } from 'react-bootstrap'
// import { Card } from "@material-ui/core";

export default function HomePage () {
        const { currentUser } = useAuth()
        return (
           
            <Card border="primary">
                <Card.Body>
                <div>
                    <h1 style={{ textAlign:"center" , paddingTop:"0.5em"}}>Why Vote?</h1>
                    <hr size="8" width="90%" color="lightBlue" />
                    <div style={{ paddingLeft:"10%"}}>
                        <img src={icon1} alt="None" 
                        width="30%" 
                        height="20%" 
                        style={{ display:"block", 
                        //    align:"left",
                        float:"left"
                        }}>
                        </img>
                </div>
                <div style={{ paddingRight:"10%" }}>
                        <h5>Why Cast Ballots?</h5>
                        <Card border="alert">
                            <Card.Body>
                            <p>Casting ballots is a way for you to voice your opinion and to 
                            see the change that you want. Participating in various elections -
                            from small to big - is important because your voice matters in shaping
                            policies that are of importance to you. So, go out and vote because NO
                            VOTE means NO VOICE and NO CHANGE!
                            </p>
                            </Card.Body>
                        </Card>
                </div>
                <br clear="left" />
                <div style={{ paddingRight:"10%"}}>
                    <img src={icon2} alt="None" 
                    width="30%" 
                    height="20%" 
                    style={{ display:"block", 
                    paddingBottom: "0.5em",
                //    align:"left",
                    float:"right"
                    }}>
                    </img>
                </div>
                    <div style={{ paddingLeft:"10%"}}>
                    <h5>How to Vote</h5>
                    <Card border="alert">
                        <Card.Body>
                            <p>
                            It is good practice to follow the news and use the internet to search
                            up local and state representatives. Increasing awareness of your choices
                            of candidates will increase the likelihood of you making more informed
                            decisions and may motivate you to follow a candidate whose goals align 
                            to yours.
                            </p>
                        </Card.Body>
                    </Card>
                </div>
                <br clear="right" />
                <div style={{ paddingLeft:"10%"}}>
                        <img src={icon1} alt="None" 
                        width="30%" 
                        height="20%" 
                        style={{ display:"block", 
                        //    align:"left",
                        float:"left"
                        }}>
                        </img>
                </div>
                <div style={{ paddingRight:"10%" }}>
                        <h5>Actual Third Topic</h5>
                        <Card border="alert">
                            <Card.Body>
                                <p>lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                                lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                                lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                                lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                                lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                                </p>
                            </Card.Body>
                        </Card>
                </div>
                <br clear="left" />
                <div style={{ paddingRight:"10%"}}>
                    <img src={icon1} alt="None" 
                    width="30%" 
                    height="20%" 
                    style={{ display:"block", 
                    paddingBottom: "0.5em",
                //    align:"left",
                    float:"right"
                    }}>
                    </img>
                </div>
                    <div style={{ paddingLeft:"10%"}}>
                    <h5>Polling Centers Offering Free Food!</h5>
                    {/* https://www.adcouncil.org/all-articles/four-voting-ads-that-have-caught-our-attention */}
                    <Card border="alert">
                        <Card.Body>
                            <p>lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                            lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                            lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                            lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                            lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                            </p>
                        </Card.Body>
                    </Card>
                </div>
                <br clear="right" />

                    <div>
                        {/* <hr size="8" width="90%" color="black" />   */}
                        
                        <h3 style={{textAlign:"center"}}><em>Check Out Our iOS App that Makes Voting Easier!</em></h3>
                        {/*TODO: Resize Carousel to make smaller */}
                        <Carousel fade>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src={icon1}
                                    alt="First slide"
                                />
                                <Carousel.Caption style={{ color:"black" }}>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                        className="d-block w-100"
                                        src={icon2}
                                        alt="Second slide"
                                />
                                <Carousel.Caption style={{ color:"black" }}>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={icon1}
                                    alt="Third slide"
                                />
                                <Carousel.Caption style={{ color:"black" }}>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        
                    </div>
                </div>
                </Card.Body>
            </Card>
            
    );
}
