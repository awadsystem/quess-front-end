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
        <div className="sidebar-inner">
            <h3>  ١٤ قائمة الأنتظار</h3>
            {users}

            <div className="row-holder">
                <div className="text-right copyright">
                    <p>جميع الحقوق محفوظة</p>
                    <p>تايم فيوير © ٢٠١٣ - ٢٠٢٠</p>
                    <img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/social-icon-3.svg" />
                    <img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/social-icon-2.svg" />
                    <img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/social-icon.svg" />
                </div>
            </div>
        </div>
    )

}

export default sideBar