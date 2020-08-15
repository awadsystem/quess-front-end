import React from 'react'

const Chip = props => {

    let { title } = props

    return (
        <li className="chip-li">
            {title}
        </li>
    )
}

export default Chip