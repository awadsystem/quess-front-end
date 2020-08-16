import React from 'react'
import './bio.css'


// mobile components
import StatusComponent from '../statusMobile/status'
import SubHeader from '../subHeaderMobile/header'

const Bio = ({ openNav }) => {

    return (
        <section id="bio" className={openNav ? 'radius-border' : ''}>

            <div className="hide-md">
                <SubHeader />
                <StatusComponent />
            </div>
            <div className="bio-inner">
                <div className="container-fluid">


                    <div className="row">
                        <div className="col-xs-12 col-md-6 hide-xs">
                            <img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/Group%2071.svg" className="logo" />
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="doctor-profile text-right">

                                <div className="flex-container" dir="ltr">


                                    <img className="home-icon hide-xs" src="https://assetshost.fra1.cdn.digitaloceanspaces.com/icons8-home.svg" />
                                    <div className="doctor-image" />

                                    <div className="basic-info">
                                        <p className="name">العيادة الرقمية</p>
                                        <p className="subname">لـ د. هند الناهض <span className="bio-button-status">مشغول بإستشارة</span></p>
                                        <div className="review-section">
                                            <img className="gold-star" src="https://assetshost.fra1.cdn.digitaloceanspaces.com/Group.svg" />
                                            <img className="gold-star" src="https://assetshost.fra1.cdn.digitaloceanspaces.com/Group.svg" />
                                            <img className="gold-star" src="https://assetshost.fra1.cdn.digitaloceanspaces.com/Group.svg" />
                                            <img className="brown-star" src="https://assetshost.fra1.cdn.digitaloceanspaces.com/Group-gray.svg" />
                                            <span className="review-keyword">تقييم</span>
                                        </div>
                                    </div>



                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Bio