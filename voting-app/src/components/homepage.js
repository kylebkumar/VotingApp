import React from "react";
import {useAuth} from '../contexts/AuthContext';
import icon1 from './votingIcon.png'
import icon2 from './votingProcess.png'
import { Card, Carousel, Container, Jumbotron } from 'react-bootstrap'
// import { Card } from "@material-ui/core";
import bg from "./HomePage.jpg"


export default function HomePage () {
        const { currentUser } = useAuth()
        return (
            <div style={{ backgroundImage: `url(${bg})`, minHeight:"100vh" }}>
                <Jumbotron className="w-100 align-items-center justify-content-center" style={{backgroundColor:"transparent", paddingTop:"30vh"}}>
                    <h1 style={{fontSize:"10em", textAlign:"center", color: "white", fontFamily:"Castoro"}}>Go Vote!</h1>
                </Jumbotron>
            </div>
            // <Card border="primary">
            //     <Card.Body className="align-content-center justify-content-center">
            //         <div style={{maxWidth:"60vh", maxHeight:"30vh"}}>
            //             {/* <hr size="8" width="90%" color="black" />   */}
            //             <h3 style={{textAlign:"center"}}><em>Check Out Our iOS App that Makes Voting Easier!</em></h3>
            //             {/*TODO: Resize Carousel to make smaller */}
            //             <Carousel>
            //                 <Carousel.Item interval={1000}>
            //                     <img
            //                         className="d-block w-100"
            //                         src={icon1}
            //                         alt="First slide"
            //                     />
            //                     <Carousel.Caption style={{ color:"black" }}>
            //                         <h3>First slide label</h3>
            //                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            //                     </Carousel.Caption>
            //                 </Carousel.Item>
            //                     <Carousel.Item interval={500}>
            //                         <img
            //                             className="d-block w-100"
            //                             src={icon2}
            //                             alt="Second slide"
            //                     />
            //                     <Carousel.Caption style={{ color:"black" }}>
            //                         <h3>Second slide label</h3>
            //                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            //                     </Carousel.Caption>
            //                 </Carousel.Item>
            //                 <Carousel.Item>
            //                     <img
            //                         className="d-block w-100"
            //                         src={icon1}
            //                         alt="Third slide"
            //                     />
            //                     <Carousel.Caption style={{ color:"black" }}>
            //                         <h3>Third slide label</h3>
            //                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            //                     </Carousel.Caption>
            //                 </Carousel.Item>
            //             </Carousel>
                        
            //         </div>
            //     </Card.Body>
            // </Card>
            
    );
}
