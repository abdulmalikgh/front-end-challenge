import ProfileIcon from '../assets/images/profile.svg'
import Camera from '../assets/images/bx-camera 1.svg'
import closeIcon from '../assets/images/close.svg'

export default function Avatar() {
    let close = function() {
        let mainSidebar = document.getElementById('mainSidebar')
        mainSidebar.style.display = 'none'
    }
    return (
        <div className="avatar-card">
            <button id="close" onClick={close}>
                <img width="24px" height="24px" src={closeIcon} alt="" />
            </button>
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
