import React from 'react'
import './home.css'

// import page components
import Header from '../../components/homePage/header/header'
import Bio from '../../components/homePage/bio/bio'
import StatusBar from '../../components/homePage/statusBar/statusBar'

// Dynamic components
import About from '../../components/homePage/about/about'
import Store from '../../components/homePage/store/store'
import BroadCast from '../../components/homePage/broadcast/broadcast'
import Courses from '../../components/homePage/courses/courses'
import Sidebar from '../../components/sidebar/sidebar'

// import Mobile Right SideMenu
import MobileSideMenu from '../../components/sidebar-right-mobile/sidebar'

// redux import
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/course'

class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 0,
            openNav: false,
            openRightNav: false
        }

        // bind functions
        this.changeState = this.changeState.bind(this)
    }

    // change state from child component
    changeState(name, value) {
        this.setState({ [name]: value })
    }

    componentDidMount() {
        // retrieve the element
        var elements = document.querySelectorAll('[id=status-bar-item]');
        var mainBody = document.getElementById("componentHolder");

        // reset the transition by...
        elements.forEach(element => {
            element.addEventListener('click', event => {
                //handle click
                event.preventDefault();

                // -> removing the class
                mainBody.classList.remove("fade-in");

                // -> triggering reflow /* The actual magic */
                // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
                // Oops! This won't work in strict mode. Thanks Felis Phasma!
                // element.offsetWidth = element.offsetWidth;
                // Do this instead:
                void mainBody.offsetWidth;

                // -> and re-adding the class
                mainBody.classList.add("fade-in");
            })
        })

    }

    render() {

        let activeComponent
        let { active, openNav, openRightNav } = this.state

        switch (parseInt(active)) {
            case 0:
                activeComponent = <div className="fade-in"><About /></div>
                break;
            case 1:
                activeComponent = <div className="fade-in"><Store /></div>
                break
            case 2:
                activeComponent = <div className="fade-in"><BroadCast /></div>
                break
            case 3:
                activeComponent = <div className="fade-in"><Courses /></div>
                break
        }

        return (
            <div className="home-page-wrapper">



                <div className={`wrapper ${openRightNav ? 'open-right-nav' : ''} ${openNav ? 'open-nav' : ''}`}>

                    <Header
                        openNav={openNav}
                        changeState={this.changeState}
                        openRightNav={openRightNav}
                    />

                    <div className={`${openRightNav ? 'shadow-radius-right' : ''} ${openNav ? 'shadow-radius' : ''} main-components-holder`}>
                        <Bio openNav={openNav} />
                        <StatusBar
                            active={active}
                            changeState={this.changeState}
                            setCourse={this.props.setCourse}
                            course={this.props.course}
                        />

                        <div className="background-holder">
                            <div id="componentHolder" className="fade-in">
                                {activeComponent}
                            </div>
                        </div>

                        <div className="hide-md">
                            <button className="floating-button">حجز عيادة (20 دينار كويتي)</button>
                        </div>

                    </div>
                </div>

                <div className={`nav__right ${openRightNav ? 'open-nav-right' : ''}`}>
                    <MobileSideMenu

                    />
                </div>

                <div className={`nav__body ${openNav ? 'open-nav' : ''}`}>
                    <Sidebar
                    />
                </div>

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        course: state.course
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCourse: (show, course) => dispatch(actions.setCourseData(show, course))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)