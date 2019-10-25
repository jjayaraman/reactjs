import React from 'react'
import { connect } from 'react-redux'

const Counter = (props) => {
    return (
        <div>
            Count : props
        </div>
    )
}

const mapStateToProps = (state) => {
    props.count = state.count
}

const mapPropsToReducer = (dispatch) => {
    return {
        'INC': 1
    }
}

export default connect()(Counter)
