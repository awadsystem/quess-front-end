import React from 'react'
import './broadcast.css'

// import page components
import VideoPlayer from '../videoPlayer/videoPlayer'
import BroadCaseItem from '../playerItem/playerItem'
import ActiveStoreItem from '../playerItem/activeStoreItem'

// import JSON data
import Data from './data.json'

class Store extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 0
        }

        // bind functions
        this.changeState = this.changeState.bind(this)
    }

    // change state component from child component
    changeState(name, value) {
        this.setState({ [name]: value })
    }

    componentDidMount() {
        var activeComponent = document.querySelectorAll('[id=Storecomponent]')
        console.log(activeComponent)
        var activeHolder = document.getElementById("activeComponent");

        activeComponent.forEach(element => {
            element.addEventListener('click', event => {
                //handle click
                event.preventDefault();
                console.log('clicked')

                // -> removing the class
                activeHolder.classList.remove("fade-in");

                // -> triggering reflow /* The actual magic */
                // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
                // Oops! This won't work in strict mode. Thanks Felis Phasma!
                // element.offsetWidth = element.offsetWidth;
                // Do this instead:
                void activeHolder.offsetWidth;

                // -> and re-adding the class
                activeHolder.classList.add("fade-in");
            })
        })
    }

    render() {

        let { active } = this.state
        let objectArray = Object.values(Data)

        let storeItems = objectArray.map((value, index) => (
            <BroadCaseItem
                register={value.register}
                price={value.price}
                currency={value.currency}
                type={value.type}
                title={value.title}
                image={value.image}
                changeState={this.changeState}
                key={index}
                index={index}
                icon={value.icon}
            />
        ))

        let activeComponent = parseInt(objectArray[active].type) === 0 ?
            <VideoPlayer
                title={objectArray[active].title}
                image={objectArray[active].image}
                time="2:29"
            /> :
            <ActiveStoreItem
                title={objectArray[active].title}
                icon={objectArray[active].icon}
                price={objectArray[active].price}
                currency={objectArray[active].currency}
                register={objectArray[active].register}
                type={objectArray[active].type}
            />

        return (
            <section id="store">
                <div className="store-inner">
                    <div className="video-row">
                        <div id="activeComponent" className="fade-in">
                            {activeComponent}
                        </div>
                    </div>

                    <div className="about-row">
                        <div className="row">
                            {storeItems}
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Store