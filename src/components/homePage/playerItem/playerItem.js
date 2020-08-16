import React from 'react'

const StoreItem = props => {

    let { register, index, price, currency, type, icon, title, image, changeState } = props

    let typeOfItem = null

    /*
        0 => VIDEO
        1 => AUDIO
        2 => WORD
        3 => PDF
    */

    switch (parseInt(type)) {
        case 0:
            typeOfItem = null
            break;
        case 1:
            typeOfItem = (<span className="store-item-span">AUDIO</span>)
            break
        case 2:
            typeOfItem = (<span className="store-item-span">WORD</span>)
            break
        case 3:
            typeOfItem = (<span className="store-item-span">PDF</span>)
            break
    }

    return (
        <div onClick={() => changeState('active', index)} className="col-md-4 col-sm-6">
            <article id="Storecomponent" className="store-item">
                {parseInt(type) === 0 ? <div className="store-item-image" style={{ backgroundImage: `url(${image})` }}>
                    <div dir="rtl" className="store-item-type-info">
                        {typeOfItem}
                        <img src={icon} className="store-item-icon" />
                    </div>
                </div> : <div className="store-item-gradient">
                        <div dir="rtl" className="store-item-type-info">
                            <img src={icon} className="store-item-icon" />
                            {typeOfItem}
                        </div>
                    </div>}
                <h4 className="store-item-title">{title}</h4>
                <div dir="rtl">
                    <p dir="rtl"><span>{price}</span> {currency}</p>
                    <img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/enter.svg" /> <span className="register-number">{register}</span>
                </div>
            </article>
        </div>
    )
}

export default StoreItem