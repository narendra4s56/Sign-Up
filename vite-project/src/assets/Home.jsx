import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if(userId){
        axios.get(`http://localhost:3001/user/${userId}`)
         .then(res => {
            setName(res.data.name)
            setEmail(res.data.email);
         })
         .catch(err => {
            console.log(err);
         }) 
    }
  },[])

  return (
    <>
   
      <h5 style={{display:"flex", justifyContent:"center",flexDirection:"column", alignItems:"center"}}>Welcome {name}</h5>
     <div style={{display:"flex", justifyContent:"center",flexDirection:"column", alignItems:"center"}}>
      <h3 style={{fontWeight:"900"}}>Profile</h3>
      <img style={{height:"150px" , width:"150px" , borderRadius:"50%"}} src="https://cdn.pixabay.com/photo/2019/05/26/19/51/laptop-4231111_1280.jpg" alt="" />
      <p style={{fontWeight:"600"}}>Name : {name}</p>
      <p style={{fontWeight:"600"}}>Email : {email}</p>

    </div>
    </>
  );
}

export default Home;
