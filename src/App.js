import React, { Component} from 'react';
import TodoList from './modules/TodoList'
class App extends Component {
  constructor(props){
    super(props);

    // this.state= {
    //   newItem: "",
    //   list: []
    // }
  }

  render(){
    return (
      <div className="App">
        <TodoList name={"Pretty's List"}/>
      </div>
    );
  }
}

export default App;

/**reference: https://www.youtube.com/watch?v=e_ZibOe77yo */
