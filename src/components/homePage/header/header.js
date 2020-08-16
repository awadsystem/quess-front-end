import React from 'react'
import './header.css'

class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        let { openNav, changeState, openRightNav } = this.props

        let openDiv = (<p onClick={() => changeState('openNav', !openNav)} className="cursor-pointer header-wating-list"><span className="list-para">قائمة الانتظار</span> <span className="list-para list-number">١٤</span> <img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/arrow-right.svg" className="header-arrow-icon" /></p>)
        if (openNav) {
            openDiv = (
                <p onClick={() => changeState('openNav', !openNav)} className="cursor-pointer header-wating-list"><img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/arrow-right%20%282%29.svg" className="header-arrow-icon" /></p>
            )
        }

        return (
            <header className="header-wrapper">
                <div className="container-fluid header-inner">

                    <div className="row">

                        <div className="col-sm-12 col-md-6 header-left-section">

                            <div className="hide-md">
                                <img onClick={() => changeState('openNav', !openNav)} src="https://assetshost.fra1.cdn.digitaloceanspaces.com/Path%201085.svg" className="hamburger-icon" />
                            </div>

                            <div className="hide-xs">
                                {openDiv}
                            </div>

                        </div>

                        <div className="col-sm-12 col-md-6 header-right-section">
                            <div className="hide-md text-right">
                                <p onClick={() => changeState('openRightNav', !openRightNav)} className={`${openRightNav ? 'active-heading' : ''} header-active-sessions`}> ١٤ قائمة الأنتظار</p>
                            </div>
                            <div className="text-right hide-xs">
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