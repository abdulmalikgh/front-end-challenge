import React from 'react'
import ProfileLink from './ProfileLink'
import EditProfile from './EditProfile'
import Avatar from './Avatar'
function Sidebar() {

    return (
        <div className="sidebar">
            <Avatar />
            <EditProfile/>
            <div>

            </div>
            <ProfileLink />
        </div>
    )
}

export default Sidebar;