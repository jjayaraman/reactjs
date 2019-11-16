import React, { useState } from 'react'

const initialState = {
    analytes: [{
        "id": 37829,
        "code": "1",
        "desc": "acenaphthene-d10",
        "componentId": 239968,
        "casNumber": "15067-26-2"
    },
    {
        "id": 37830,
        "code": "2",
        "desc": "chrysene-d12",
        "componentId": 240254,
        "casNumber": "1719-03-5"
    },
    {
        "id": 37831,
        "code": "3",
        "desc": "1,4-dichlorobenzene-d4",
        "componentId": 241899,
        "casNumber": "3855-82-1"
    }]
}
const [state, setState] = useState(initialState)


const CreateQuote = () => {

    return (
        <div>
            Create Quote
        </div>
    )
}

export default CreateQuote
