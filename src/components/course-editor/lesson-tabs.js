import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'
import moduleService from "../../services/module-service";

const LessonTabs = (
    {
        lessons=[
            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}
        ],
        findLessonsForModule,
        createLesson,
        deleteLesson,
        updateLesson,
        clearLesson
    }) => {
    const {courseId, moduleId, lessonId,layout} = useParams();
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }else{
            clearLesson(moduleId)
        }
    }, [moduleId])
    return(
        <div>
            <h2>Lessons</h2>
            <ul className="nav nav-pills">
                {
                    lessons.map(lesson =>
                        <li className="nav-item">
                            <EditableItem
                                active={lesson._id === lessonId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                deleteItem={deleteLesson}
                                updateItem={updateLesson}
                                item={lesson}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createLesson(moduleId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        console.log("LOAD LESSONS FOR MODULE:")
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons
            }))
    },
    createLesson: (moduleId) => {
        console.log("CREATE LESSON FOR MODULE: " + moduleId)
        lessonService
            .createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    deleteLesson: (lessonId) => {
        console.log("DELETE LESSON FOR MODULE: " + lessonId)
        lessonService
            .deleteLessonForModule(lessonId._id)
            .then(lessons => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: lessonId
            }))
    },
    updateLesson: (lesson) =>
        lessonService
            .updateLessonForModule(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson
            })),
    clearLesson: (moduleId) => {
        lessonService.clearLesson(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons:[]
            }))
    },
})

export default connect(stpm, dtpm)(LessonTabs)