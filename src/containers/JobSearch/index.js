import React, {Component} from "react"
import SearchForm from "../../components/SearchForm"
import PropTypes from "prop-types"
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
    
    constructor(props){
        super(props)
        this.state = {
            keywords: [],
            towns: [],
            countries: []
        }
    }
    static propTypes = {
        firebaseDB : PropTypes.object.isRequired
    }

    componentDidMount(){
        const {firebaseDB} = this.props
        if (firebaseDB){
            firebaseDB.ref("keywords").on("value", (data) => {
                this.setState({
                    keywords: data.val().map(keyword => ({...keyword, label: keyword.value}))
                })
            })
            firebaseDB.ref("countries").on("value", data => {
                this.setState({
                    countries: data.val()
                })
            })
            firebaseDB.ref("towns").on("value", data => {
                this.setState({
                    towns: data.val().map(town => ({value: town.name, label: `${town.name}, ${this.state.countries.find(country => country.id === town.countryId).name}`}))
                })
            })
            
        }
    }


    render(){
        const {keywords, towns} = this.state
        return (
            <SearchForm keywords={keywords} towns={towns}/>
        )
    }
}
