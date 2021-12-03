import React from 'react'
import { useState  } from 'react'
import Paste from '../assets/images/Vector (1).svg'

export default function ProfileLink() {
    const [profileLink,setProfileLink] = useState("https://www.udwell.com/p.");
    return (
        <div className="profile">
            <p>Profile link</p>
            <div className="search_container">
                <input placeholder="" value={ profileLink } onChange= { (e) => setProfileLink(e.target.value)} />
                <button>
                    <img height='20px' width="20px" src={ Paste } alt=""/>
                </button>
            </div>
        </div>
    )
}
