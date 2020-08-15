import React from 'react'

// import page components
import VideoPlayer from '../videoPlayer/videoPlayer'
import CourseItem from '../innerCourseItem/innerCourseItem'

import Data from './data-courses.json'

const singleCourse = props => {

    let { course } = props

    let objectArray = Object.values(Data)

    let coursesItems = objectArray.map((value, index) => (
        <CourseItem
            register={value.register}
            price={value.price}
            currency={value.currency}
            type={value.type}
            title={value.title}
            image={value.image}
            key={index}
            index={index}
            icon={value.icon}
        />
    ))

    let subCourse = objectArray.map((value, index) => {
        if (index > 2) {
            return null
        }
        return (
            <CourseItem
                register={value.register}
                price={value.price}
                currency={value.currency}
                type={value.type}
                title={value.title}
                image={value.image}
                key={index}
                index={index}
                icon={value.icon}
            />
        )
    })

    return (
        <section className="single-course-section">
            <div className="row">


                <div className="video-row">
                    <VideoPlayer
                        title={course.title}
                        image={course.image}
                        time="2:29"
                    />
                </div>

                <div className="about-row">
                    <div className="about-course">
                        <h3>وصف الكورس</h3>
                        <p>{course.description}</p>
                    </div>

                    <div className="row">
                        {coursesItems}
                    </div>


                    <div className="sub-course-holder">
                        <h3>صناعة محتوي تسويقي فعال </h3>
                        <div className="row">{subCourse}</div>
                    </div>

                    <div className="sub-course-holder">
                        <h3>صناعة محتوي تسويقي فعال </h3>
                        <div className="row">{subCourse}</div>
                    </div>

                </div>

            </div>
        </section>
    )

}

export default singleCourse