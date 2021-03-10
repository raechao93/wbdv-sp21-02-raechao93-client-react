import React from 'react'
import {connect} from 'react-redux'

const CounterUp = ({up}) =>

    <button onClick={up}>
        Up
    </button>

const stmp = (state) => {}

const dtmp = (dispatch) => {
    return {
        up: () => {
            dispatch({type:"UP"})
            // alert("UP")
        }
    }
}

export default connect(stmp, dtmp)(CounterUp)