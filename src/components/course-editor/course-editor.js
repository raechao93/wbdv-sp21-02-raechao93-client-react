import React from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {courseId, moduleId, layout} = useParams();
    return (
        <Provider store={store}>
            <div>
                <h2>
                    Course Editor
                    <Link to={`/courses/${layout}`}>
                        <a className="fas fa-arrow-left float-right">Back</a>
                    </Link>
                    {/*<i onClick={() => props.history.goBack()}*/}
                    {/*   className="fas fa-times float-right"></i>*/}
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <TopicPills/>
                    </div>
                </div>
            </div>
        </Provider>)}

export default CourseEditor