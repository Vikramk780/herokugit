import React from "react";
import image from "./map.png";
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";

function User({match}){
  
    useEffect(() =>{
        fetchItems();
      },[]);
     
      var [item,setItem]=useState([]);
      var [company,setCompany]=useState([]);
      var [address,setAddress]=useState([]);
    
    const fetchItems=async() => {
      var data=await fetch("https://panorbit.in/api/users.json");
      var item=await data.json();
      // console.log(item.users[0].name);
      var idd=match.params.id;
      const a=1;
      setItem(item.users[idd-a])
      setCompany(item.users[idd].company)
      setAddress(item.users[idd].address)
      // var company=item.users[idd].company.name;
      // console.log(company)
      return (item,company,address);
     
      
    
  
    }
    
        return(
         
            <>
            {/* { console.log(company.name)} */}
            <div className="maindivsecondpage">
            <div className="divv2"> 

            <div className="profilediv">
                <p>Profile</p>
                  <p>Posts</p>
                <p>Gallary</p>
        <p>ToDo</p>
            </div>

            </div>
            <div className="divv3">

                <div className="divv4">
                  <Link to={"/"}><p>Profile <p className="headh2"><img className="headimg"src={item.profilepicture}></img>{item.name}</p></p></Link>
                
                
                </div>

                <div className="divv5">
                     <img className="prifuleimg" src={item.profilepicture}></img>
        <p className="profiledeading1">{item.name}</p>

                     <p className="profiledetails1"><span className="detailname1">Username&nbsp;&nbsp;&nbsp;:&emsp;</span>{item.username}</p>
                      <p className="profiledetails1"><span className="detailname1">e-mail&emsp;&emsp;&nbsp;&nbsp;&nbsp;:&emsp;</span>{item.email}</p>
                      
                      <p className="profiledetails1"><span className="detailname1">Phone&nbsp;&nbsp;&emsp;&emsp;:&emsp;</span>{item.phone}</p>
                      <p className="profiledetails1"><span className="detailname1">Website&emsp;&nbsp;&nbsp;&nbsp;:&emsp;</span>{item.website}</p>
                      
                      <div>
                      <p className="companyeading">Company</p>
                      <p className="profiledetails1"><span className="detailname1">Name&emsp;&nbsp;&nbsp;&emsp;:&emsp;</span>{company.name}</p>
                      <p className="profiledetails1"><span className="detailname1">Catchphrase&nbsp;&nbsp;&nbsp;:&emsp;</span>{company.catchPhrase}</p>
        <p className="profiledetails1"><span className="detailname1">bs&emsp;&emsp;&emsp;&emsp;:&nbsp;&nbsp;&nbsp;&nbsp;</span>{company.bs}</p>
                      
                      </div>
                </div>

                <div className="divv6">
                <p className="Addressheading">Address:</p>
                     < p className="profiledetails1"><span className="detailname1">Street&emsp;&nbsp;&nbsp;&nbsp;:&emsp;</span>{address.street}</p>
        < p className="profiledetails1"><span className="detailname1">Suite&emsp;&emsp;&nbsp;:&emsp;</span>{address.suite}</p>
                     < p className="profiledetails1"><span className="detailname1">City&emsp;&nbsp;&nbsp;&emsp;:&emsp;</span>{address.city}</p>
                     < p className="profiledetails1"><span className="detailname1">Zipcode&nbsp;&nbsp;&nbsp;:&emsp;</span>{address.zipcode}</p>
                     
                     <img className="mapimage"src={image} />                    
                </div>
            </div>
            </div>
            </>
        )
        
      }



export default User;
