import React,  {useState} from "react"
import {Link} from "react-router-dom";

const CourseComponent =(
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }


// const CourseCard = ({course}) =>
    return (
        <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12 col-xl-2">
            <div className="mt-3">
                <div className="card" style={{"width": "20rem"}}>
                    <div className="card-body">
                        <h5 className="card-title text-secondary">{title}</h5>
                        <p className="card-text">Some description.
                            {editing && <i onClick={() => saveTitle()}
                                           className="fas fa-check-circle float-right"></i>}
                            {editing && <i onClick={() => deleteCourse(course)}
                                           className="far fa-times-circle float-right"></i>}
                            <img className="card-img-top" alt="Card image cap"
                                 src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzaE-yVJFUm_0dmcYTWdYn-Oe-0rFaxi76A&usqp=CAU`}/>
                        </p>
                        {
                            !editing && <Link to="/courses/editor" className="btn btn-primary">
                                {title}
                            </Link>
                        }

                        {
                            editing && <input
                                onChange={(event) => setNewTitle(event.target.value)}
                                value={newTitle}
                                className="form-control"
                                type="search"/>
                        }

                        {!editing && <i onClick={()=> setEditing(true)}
                                        className="fas fa-pencil-alt float-right"></i>}

                    </div>
                </div>
            </div>
        </div>

    )
}

    export default CourseComponent