import './App.css';
import CourseManager from "./components/course-manager";
import {BrowserRouter} from "react-router-dom";
import {BrowserRouter as Router,Link,Route} from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
            <Route path="/" exact={true}>
                <Home/>
            </Route>
            <Route path="/courses">
          <CourseManager/>
            </Route>
        </div>
      </BrowserRouter>
  );

}

export default App;
