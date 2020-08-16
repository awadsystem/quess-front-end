import React from 'react'
import './status.css'

import IconWithText from './icon'

class Status extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 0
        }
        this.changeState = this.changeState.bind(this)
    }

    changeState(name, value) {
        this.setState({ [name]: value })
    }

    render() {

        let { active } = this.state

        return (
            <div className="status-mobile">
                <div className="status-direction">
                    <div className={`icon-holder-div ${active === 0 ? 'active-icon' : ''}`}>
                        <IconWithText
                            text="٣٦ Mbps"
                            title="سرعة الأنترنت"
                            icon="https://assetshost.fra1.cdn.digitaloceanspaces.com/wifi.svg"
                            border="https://assetshost.fra1.cdn.digitaloceanspaces.com/Ellipse%202.svg"
                            activeIndex={active}
                            changeState={this.changeState}
                            index={0}
                        />
                    </div>
                    <div className={`icon-holder-div ${active === 1 ? 'active-icon' : ''}`}>
                        <IconWithText
                            text="لم تقم باختبارها"
                            title="تجربة الكاميرا"
                            icon="https://assetshost.fra1.cdn.digitaloceanspaces.com/Path%201044.svg"
                            border="https://assetshost.fra1.cdn.digitaloceanspaces.com/Ellipse-red.svg"
                            active={false}
                            activeIndex={active}
                            changeState={this.changeState}
                            index={1}
                        />
                    </div>
                    <div className={`icon-holder-div ${active === 2 ? 'active-icon' : ''}`}>
                        <IconWithText
                            text="جيد جدآ"
                            title="تجربة الصوت "
                            icon="https://assetshost.fra1.cdn.digitaloceanspaces.com/Path%201035.svg"
                            border="https://assetshost.fra1.cdn.digitaloceanspaces.com/Ellipse-green.svg"
                            active={false}
                            activeIndex={active}
                            changeState={this.changeState}
                            index={2}
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default Status