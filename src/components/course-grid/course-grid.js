import React from 'react'
import CourseComponent from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = (props) =>{
return(
    <div>
        <div className="row">
            <div className="col-4 d-none d-md-block">
                <div style={{fontWeight: 'bold', fontSize: '21px'}}>Recent Document</div>
            </div>
            <div className="col-5 d-none d-md-block">
                <div style={{fontWeight: 'bold', fontSize: '21px'}}>
                    Owned by Me
                    <i className="fas fa-caret-down"></i>
                </div>

            </div>

        <div className="col-3">
                        <i className="fas fa-folder mr-1 float-right"></i>
                        <i className="fas fa-filter mr-1 float-right"></i>
                        <Link to="/courses/table">
                            <i className="fas fa-list text-dark mr-1 float-right"></i>
                        </Link>
        </div>
        </div>
        <div className="container-fluid">
        <h1>Course Grid</h1>
                <div className="row">
                {
                    props.courses.map((course,ndx) =>
                       <CourseComponent course={course}
                                        updateCourse={props.updateCourse}
                                        deleteCourse={props.deleteCourse}
                                        key={ndx}
                                        title={course.title}
                                        owner={course.owner}
                                        lastModified={course.date}/>
                    )
                }
                </div>
        </div>
    </div>)
}

export default CourseGrid