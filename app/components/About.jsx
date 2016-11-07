var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a simple weather application built using React and the free Open Weather Map API:</p>
      <ul>
        <li>
          <a target="_blank" href="https://facebook.github.io/react">React JS</a>
        </li>
        <li>
          <a target="_blank" href="http://openweathermap.org">Open Weather Map</a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/pardamike/react-weather-web-app">View this app on Github</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
