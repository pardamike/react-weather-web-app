var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Tampa'>Tampa, FL</Link>
        </li>
        <li>
          <Link to='/?location=Denver'>Denver, CO</Link>
        </li>
        <li>
          <Link to='/?location=Orlando'>Orlando, FL</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
