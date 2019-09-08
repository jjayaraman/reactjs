import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchPriceParameters extends Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        const URL = "https://jsonplaceholder.typicode.com/users";
        fetch(URL)
            .then(data => data.json())
            .then(json => {
                console.log('json ', json);
                this.setState({ error: null, isLoaded: true, data: json })
            })
            .catch(error => {
                console.log('error : ', error);
                this.setState({ error: error, isLoaded: true, data: [] });
            })
            .finally(() => {
                console.log('mount : ', this.state);
            })
    }

    // static propTypes = {
    //     prop: PropTypes
    // }


    render() {
        const { error, isLoaded, data } = this.state;

        if (error) {
            return (
                <div>Error : {error}</div>
            );
        }
        else if (!isLoaded) {
            return (
                <div>Loading...</div>
            );
        }
        else {
            return (
                <div>
                    <ol>
                        {data.map(
                            row =>
                                (<li key={row.id}>{row.name}</li>)
                        )}
                    </ol>
                </div>
            )
        }

    }
}
