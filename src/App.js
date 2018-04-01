import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">About me</Link>
        </li>
        <li>
          <Link to="/aboutReact">About React</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/stateandprops">State and Props</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={AboutMe} />
      <Route path="/aboutReact" component={AboutReact} />
      <Route path="/topics" component={Topics} />
      <Route path="/jsx" component={JSX} />
      <Route path="/stateandprops" component={StateAndProps} />
    </div>
  </Router>
);

const JSX = () => (
  <div>
    <h2>JSX is sugar for writing React.. It is a syntax extension, that gives you
      the ability to write HTML and Javascript almost like it was the same language. 
      You can write html inside javascript without having to use quotation marks around it.
      JSX compiles it into normal 'html' / 'javascript'.
    </h2>
  </div>
);

const AboutMe = () => (
  <div>
    <h2>Mathias Bigler, github: https://github.com/Zurina/router.git</h2>
  </div>
);

const StateAndProps = () => (
  <div>
    <h2>State is something a component itself initializes. Props is given to component via
      parent components or other components. props can change state while state cannot change props. 
    </h2>
  </div>
);

const AboutReact = () => (
  <div>
    <h2>React is simply a library for building user interfaces. 
      React allows developers to create large web-applications that 
      use data and can change over time without reloading the page. And therefore it is
      widely used when you want to create Single Page Applications, which is very modern nowadays.</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/componentDidMount/This method is invoked immediately after a component is mounted. `}>componentDidMount</Link>
      </li>
      <li>
        <Link to={`${match.url}/render/This method is required. It renders the JSX formatted HTML.`}>render</Link>
      </li>
      <li>
        <Link to={`${match.url}/componentWillReceiveProps/This method is invoked before a mounted component receives new props`}>componentWillReceiveProps</Link>
      </li>
      <li>
        <Link to={`${match.url}/shouldComponentUpdate/This method is invoked before rendering when new props or state are being received.`}>shouldComponentUpdate</Link>
      </li>
      <li>
        <Link to={`${match.url}/componentWillUpdate/This method is invoked just before rendering when new props or state are being received. You cannot call setState here.`}>componentWillUpdate</Link>
      </li>
      <li>
        <Link to={`${match.url}/componentWillUnmount/This method is called when a component is being removed from the DOM`}>componentWillUnmount</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId/:info`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    <h4>{match.params.info}</h4>
  </div>
);

export default BasicExample;