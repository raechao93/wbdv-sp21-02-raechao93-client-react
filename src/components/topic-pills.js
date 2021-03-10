import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from "../services/topic-service";
import lessonService from "../services/lesson-service";


const TopicPills = (
    {
        topics=[
            {_id: "123", title: "Topic A"},
            {_id: "123", title: "Topic B"},
            {_id: "123", title: "Topic C"}
        ],
        findTopicsForLesson,
        createTopic,
        deleteTopic,
        updateTopic
    }) => {
    const {courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        console.log("LOAD TOPICS FOR LESSON: " + lessonId)
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return(
        <div>
            <h2>Topics</h2>
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        <li className="nav-item">
                            <EditableItem
                                to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                deleteItem={deleteTopic}
                                updateItem={updateTopic}
                                active={topic._id === topicId}
                                item={topic}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createTopic(lessonId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        console.log("LOAD TOPICS FOR LESSON:")
        console.log(lessonId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },
    createTopic: (lessonId) => {
        console.log("CREATE TOPIC FOR LESSON: " + lessonId)
        topicService
            .createTopicForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },
    deleteTopic: (topicId) => {
        console.log("DELETE TOPIC FOR LESSON: " + topicId)
        topicService
            .deleteTopicForLesson(topicId._id)
            .then(topics => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: topicId
            }))
    },
    updateTopic: (topic) =>
        topicService
            .updateTopicForLesson(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            })),
})

export default connect(stpm, dtpm)(TopicPills)