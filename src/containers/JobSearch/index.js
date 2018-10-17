import React, {Component} from "react"
import SearchForm from "../../components/SearchForm"

const options = [
    {label: "one", value: 1},
    {label: "two", value: 2},
    {label: "three", value: 3}
  ]

export default class JobSearch extends Component {
    render(){
        return (
            <SearchForm options={options}/>
        )
    }
}
