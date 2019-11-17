import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AutoComplete } from 'primereact/autocomplete';


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
    }],

}





const CreateForm = props => {

    const [state, setState] = useState(initialState)

    const suggestAnalytes = (event) => {
        console.log(event.query);

        let results = state.analytes.filter((analyte) => {
            console.log('c', analyte);
            return analyte.casNumber.startsWith(event.query.casNumber);
        });

        setState({ ...state, analyteSuggestions: results });
    }

    const handleOnChange = (e) => {
        console.log('hoc:', e);

        setState({ ...state, cas: e.value })
    }

    return (
        <div>

            <label>Select CAS</label>
            <AutoComplete value={state.analytes} field='casNumber' onChange={handleOnChange}
                suggestions={state.analyteSuggestions} completeMethod={suggestAnalytes} />
            <br />

            Debugger <pre>{JSON.stringify(state.analytes, null, 4)}</pre>
        </div>
    )
}

CreateForm.propTypes = {

}

export default CreateForm
