import React, { Component } from "react";
import TodoList from "./modules/TodoList";
class App extends Component {
  constructor(props) {
    super(props);

    // this.state= {
    //   newItem: "",
    //   list: []
    // }
  }

  render() {
    return (
      <div className="App">
        <TodoList name={"Pretty's List"} />
      </div>
    );
  }
}

export default App;
