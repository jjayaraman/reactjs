import React, { useState, useEffect } from 'react'
import { Panel } from 'primereact/panel'

import AnalyteList from './AnalyteList'
import CreateForm from './CreateForm'

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


const CreateQuote = () => {

    const [state, setState] = useState(initialState)

    useEffect(() => {


    }, [])

    const handleOnChange = (e) => {
        const { id, value } = e.target
        console.log('hoc:', value);
        setState({ ...state, [id]: value })
    }


    let analytes = state.analytes
    let header = 'Create Custom Quotation'

    return (
        <div>
            <Panel header={header}>
                <CreateForm analytes={analytes} handleOnChange={handleOnChange} />
                {/*<AnalyteList analytes={analytes} handleOnChange={handleOnChange} /> */}
            </Panel>

            Debugger :: <pre>{JSON.stringify(state, null, 4)}</pre>
        </div>
    )
}

export default CreateQuote
