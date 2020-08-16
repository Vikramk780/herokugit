// import React from 'react';
// class Main extends React.Component {
//   state = {
//     users: []
//   }
//   componentDidMount() {
//     fetch('https://panorbit.in/api/users.json')
// .then(response => response.json())
// .then(data => {
//   this.setState({users:data.users})
//   console.log(this.state.users[0])// This is a key Prints result from `response.json()`
// })
// .catch(error => console.error(error))
//   }
  

// render(){
  import React,{useEffect,useState} from "react";
  import {Link} from "react-router-dom";

function Main(){
 
  useEffect(() =>{
    fetchItems();
  },[]);
  const [items,setItems]=useState([]);

const fetchItems=async() => {
  const data=await fetch("https://panorbit.in/api/users.json");
  const items=await data.json();
  console.log(items.users);
  setItems(items.users)
}
  return (
    
  
    <div className="box">
      <div className="uldiv">
     
       <h2 className="heading">Select an Contact</h2>
            <ul>
             { items.map((items,id) =>{
                return(<Link style={{textDecoration: 'none'}} to={`/user${items.id}`}><li key={items.id} className="liclass"><img className="liimg"src={items.profilepicture} />{items.name}</li></Link>)
              })}
  
                
               
            </ul>
            </div>
        
    </div>
  

  );
}

export default Main;
