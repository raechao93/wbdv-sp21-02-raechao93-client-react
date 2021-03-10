import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";
import './course-manager-style.css'


class CourseManager extends React.Component {
    state = {
        courses: [],
        qwe: 123,
        sdf: 456
    }

    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    componentDidMount = () =>
        // findAllCourses()
        //     .then(actualCourses => this.setState({
        //       courses: actualCourses
        //     }))
        findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                // const newCourses = this.state.courses
                //     .filter(course => course !== courseToDelete)
                // this.setState({
                //   courses: newCourses
                // })
                // this.setState((prevState) => {
                //   // let nextState = {...prevState}
                //   // nextState.courses =
                //   //     prevState
                //   //         .courses
                //   //         .filter(course => course !== courseToDelete)
                //
                //   let nextState = {
                //     ...prevState,
                //     courses: prevState.courses.filter
                //               (course => course !== courseToDelete)
                //   }
                //
                //   return nextState
                // })

                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return(
            <div>
                <Link to="/">
                    <i className="fas fa-2x fa-home float-right"></i>
                </Link>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <Route path="/courses/table">
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                        courses={this.state.courses}/>
                </Route>

                <Route path={[
                    "/courses/editor/:courseId",
                    "/courses/editor/:courseId/:moduleId",
                    "/courses/editor/:courseId/:moduleId/:lessonId",
                    "/courses/editor/:courseId/:moduleId/:lessonId/:topicId"]}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>
            </div>
        )
    }
}

export default CourseManager