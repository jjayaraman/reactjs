import React from 'react'
import { connect } from 'react-redux'
import { COUNTER_INC, COUNTER_DEC } from '../redux/action/CounterAction'

const Counter = (props) => {

    return (
        <div>
            Count : {props.count}<br />
            <button onClick={props.handleAdd}>+</button>
            <button onClick={props.handleReduce}>-</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    props = state
    return props
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: () => dispatch({ type: COUNTER_INC, value: 1 }),
        handleReduce: () => dispatch({ type: COUNTER_DEC, value: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
