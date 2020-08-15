import React from 'react'

const Course = props => {

    let { price, currency, title, image, videos, setCourse, course } = props

    return (
        <div className="col-md-3 col-xs-12">
            <article id="course-item" onClick={() => setCourse(true, course)} className="course-item">
                <div className="course-inner-info" style={{ backgroundImage: `url(${image})` }}>
                    <div dir="rtl" className="info-holder">
                        <img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/video-icon.svg" />
                        <span>{videos}</span>
                    </div>
                </div>
                <div className="course-data-bottom">
                    <h4>{title}</h4>
                    <p>{currency} <span>{price}</span></p>
                </div>
            </article>
        </div>
    )

}

export default Course