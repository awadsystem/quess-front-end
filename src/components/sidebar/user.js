import React from 'react'

const User = props => {

    let { name, time, image, circle, active } = props

    return (
        <div className={`user-row-holder ${active ? 'active-user' : ''}`}>
            <div className="user-image" style={{ backgroundImage: `url(${circle})` }}>
                <img src={image} />
            </div>
            <p>{time}</p>
            <h4>{name}</h4>
        </div>
    )

}

export default User