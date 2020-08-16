import React from 'react'
import './header.css'

const Header = () => {

    return (
        <div className="sub-header">
            <div className="row">
                <div className="col-sm-6">
                    <div className="text-left">
                        <img className="sub-header-image" src="https://assetshost.fra1.cdn.digitaloceanspaces.com/Group%2071.svg" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="text-right sub-header-icons">
                        <div className="profile-icon--sub"><img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/Path%20994.svg" /></div>
                        <div className="bill-holder">
                            <img className="notification-bell-sub-header" src="https://assetshost.fra1.cdn.digitaloceanspaces.com/white-bell.svg" />
                            <img className="notification-bell-point" src="https://assetshost.fra1.cdn.digitaloceanspaces.com/Path%20996.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header