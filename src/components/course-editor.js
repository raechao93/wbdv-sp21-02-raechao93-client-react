import React from 'react'
import {Link} from "react-router-dom";


const CourseEditor = ({history}) =>
    <div>
        <h2>
             Course Editor
            <i onClick={() => history.goBack()}
               className="fas fa-backward float-left"></i>
        </h2>
    </div>

// const CourseEditor = () => {
//     return(
//         <h1>Course Editor</h1>
//     )
// }
export default CourseEditor