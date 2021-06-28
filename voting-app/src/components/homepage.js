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
               marginLeft:"auto",
               marginRight:"auto" 
               }}></img>
            </div>
    );
}
