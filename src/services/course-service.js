const COURSE_URL = "https://wbdv-generic-server.herokuapp.com/api/001027684/courses"

export const findAllCourses = () =>
    fetch(COURSE_URL).then(response => response.json())

export const deleteCourse = (courseId) =>
fetch(`${COURSE_URL}/${courseId}`,{
    method:'DELETE'
}).then(response => response.json())

export const createCourse = (course) =>
    fetch(COURSE_URL,{
        method:'POST',
        body:JSON.stringify(course),
        headers:{
            'content-type':'application/json'
        }
    }).then(response => response.json())

export const updateCourse = (courseId, course) =>
    fetch(`${COURSE_URL}/${courseId}`,{
        method:'PUT',
        body:JSON.stringify(course),
        headers:{
            'content-type':'application/json'
        }
    }).then(response => response.json())



const api = {
    findAllCourses,
    deleteCourse,
    createCourse,
    updateCourse
}

export default api;