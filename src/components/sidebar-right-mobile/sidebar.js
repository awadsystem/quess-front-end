import React from 'react'
import './sidebar.css'

import User from './user'

import Data from './data.json'

const sideBar = () => {

    let objectArray = Object.values(Data)

    let users = objectArray.map((value, index) => {
        return (
            <User
                key={index}
                name={value.name}
                time={value.time}
                image={value.image}
                circle={value.circle}
                active={value.active}
            />
        )
    })

    return (
        <div className="sidebar-inner-right">
            {users}
        </div>
    )

}

export default sideBar