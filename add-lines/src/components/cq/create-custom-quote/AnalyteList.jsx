import React from 'react'
import PropTypes from 'prop-types'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//import { Button } from 'primereact/button';
import { Button } from 'primereact/button';

const AnalyteList = props => {

    let header = 'Selected Analytes'
    let paginatorLeft = <Button icon="pi pi-refresh" />;
    let paginatorRight = <Button icon="pi pi-cloud-upload" />;


    const { analytes } = props
    console.log(props.analytes);

    return (
        <div>

            <DataTable value={analytes} header={header} paginator={true} paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
                rows={10} rowsPerPageOptions={[5, 10, 20]}>
                <Column field="casNumber" header="CAS" />
                <Column field="desc" header="Description" />
                <Column field="code" header="Code" />
                <Column field="id" header="Id" />
            </DataTable>
        </div>
    )
}

AnalyteList.propTypes = {

}

export default AnalyteList
