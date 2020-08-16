import React from 'react'

const ActiveStoreItem = props => {

    let { title, icon, type, price, currency, register } = props

    /*
        0 => VIDEO
        1 => AUDIO
        2 => WORD
        3 => PDF
    */

    let typeOfItem = null

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
        <div className="active-store-item">

            <div className="text-left">
                <div className="buy-sell-icon">
                    <img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/shopping-cart%20%282%29.svg" />
                </div>
                <p className="buy-sell-text">تحميل / شراء</p>
            </div>

            <div className="active-bottom-div">
                <div className="row">

                    <div className="col-sm-12 col-md-6 hide-xs">
                        <div className="text-left">
                            <div dir="rtl" className="registration-section">
                                <img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/enter.svg" /> <span className="register-number">{register}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="text-right right-active-section">
                            {typeOfItem}
                            <img src={icon} className="store-item-icon" />
                            <h3>{title}</h3>
                            <p dir="rtl"><span>{price}</span> {currency}</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 hide-md">
                        <div className="text-left">
                            <div dir="rtl" className="registration-section">
                                <img src="https://assetshost.fra1.cdn.digitaloceanspaces.com/enter.svg" /> <span className="register-number">{register}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )

}

export default ActiveStoreItem