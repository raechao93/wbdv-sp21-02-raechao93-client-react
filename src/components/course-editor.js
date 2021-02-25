import React from 'react'
import {Link} from "react-router-dom";
import CourseEditorLayout from "./course-editor-layout";


const CourseEditor = ({history}) =>
    <div>
        <h3>
             Course Editor
            <a onClick={() => history.goBack()}
               className="fas fa-backward float-left">Back</a>
            <CourseEditorLayout/>

        </h3>
    </div>

// const CourseEditor = () => {
//     return(
//         <h1>Course Editor</h1>
//     )
// }
export default CourseEditor