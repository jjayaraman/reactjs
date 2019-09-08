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
        this.loadData();
        console.log(this.state);
        
    }

    loadData() {
        const URL = "https://jsonplaceholder.typicode.com/users";
        fetch(URL)
            .then(data => {
                this.setState({error : null, isLoaded: true, data : data})
            })
            .catch(error => {
                this.setState({error : error, isLoaded: true, data : []});
            })
    }

    // static propTypes = {
    //     prop: PropTypes
    // }


    render() {
        return (
            <div>
                State : {this.state};
            </div>
        )
    }
}
