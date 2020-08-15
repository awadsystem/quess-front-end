import React from 'react'
import './header.css'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <header className="header-wrapper">
                <div className="container-fluid header-inner">

                    <div className="row">

                        <div className="col-xs-12 col-md-6 header-left-section">
                            <p className="cursor-pointer header-wating-list"><p className="list-para">قائمة الانتظار</p> <p className="list-para list-number">١٤</p> <img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/arrow-right.svg" className="header-arrow-icon" /></p>
                        </div>

                        <div className="col-xs-12 col-md-6 header-right-section">
                            <div className="text-right">
                                <div className="profile-section">
                                    <p>مرحبآ بك <span className="profile-username">مالك محمد</span></p>
                                    <div className="profile-icon">
                                        <img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/Path%20994.svg" />
                                    </div>
                                </div>
                                <img className="notification-bell" src="https://assetshost.fra1.cdn.digitaloceanspaces.com/Path%20995.svg" />
                            </div>
                        </div>

                    </div>

                </div>
            </header>
        )
    }

}

export default Header