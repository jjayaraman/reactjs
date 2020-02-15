import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AutoComplete } from 'primereact/autocomplete';


const initialState = {
    filteredAnalyte: [],
    simples: ['methanol', 'acetone', 'floro'],
    filteredSimple: []
}


const CreateForm = props => {

    const { analytes, handleOnChange } = props
    console.log('props', props);


    const [state, setState] = useState(initialState)

    const suggestAnalytes = (event) => {
        console.log('event query :: ', event.query);

        let results = analytes.filter((analyte) => {
            console.log('suggestAnalytes . analyte ', analyte);
            return analyte.casNumber.startsWith(event.query.casNumber);
        });

        setState({ ...state, filteredAnalyte: results });
    }

    const suggestSimple = (event) => {
        console.log('event query :: ', event.query);

        let results = state.simples.filter((simple) => {
            console.log('suggestAnalytes . simple ', simple);
            return simple.startsWith(event.query);
        });

        setState({ ...state, filteredSimple: results });
    }

    return (
        <div>

            <label>Select CAS</label>
            <AutoComplete id='cas' value={state.analyte} field="casNumber" onChange={handleOnChange}
                suggestions={state.filteredAnalyte} completeMethod={suggestAnalytes} minLength={1} dropdown={true} />
            <br />


            <label>Select CAS simple </label>
            <AutoComplete id='simple' value={state.simple} onChange={handleOnChange}
                suggestions={state.filteredSimple} completeMethod={suggestSimple} minLength={1} dropdown={true} />
            <br />

            Debugger <pre>{JSON.stringify(state, null, 4)}</pre>
        </div>
    )
}

CreateForm.propTypes = {

}

export default CreateForm
