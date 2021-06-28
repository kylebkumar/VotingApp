import React from 'react'
import { useAuth } from '../contexts/AuthContext';

export default function Account(){
    const { currentUser } = useAuth()  
    return (
        <div>
            Current User: { currentUser && currentUser.email }
        </div>
    )
}
