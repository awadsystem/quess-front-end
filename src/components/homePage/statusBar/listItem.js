import React from 'react'

const ListItem = props => {

    let { title, active, index, changeState, setCourse, course } = props

    function doOnClick() {
        setCourse(false, {})
        changeState('active', index)
    }

    let icon = null
    if (index === 3 && course.showCourse) {
        icon = (<img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/arrow-right%20%281221%29.svg" className="list-item-arrow" />)
    }

    return (
        <li id="status-bar-item" onClick={index === 4 ? () => null : () => doOnClick()} className={`${active === index ? 'active' : ''}`}>
            {icon} {title}
        </li>
    )
}

export default ListItem