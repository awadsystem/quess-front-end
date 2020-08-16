import React from 'react'

const IconWithText = props => {

    let { text, title, icon, border, index, changeState, activeIndex } = props

    let active = index === activeIndex

    return (
        <div onClick={() => changeState('active', index)} className="icon-holder-mobile">
            <div className="icon-image-mobile">
                {active ?
                    <div className="icon-title-holder">
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </div>
                    : ''}
                <div className={`icon-image-circle-mobile ${active ? 'active-image-circle' : ''}`} style={{ backgroundImage: `url(${border})` }}>
                    <img src={icon} />
                </div>
            </div>
        </div>
    )
}

export default IconWithText