import React from 'react'
import './courses.css'

// import Components
import Course from '../course/course'
import SingleCoursePage from './singleCourse'

// import DATA
import Data from './data.json'

// import Redux
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/course'

class Courses extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var activeComponent = document.querySelectorAll('[id=course-item]')
        var activeHolder = document.getElementById("active-single-course");

        activeComponent.forEach(element => {
            element.addEventListener('click', event => {
                console.log('Clicked')
                //handle click
                event.preventDefault();

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

        let objectArray = Object.values(Data)

        let courses = objectArray.map((value, index) => (
            <Course
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
                videos={value.videos}
                setCourse={this.props.setCourse}
                course={value}
            />
        ))

        return (
            <div id="courses">
                <div className="courses-inner">
                    <div className="container-fluid" dir={this.props.course.showCourse ? 'ltr' : 'rtl'}>
                        <div id="active-single-course" className="fade-in">
                            <div style={{ display: this.props.course.showCourse ? 'block' : 'none' }}>
                                <SingleCoursePage course={this.props.course.course} />
                            </div>
                            <div style={{ display: this.props.course.showCourse ? 'none' : 'flex' }} className="row">
                                {courses}
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Courses)