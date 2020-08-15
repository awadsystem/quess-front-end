import React from 'react'

const IconWithText = props => {

    let { text, title, icon, border } = props

    return (
        <div className="icon-holder">
            <div className="icon-information">
                <p>{title}</p>
                <p>{text}</p>
            </div>
            <div className="icon-image">
                <div className="icon-image-circle" style={{ backgroundImage: `url(${border})` }}>
                    <img src={icon} />
                </div>
            </div>
        </div>
    )
}

export default IconWithText