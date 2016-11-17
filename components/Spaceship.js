const React = require('react');

class Spaceship extends React.Component {
  render(){
    let name = this.props.name
    let speed = this.props.speed
    let rockets = this.props.hasRockets
    let colors = this.props.colors.join(', ')

    return(
      <div> 
        <p>Name: {name}</p>
        <p>Speed:{speed}</p>
        <p>Has rockets: {rockets ? "Yes" : "False"}</p>
        <p>Colors: {colors}</p>
      </div>
   
      )
  }

}

Spaceship.defaultProps = {
     
       hasRockets: false,
       colors: ['black','red']
}




module.exports = Spaceship;