import React, {Component} from "react"
import Select from 'react-select';
import logo from '../../images/earncaribbean_logo_small.jpg';
import styles from './JobSearch.css';

const options = [
    {label: "one", value: 1},
    {label: "two", value: 2},
    {label: "three", value: 3}
  ]

export default class JobSearch extends Component {
    render(){
        return (
            <div className={styles.container}>
                <img src={logo} className={styles.appLogo} alt="logo" />
                <Select options={options}/>
            </div>
        )
    }
}
