import React, {Component} from 'react'
import SearchBox from '../SearchBox'
import PropTypes from 'prop-types'

import logo from '../../images/earncaribbean_logo_small.jpg';
import styles from './SearchForm.css';

export default class SearchForm extends Component {

    static propTypes = {
        keywords: PropTypes.array.isRequired,
        towns: PropTypes.array.isRequired
    }

    render(){
        const {keywords, towns} = this.props
        return(
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img src={logo} className={styles.appLogo} alt="logo" />
                </div>
                <div className={styles.searchBarContainer}>
                    <SearchBox options={keywords} label="what"/>
                    <SearchBox options={towns} label="where"/>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.searchButton}>find jobs</button>
                </div>
            </div>
        )
    }
}