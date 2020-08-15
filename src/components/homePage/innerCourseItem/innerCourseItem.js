import React from 'react'

const StoreItem = props => {

    let { register, price, currency, icon, title, image } = props

    return (
        <div className="col-md-4 col-xs-12">
            <article id="Storecomponent" className="store-item">
                <div className="store-item-image" style={{ backgroundImage: `url(${image})` }}>
                    <div dir="rtl" className="store-item-type-info">
                        <img src={icon} className="store-item-icon" />
                    </div>
                </div>
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