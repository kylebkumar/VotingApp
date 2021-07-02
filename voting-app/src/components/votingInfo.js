import React from "react";
import {useAuth} from '../contexts/AuthContext';
import icon1 from './votingIcon.png'
import icon2 from './votingProcess.png'
import resources from './resources.png'
import { Card, Carousel, Container } from 'react-bootstrap'
// import { Card } from "@material-ui/core";

export default function HomePage () {
        const { currentUser } = useAuth()
        const openInNewTab = (url) => {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null
          }
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
                        <h5 style={{ color:"Black" }} >Why Cast Ballots?</h5>
                        <Card border="alert">
                            <Card.Body>
                            <p>
                            Casting ballots is a way for you to voice your opinion and to 
                            enact the change that you want. Participating in various elections -
                            from local to federal - is important because your voice matters in shaping
                            policies that affect your life. If more people vote, there would be better
                            representation of the views and values of the people in our country. Various
                            aspects of our lives, such as education, the economy, healthcare, and infrastructure
                            are shaped by voting. Therefore, go out and vote today because your voice matters!
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
                    <h5 style={{ color:"Black" }}>How to Vote</h5>
                    <Card border="alert">
                        <Card.Body>
                            <p>
                            It is good practice to follow the news and use the internet to search
                            up local and state representatives. Increasing awareness of your choices
                            of candidates will increase the likelihood of you making more informed
                            decisions and may motivate you to follow a candidate whose goals align 
                            to yours. Nonetheless, beware of partisan news sources and avoid them at
                            all costs because they have the potential to misinform you. Voter suppression
                            still exists in our world because of obstacles such as limited voting centers
                            or being unaware of the voting centers around you, which makes locating
                            voting centers is a problem. But thanks to GoVote! you 
                            can now search for voting locations nearby and enter in your location to navigate
                            yourself to a voting center of your choosing. Take your initial steps in 
                            alleviating voter suppression by selecting a location and booking an 
                            appointment at a voting center that you choose by using our Voting Map!
                            </p>
                        </Card.Body>
                    </Card>
                </div>
                <br clear="right" />
                <div style={{ paddingLeft:"10%"}}>
                        <img src={ resources } alt="None" 
                        width="30%" 
                        height="20%" 
                        style={{ display:"block", 
                        //    align:"left",
                        float:"left"
                        }}>
                        </img>
                </div>
                <div style={{ paddingRight:"10%" }}>
                        <h5 style={{ color:"Black" }} >Voting Resources</h5>
                        <Card border="alert">
                            <Card.Body>
                                    <p>
                                    Check out some of Cupertino's, California's,
                                    and the country's Voting Information below:
                                    </p>
                                        <ul>
                                        <li>
                                            
                                            <span>Information about 
                                                elections going on in <a style={{color:"blue"}}
                                            onClick={() => openInNewTab("https://www.cupertino.org/our-city/departments/city-clerk/cupertino-elections-info")}>
                                            <em>Cupertino</em>
                                            </a>
                                            </span>
                                        </li>
                                        <li>
                                        <span>Information about 
                                                elections going on in <a style={{color:"blue"}}
                                            onClick={() => openInNewTab("https://www.cupertino.org/our-city/departments/city-clerk/cupertino-elections-info")}>
                                            <em>California</em>
                                            </a>
                                            </span>
                                        </li>
                                        <li>
                                        <span>Information about 
                                                elections going on in the <a style={{color:"blue"}}
                                            onClick={() => openInNewTab("https://www.usa.gov/voting")}>
                                            <em>US</em>
                                            </a>
                                            </span>
                                        </li>
                                        </ul>
                            </Card.Body>
                        </Card>
                </div>
                <br clear="left" />
                {/* <div style={{ paddingRight:"10%"}}>
                    <img src={icon1} alt="None" 
                    width="30%" 
                    height="20%" 
                    style={{ display:"block", 
                    paddingBottom: "0.5em",
                //    align:"left",
                    float:"right"
                    }}>
                    </img>
                </div> */}
                    {/* <div style={{ paddingLeft:"10%"}}>
                    <h5 style={{ color:"Black" }} >Polling Centers Offering Free Food!</h5>
                    https://www.adcouncil.org/all-articles/four-voting-ads-that-have-caught-our-attention
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
                </div> */}
                <br clear="right" />
                </div>
                </Card.Body>
            </Card>
            
    );
}