import React, { Component } from 'react'

export default class Filter extends Component {

    state = {
        year: ""
    }

    handleYear = e => {
        this.setState({ year: e.target.value })
    };

    handleYearFilter = (chartName, Year) => {
        let index = this.state.GlobalEmissions.findIndex(emissions => emissions.Year === parseInt(Year));
        if (index !== -1) {
          switch (chartName) {
            case "Bar1": 
                this.setState({ indexYear1: index });
                break;
                case "Bar2": 
                    this.setState({ indexYear2: index });
                    break;
                    case "Bar3": 
                        this.setState({ indexYear3: index });
                        break;
                        case "Bar4": 
                            this.setState({ indexYear4: index });
                            break;
      
                            // no default
          }
        }
        else {
          alert("Year could not be found in data");
        }
    }

    render() {
        

        return (
            <React.Fragment>
                    {/*do not use form because then the website resets itself*/}
                    <div className="ui input">
                        <input type="number" style={{margin:"20px"}} placeholder="Put in year..." name="quantity" min="1751" max="2019" maxLength="4" size="4" onChange={e => this.handleYear(e)} />
                    </div>
                    <button className="ui primary button" style={{margin:"20px"}} onClick={() => this.props.onFilter(this.state.yearFrom, this.state.yearTo)}>Filter</button>
            </React.Fragment>
        )
    }
}
