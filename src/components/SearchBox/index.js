import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select';
import styles from './SearchBox.css'

export default class SearchBox extends Component {

    static propsTypes = {
        label: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired
    }
    render (){
        const {options, label} = this.props
        return (
            <div className={styles.container}>
                <label className={styles.label}>{label}</label>
                <Select className={styles.searchBar} options={options}/>
            </div>
        )
    }
}