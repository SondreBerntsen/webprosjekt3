import React, {Component} from 'react'

class Timeline extends Component {
  state = { years: [] }

  componentDidMount(){
    fetch('http://localhost:5000/anniversary/timeline')
    .then(response => response.json())
    .then(response => {
      this.setState({years: response.data})
    }) 
  }

  render() { 
    let left = true
    return (  
      <div className="timeline">
        {
          this.state.years.map((year, index) => {
          if(left === true){ 
            left = false
            return(
              <a key={index} href={"/tilbakeblikk/" + year.year}>
                <div className="containerTimeline leftTimeline">
                  <div className="contentTimeline">
                    <h2>{year.year}</h2>
                    <p>{year.text.substr(0, 200) + "..."}</p>
                  </div>
                </div>
              </a>
            )
          }else{
            left = true
            return(
              <a key={index} href={"/tilbakeblikk/" + year.year}>
                <div className="containerTimeline rightTimeline">
                  <div className="contentTimeline">
                    <h2>{year.year}</h2>
                    <p>{year.text.substr(0, 200) + "..."}</p>
                  </div>
                </div>
              </a>
            )
          }
        })
        }

      </div>
    )
  }
}
 
export default Timeline