import React from "react";
import {useAuth} from '../contexts/AuthContext';

export default function HomePage () {
        const { currentUser } = useAuth()
        return (
            <div>
                <h1>Home Page</h1>
            </div>
    );
}
