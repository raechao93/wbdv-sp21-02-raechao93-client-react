import React from 'react'
import CounterUp from "./counter-up";
import CounterDisplay from "./counter-display";
import CounterDown from "./counter-down";
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    count: 1234
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "Up":
            return {
            count: prevState.count + 1
        }
        case "Down":
            return{
                count: prevState.count - 1
            }
        default:
            return prevState

    }
}

const store = createStore(reducer)

const CounterRedux = () =>
    <Provider store={store}>
        <div>
            <CounterDisplay/>
            <CounterUp/>
            <CounterDown/>
        </div>
    </Provider>

export default CounterRedux