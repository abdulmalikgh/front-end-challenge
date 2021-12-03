import ProfileIcon from '../assets/images/profile.svg'
import Camera from '../assets/images/bx-camera 1.svg'

export default function Avatar() {
    return (
        <div className="avatar-card">
        <div className="avatar">
            <div className="avatar-logo">
                <img src={ ProfileIcon }  alt="profile"/>
            </div>
            <button className="avatar-upload">
                <img height='12px' width="12px" src={ Camera } alt=""/>
            </button>
        </div>
        <div className="avatar-text">
            <p>Alex Assenmacher</p>
            <p>
                Home Buyer 
            </p>
        </div>
    </div>
    )
}
