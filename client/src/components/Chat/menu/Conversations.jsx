import React from 'react';
import {useEffect,useState,useContext} from 'react';
import { getUsers } from '../../../service/api';
import Conversation from './Conversation';
import {Box,styled,Divider} from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';

const Component=styled(Box)`
height:81vh;
overflow:overlay;
`
const StyleDivider=styled(Divider)`
margin:0 0 0 70px;
background-color:#e9edef;
Opacity:0.6;
`

const Conversations=({text})=> {
  const [users,setUsers]=useState([]);

  const {account,socket,setActiveUsers}=useContext(AccountContext);

  useEffect(()=>{
    const fetchData=async()=>{
      let response=await getUsers();
      const filteredData=response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
      setUsers(filteredData);
    } 
    fetchData();
   },[text]);

   useEffect(()=>{
    socket.current.emit('addUsers',account);
    socket.current.on("getUsers",users=>{
setActiveUsers(users);
    })

   })
    return (
    <Component>
      {
        users.map(user=>(
          user.sub!==account.sub &&
          <>
          <Conversation user={user} />
          <StyleDivider />
          </>
        ))
      }
    </Component>
    
  )
}

export default Conversations;