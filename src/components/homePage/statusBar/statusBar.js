import React from 'react'
import './statusBar.css'

// import child components
import IconWithText from './icon'
import ListItem from './listItem'

import ScrollMenu from 'react-horizontal-scrolling-menu';


// list of items
let list = [
    { name: 'نبذه عن هند', id: 0 },
    { name: 'متجر', id: 1 },
    { name: 'برودكاست', id: 2 },
    { name: 'كورسات', id: 3 },
    { name: 'حجز عيادة (20 دينار كويتي)', id: 4 }
];


list = list.reverse()

const MenuItem = ({ text, selected }) => {
    return <div
        id="status-bar-item"
        className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) => list.map(el => {
    const { name, id } = el;
    return <MenuItem text={name} key={id} selected={selected} />;
});

const selected = 0;

class StatusBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected,
            firstTime: 0
        }
        this.menuItems = Menu(list, selected);
        this.moveToLastElement = this.moveToLastElement.bind(this)
    }

    onSelect = key => {
        if (key === 4) {
            return
        }
        this.setState({ selected: key });
    }

    moveToLastElement() {
        if (this.state.firstTime <= 3) {
            let scrollMenu = document.getElementsByClassName("menu-wrapper--inner");
            if (typeof scrollMenu !== 'undefined') {
                scrollMenu[0].style.transform = "translate3d(-163.383px, 0px, 0px)";
            }
            this.setState({ firstTime: this.state.firstTime + 1 })
        }
    }

    render() {

        let { active, changeState, setCourse, course } = this.props

        const { selected } = this.state;
        const menu = this.menuItems;

        let listItems = ['نبذه عن هند', 'متجر', 'برودكاست', 'كورسات', 'حجز عيادة (20 دينار كويتي)'].map((value, index) => (
            <ListItem
                title={value}
                key={index}
                active={active}
                index={index}
                changeState={changeState}
                setCourse={setCourse}
                course={course}
                scrollToSelected={true}
                rtl={true}
            />
        ))

        return (
            <section id="status-bar">
                <div className="status-bar-inner">
                    <div className="container-fluid">

                        <div dir="ltr" className="hide-md horizontal-menu">
                            <ScrollMenu
                                data={menu}
                                arrowLeft={null}
                                arrowRight={null}
                                selected={selected}
                                onSelect={(key) => {
                                    this.onSelect(key); this.props.setCourse(false, {});
                                    this.props.changeState('active', key);
                                }}
                                onFirstItemVisible={() => this.moveToLastElement()}
                            />
                        </div>

                        <div className="row hide-xs">
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
}

export default StatusBar