import './style.css';
import React, { useState } from 'react';

function App() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Date" },
    { id: 5, name: "Elderberry" },
  ];
  const users = [
    { id: "1", name: "Murugan" },
    { id: "2", name: "Kandhan" },
    { id: "3", name: "subramaniyan" },
    { id: "4", name: "gugan" },
  ];

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const Miniprojectusers = [
    { id: 1, name: "Murugan", age: 30 },
    { id: 2, name: "Kandhan", age: 25 },
    { id: 3, name: "Balasubramaniyan", age: 28 },
    { id: 4, name: "Kugan", age: 35 }
  ];
  const tasks = [
    { id: 1, name: "Learn React", completed: false },
    { id: 2, name: "Complete Homework", completed: false },
    { id: 3, name: "Wash Dishes", completed: false },
    { id: 4, name: "Go for a Walk", completed: false },
    { id: 5, name: "Read a Book", completed: true }
  ];

  const[task,setTask]=useState(["task 1"])
  const[subtask,setsubTask]=useState(["sub "])
  const add=()=>{
    setTask([...task,"task"])
  }
  const sub=()=>{
    setsubTask([...subtask,"sub"])
  }
  
  const calculation=Array.from({ length: 10 },()=> Math.floor(Math.random() * (100 - 50 + 1)) + 50);
  
  const [user, setUsers] = useState([]); 
  const [name, setName] = useState('');  

  const handleAddUser = () => {
    if (name.trim() !== '') {
      setUsers([...user, name]); 
      setName('');
    }
  };
  const data = [
    {
      category: 'Fruits',
      items: ['Apple', 'Banana', 'Cherry'],
    },
    {
      category: 'Vegetables',
      items: ['Carrot', 'Spinach', 'Potato'],
    },
  ];

  
  function Task() {
  
   return( 
    <>
    <div style={{textAlign:'center'}}>
      <h1>Task1</h1>
  <h2>React.Fragment</h2>
  <p>
    <strong>React.Fragment</strong> is a feature in React that allows grouping multiple elements without adding extra nodes to the DOM. 
    It ensures cleaner HTML and better performance by avoiding unnecessary wrapper elements like <code>&lt;div&gt;</code>.
  </p>
  <p>
    You can use <code>&lt;React.Fragment&gt;</code> or its shorthand <code>&lt;&gt;</code> syntax to wrap elements logically.
  </p>
</div>
<div style={{textAlign:'center'}}>
<React.Fragment>
  <h1>Task2</h1>
      <p>This is the first paragraph rendered using React.Fragment.</p>
      <p>This is the second paragraph rendered using React.Fragment.</p>
    </React.Fragment>
    </div>
    <div style={{textAlign:'center'}}>
    <>
    <h1>Task3</h1>
      <h1>Welcome to React!</h1>
      <p>This is an example of using the shorthand fragment syntax.</p>
      <p>React.Fragment can be replaced with <>...</> for cleaner code.</p>
    </>
    </div>
    <div style={{textAlign:'center'}}>
    <h1>Task4</h1>
    <React.Fragment>
  <ul style={{listStyleType:"none"}}>
    {items.map((item,index)=>(
      <li key={index}>{item}</li>
    ))}
  </ul>
    </React.Fragment>
    </div>
    <div>
      <h1>Task5</h1>
    <h1 className="title">Welcome to React</h1>
      <p className="description">This paragraph is styled using CSS.</p>
      <p className="note">Fragments prevent unnecessary wrappers!</p>
    </div>
    <div>
      <h1>Task6</h1>
      <h2>Note on the Importance of Keys in React Lists</h2>
      <p>
    Keys in React are essential for uniquely identifying elements in a list. They help React efficiently update and render the DOM by tracking changes, additions, or removals within the list.
      </p>
    <p>
    Using keys improves performance and prevents unexpected behavior during list rendering. It is recommended to use unique and stable values (like IDs) as keys instead of array indices for dynamic lists.
    </p>
  </div>
    <div>
      <h1>Task7</h1>
      <ul>
        {fruits.map((fruit)=>(
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
    <div>
      <h1>Task8</h1>
      <h2>List rendered without key</h2>
      <ul>
        {fruits.map((fruit)=>(
          <li>{fruit.name}</li>
        ))}
      </ul>
    </div>
    <div>
      <h2>Task 9</h2>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={handleAddUser}>Add</button>

      <ul>
        {user.map((use, index) => (
          <li key={index}>
            {use} 
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h1>Task10</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
    <div>
      <h1>Task11</h1>
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <React.Fragment key={user.id}>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
    </div>
    <div style={{ textAlign: 'center' }}>
      <h1>Task12</h1>
      <p>{numbers.map((num,index)=>{
        if(num%2==0)
        {
          return <li key={index}>{num}</li>
        }
      }
      )}</p>
    </div>
    <div>
      <h2>Task 13</h2>
      <ul>
        {data.map((group, groupIndex) => (
          <li key={groupIndex}>
            <strong>{group.category}</strong>
            <ul>
              {group.items.map((item, itemIndex) => (
                <li key={`${groupIndex}-${itemIndex}`}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h1>Mini Project 1: Fruit List</h1>
      <ul>
      {fruits.map((fruit, index) => (
        <React.Fragment >
          <li key={index}>{fruit.name}</li>
        </React.Fragment>
      ))}
    </ul>
    </div>
    <div>
      <h1>Mini Project 2: User Table</h1>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {Miniprojectusers.map((user) => (
          <React.Fragment >
            <tr>
              <td key={user.id}>{user.name}</td>
              <td key={user.id}>{user.age}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
    </div>
    <div>
      <h1>Mini Project 3 Task List with Conditional Rendering</h1>
      <ul>
       {tasks.filter((val)=> val.completed).map((val,index)=>(
        <li key={index}>{val.name}</li>
       ))}
      </ul>
    </div>
       <div>
       <h1>Mini Project 4: Dynamic Number List</h1>
     <ul>
      {calculation.map((val,index)=>(
        <li key={index}>{val}</li>
      ))}
     </ul>
       </div> 
    </>
    )
  }
  return (
    <>
    <Task/>
    </>
  )
}

export default App