import React, {Component} from "react"
import SearchForm from "../../components/SearchForm"

const keywords = [
    {label: "one", value: 1},
    {label: "two", value: 2},
    {label: "three", value: 3}
  ]

  const towns = [
    {label: "five", value: 1},
    {label: "six", value: 2},
    {label: "four", value: 3}
  ]

export default class JobSearch extends Component {
    render(){
        return (
            <SearchForm keywords={keywords} towns={towns}/>
        )
    }
}
