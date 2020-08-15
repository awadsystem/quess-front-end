import React from 'react'
import './statusBar.css'

// import child components
import IconWithText from './icon'
import ListItem from './listItem'

const StatusBar = props => {

    let { active, changeState, setCourse, course } = props

    let listItems = ['نبذه عن هند', 'متجر', 'برودكاست', 'كورسات', 'حجز عيادة (20 دينار كويتي)'].map((value, index) => (
        <ListItem
            title={value}
            key={index}
            active={active}
            index={index}
            changeState={changeState}
            setCourse={setCourse}
            course={course}
        />
    ))

    return (
        <section id="status-bar">
            <div className="status-bar-inner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 left-section">
                            <IconWithText
                                text="٣٦ Mbps"
                                title="سرعة الأنترنت"
                                icon="https://assetshost.fra1.cdn.digitaloceanspaces.com/wifi.svg"
                                border="https://assetshost.fra1.cdn.digitaloceanspaces.com/Ellipse%202.svg"
                            />

                            <IconWithText
                                text="لم تقم باختبارها"
                                title="تجربة الكاميرا"
                                icon="https://assetshost.fra1.cdn.digitaloceanspaces.com/Path%201044.svg"
                                border="https://assetshost.fra1.cdn.digitaloceanspaces.com/Ellipse-red.svg"
                            />

                            <IconWithText
                                text="جيد جدآ"
                                title="تجربة الصوت "
                                icon="https://assetshost.fra1.cdn.digitaloceanspaces.com/Path%201035.svg"
                                border="https://assetshost.fra1.cdn.digitaloceanspaces.com/Ellipse-green.svg"
                            />


                        </div>

                        <div className="col-xs-12 col-md-6">
                            <ul dir="rtl" className="menu-ul">
                                {listItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatusBar