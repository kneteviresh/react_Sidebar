import React from "react";
import ReactDOM from "react-dom";
import Sidebar from './components/Sidebar.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);