import React from "react";
import {useAuth} from '../contexts/AuthContext';
import icon1 from './votingIcon.png'

export default function HomePage () {
        const { currentUser } = useAuth()
        return (
            <div>
                <h1 style={{ textAlign:"center" , padding:"0.5em" }}>Why Vote?</h1>
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
                    <p>lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                    lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                    lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                    lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                    lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                    </p>
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
                <h5>Actual Second Topic</h5>
                <p>lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                </p>
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
                    <p>lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                    lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                    lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                    lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                    lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                    </p>
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
                <h5>Actual Fourth Topic</h5>
                <p>lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
                </p>
               </div>
               <br clear="right" />

            </div>
    );
}
