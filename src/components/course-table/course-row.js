import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {updateCourse} from "../../services/course-service";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {

    const [editing, setEditing] = useState(false)
    const [newTitle,setNewTitle] = useState(title)
    const saveTitle = () =>{
        setEditing(false)
        const newCourse = {
            ...course,
            title:newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <tr>
        <td>
            {
                !editing &&
                <Link to={`/courses/table/edit/${course._id}`}>
                {title}
                </Link>
            }
            {
                editing &&
                <input
                    onChange={(event => setNewTitle(event.target.value))}
                    value={newTitle}
                    className="form-control"
                    type="search"/>
            }
        </td>
            <td className="d-none d-sm-table-cell">owner</td>
            <td className="d-none d-md-table-cell">1/1/2021</td>
        <td>
            <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
            {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
            {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
        </td>
    </tr>
    )
}

export default CourseRow