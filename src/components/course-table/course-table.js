import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

class CourseTable extends React.Component{
    constructor(props) {
        super(props);
        // console.log(props)
    }

    render() {
        return(
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td style={{fontWeight: 'bold'}}>Title</td>
                        <td className="d-none d-sm-table-cell" style={{fontWeight: 'bold'}}>Owner</td>
                        <td className="d-none d-md-table-cell" style={{fontWeight: 'bold'}}>Last Modified</td>
                        <td>
                            <i className="fas fa-folder mr-1"></i>
                            <i className="fas fa-filter mr-1"></i>
                            <Link to="/courses/grid">
                                <i className="fas fa-th text-dark"></i>
                            </Link>
                        </td>
                    </tr>
                    </thead>
                <tbody>
                    <h2>
                        Course Table
                        <i className="fas fa-kiwi-bird"></i>
                    </h2>
                    {
                        this.props.courses.map((course,ndx) =>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key = {ndx}
                                course={course}
                                title={course.title}
                                lastModified={course.lastModified}
                                owner={course.owner}/>)
                    }
                </tbody>
                </table>
        </div>
        )
    }
}
export default CourseTable