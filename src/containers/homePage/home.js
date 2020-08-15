import React from 'react'

// import page components
import Header from '../../components/homePage/header/header'
import Bio from '../../components/homePage/bio/bio'
import StatusBar from '../../components/homePage/statusBar/statusBar'

// Dynamic components
import About from '../../components/homePage/about/about'
import Store from '../../components/homePage/store/store'
import BroadCast from '../../components/homePage/broadcast/broadcast'
import Courses from '../../components/homePage/courses/courses'

// redux import
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/course'

class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 0
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
        let { active } = this.state
        switch (active) {
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
                <Header />
                <Bio />
                <StatusBar
                    active={this.state.active}
                    changeState={this.changeState}
                    setCourse={this.props.setCourse}
                    course={this.props.course}
                />

                <div id="componentHolder" className="fade-in">
                    {activeComponent}
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