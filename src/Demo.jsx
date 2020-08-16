import React from 'react';
import "./index.css";
class App extends React.Component {
  state = {
    users: []
  }
  componentDidMount() {
    fetch('https://panorbit.in/api/users.json')
.then(response => response.json())
.then(data => {
  this.setState({users:data.users})
  console.log(this.state.users[0])// This is a key Prints result from `response.json()`
})
.catch(error => console.error(error))
  }
  

render(){
 
  return (
    
  
    <div className="box">
     
       <h2 className="heading">Select an Contact</h2>
            <ul>
             { this.state.users.map((items) =>{
                return(<li className="liclass"><img className="liimg"src={items.profilepicture} />{items.name}</li>)
              })}
  
                
               
            </ul>
        
    </div>
  

  );
}
}
export default App;
