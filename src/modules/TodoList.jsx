import React, {useState} from 'react'

export default function TodoList({name}) { //or export default function TodoList(props)
    const [list, setList] = useState([]) //used hooks
    // const [newItem, setnewItem] = useState("") //used hooks
    const [state, setState] = useState({newItem: "", newItem1: "", newItem2: ""}) // for n no of inputs

    const addItem= () => {
        //1. create a new todo item
        const newItem= {
          id: 1+ Math.random(),
          value: state.newItem.slice() //not needed to do .slice() as shown in reference video
        };
    
        // maintain a copy of current todo lists
        const listArray=  [...list];
    
        //add new todo to the list
        listArray.push(newItem);
    
        //update the values in state too now
        // this.setState({
        //   list,
        //   newItem:""
        // })
        setList(listArray);
        console.log({state});
        setState({...state, newItem: ""}) //this empties the DOM input when we click on Add item button
    }
    
    const  updateInput= (e) => {
        //update react state
        // console.log(e.target);
        const {name, value} = e.target; // de-structuring where the entire HTML element gets passed
        // this.setState({
        //   [name]: value // "newItem" : "Say Hello"
        // })
        console.log({state});
        setState({...state,[name]: value});
      }
    
    const deleteItem= (id) => {
        //save a copy of current list in a local variable
        const listN= [...list];
    
        //search the item to be deleted
        const filteredList= listN.filter(item => item.id !== id);
    
        //then update the application list
        setList(filteredList);
    
    }


    return (<>
        <header className="App-header">
          <h1>--{name}--</h1>
        </header>
        <div className="App-actions">
          <input type="text" 
          placeholder="newItem..." 
          value={state.newItem}
          name= "newItem"
          onChange= {updateInput}>
          </input>
          <br />
          <input type="text" 
          placeholder="newitem 1" 
          value={state.newItem1}
          name= "newItem1"
          onChange= {updateInput}>
          </input>
          <br />
          <button
          onClick= {() => addItem()}
          >Add this item</button>
        </div>
        <div className="App-lists">
          <ul>
            {list.map(item => {
              return (
                <li key={item.id}>{item.value}
                <button onClick= {()=> deleteItem(item.id)}>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
        </>
    )
}