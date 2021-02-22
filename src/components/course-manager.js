import React, {useState}  from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";
import './course-manager-style.css'

class CourseManager extends React.Component{
    state = {
        courses: [
        ]
    }

    updateCourse = (course) =>{
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(c => {
                    if(c._id === course._id){
                        return course
                    } else{
                        return c
                    }
                })
            })))
    }

    componentDidMount = () =>
        // findAllCourses().then(actualCourses => this.setState({
        //     courses: actualCourses
        // }))

        findAllCourses().then(courses => this.setState({courses}))


    addCourse = () =>{
        // alert('DAMNNN!!!Coding Is Your Passion!!!')

        const newCourse ={
            title:this.courseName.value,
            owner:"Me",
            lastModified:"1/1/2021"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState((prevState) => ({
                ...prevState,
                courses: [
                    ...prevState.courses,
                    course
                ]
            })))
        this.setState({titile:""})

        // this.state.courses.push(newCourse)
        // this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id).then(status => {
            // const newCourses = this.state.courses
            //     .filter(course => course !== courseToDelete)
            // this.setState({
            //     courses: newCourses
            // })

            this.setState((prevState) => {
                let nextState = {...prevState}
                nextState.courses =
                    prevState
                        .courses
                        .filter(course => course !== courseToDelete)
                return nextState
            })
        })
    }

    render() {
        return(
            <div>
                <br/>

                <div className="col-1">
                    <Link to="/courses/table">
                        <i className="fas fa-2x fa-list float-left text-black-50"></i>
                    </Link>
                </div>

                <div className="row">
                    <div className="col-3 d-none d-lg-block">
                        <h4>Course Manager</h4>
                    </div>
                    <div className="col-8">
                        {/*<form onReset={this.resetForm}>*/}
                            <input key={`${Math.floor((Math.random() * 1000))}-min`} defaultValue={"Default Course"} name="courseInput" type="search" placeholder="Type a New Course Name..." ref={el => this.courseName=el} className="form-control float-left"/>
                        {/*</form>*/}
                    </div>
                    <div className="col-1">
                        <i onClick={this.addCourse} className="fas fa-2x fa-plus-circle text-danger float-right" type="submit"></i>
                    </div>
                </div>

                <br/>

                <Route path="/courses/table">
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses} />
                </Route>

                <Route path="/courses/grid">
                <CourseGrid
                    deleteCourse={this.deleteCourse}
                    updateCourse={this.updateCourse}
                    courses={this.state.courses}/>
                </Route>

                <Route path="/courses/editor"
                       render={(props)=> <CourseEditor {...props}/>}>
                </Route>

                <a className="float">
                    <i onClick={this.addCourse} className="fa fa-plus my-float"></i>
                </a>

            </div>
        )
    }

}
export default CourseManager