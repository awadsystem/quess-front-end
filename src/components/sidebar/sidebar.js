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

            <div className="hide-md">
                <div className="text-center">
                    <ul className="mobile-menu-list">
                        <li className="active-li">الرئيسية</li>
                        <li>نبذه عنا</li>
                        <li>الخبراء</li>
                        <li>سؤال وجواب</li>
                        <li>اختبارات كورونا</li>
                        <li>أتصل بنا</li>
                        <li className="bolded-li">أنضم كخبير</li>
                    </ul>
                </div>
            </div>

            <div className="hide-xs">
                <h3>  ١٤ قائمة الأنتظار</h3>
                {users}
            </div>

            <div className="row-holder hide-xs">
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