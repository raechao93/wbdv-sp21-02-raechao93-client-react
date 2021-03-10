import React from 'react'

const CourseEditorLayout = () =>

<div className="container-fluid">
    <div className="row">
        <div className="col-4">
            <ul className="list-group">
                <li className="list-group-item">Module 1 - jQuery
                    <i className="fas fa-hippo float-right"></i>
                </li>
                <li className="list-group-item active">Module 2 - React
                    <i className="fas fa-kiwi-bird float-right"></i>
                </li>
                <li className="list-group-item">Module 3 - Redux
                    <i className="fas fa-fish float-right"></i>
                </li>
                <li className="list-group-item">Module 4 - Native
                    <i className="fas fa-dog float-right"></i>
                </li>
                <li className="list-group-item">Module 5 - Angular
                    <i className="fas fa-cat float-right"></i>
                </li>
                <li className="list-group-item">Module 6 - Node
                    <i className="fas fa-otter float-right"></i>
                </li>
                <li className="list-group-item">Module 7 - Mongo
                    <i className="fas fa-dragon float-right"></i>
                </li>
                <li className="list-group-item">
                    <i className="fas fa-plus-circle float-right"></i>
                </li>
            </ul>
        </div>
        <div className="col-8">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Build</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Pages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Theme</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Store</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Apps</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" tabIndex="-1">Settings</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                        <i className="far fa-plus-square fa-2x"></i></a>
                </li>

            </ul>
            <div className="col-8">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Topic 4</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>


export default CourseEditorLayout