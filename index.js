const React = require('react');
const ReactDOM = require('react-dom');

const Spaceship = require('./components/Spaceship');



//React.createClass() method:

//const SpaceShip = React.createClass({
// class getDefaultprops() {
//   return {(
//       name: ''
//       speed: 0
//       hasRockets: false
//       colors: ['black','red']
//     )};
//   }
//   render()
// }
//})



//ES2015 method

// Spaceship.defaultProps = {
//        name: '',
//        speed: 0,
//        hasRockets: false,
//        colors: ['black','red']
// }



ReactDOM.render(
  <Spaceship name="Millennium Falcon" />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
