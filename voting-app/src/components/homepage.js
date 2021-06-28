import React from "react";
import {useAuth} from '../contexts/AuthContext';
import icon1 from './votingIcon.png'

export default function HomePage () {
        const { currentUser } = useAuth()
        return (
            <div>
                <h1 style={{ textAlign:"center" , padding:"0.5em" }}>Why Vote?</h1>
               <img src={icon1} alt="None" 
               width="30%" 
               height="20%" 
               style={{ display:"block", 
               paddingBottom: "0.5em",
            //    align:"left",
               float:"left"
               }}>
               </img>
               <h5>Why Cast Ballots?</h5>
               <p>lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
               lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
               lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
               lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
               lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
               </p>
               <br clear="left" />

               <img src={icon1} alt="None" 
               width="30%" 
               height="20%" 
               style={{ display:"block", 
               paddingBottom: "0.5em",
            //    align:"left",
               float:"right"
               }}>
               </img>
               <h5>Actual Second Topic</h5>
               <p>lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
               lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
               lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
               lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
               lorem ipsum dipsumlorem ipsum dipsumlorem ipsum dipsum
               </p>
               <br clear="right" />

            </div>
    );
}
