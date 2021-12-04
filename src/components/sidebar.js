import React from 'react'
import ProfileLink from './ProfileLink'
import EditProfile from './EditProfile'
import Avatar from './Avatar'
import SidebarNav from './SidebarNav'
function Sidebar() {

    return (
        <div className="sidebar" id="mainSidebar">
            <Avatar />
            <EditProfile/>
            <SidebarNav />
            <ProfileLink />
        </div>
    )
}

export default Sidebar;