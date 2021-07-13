import React,{useState,useEffect} from 'react'
import {useHistory} from "react-router-dom";
import {ChatEngine} from "react-chat-engine";
import {auth} from "../firebase";
import {useAuth} from "../contexts/AuthContext";
import axios from "axios";
import {
    Navbar,
    NavbarBrand,
    Nav,
    Button
  } from 'reactstrap';

function Chats() {
    const history = useHistory();
    const {user} = useAuth();
    const {loading,setLoading}=useState(true);
    const handleLogout = async () => {
        await auth.signOut();
        history.push("/");
    }
    const getFile = async (url)=>{
        const response = await fetch(url)
        const data = await response.blob();
        return new File([data],'userPhoto.jpg',{type:"/image/jpeg"})
    }

    useEffect(() => {
        if(!user){
            history.push("/");
            return ;
        } 
            axios.get('https://api.chatengine.io/users/me',{
            headers:{
                "Project-Id" :"70a93698-026d-4e33-b11e-da5e02496702",
                "User-Name":user.email,
                "User-Secret":user.uid,
            }
        })
        .then(()=>{
            setLoading(false);
        })
        .catch(()=>{
            let formData = new FormData();
            formData.append("username",user.email);
            formData.append("email",user.email);
            formData.append("secret",user.uid);
            getFile(user.photoURL)
            .then((avatar)=>{
                formData.append("avatar",avatar,avatar.name);
                axios.post("https://api.chatengine.io/users",
                formData,
                {headers:{"private-key": "e9ae4e90-6739-4d95-827d-184076a7645d"}})
                .then(()=>setLoading(false))
                .catch((err)=>console.log(err))
            })
        })
    }, [user,history])
    

    if(!user || loading) {return "Loading..."};

    return (
        <div>
            <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Chat App</NavbarBrand>
          <Nav className="mr-auto" navbar>
          </Nav>
          <Button color="primary" onClick={handleLogout} >LOGOUT</Button>
      </Navbar>
            <ChatEngine 
            height="calc(100vh-66px)"
            projectID="70a93698-026d-4e33-b11e-da5e02496702"
            userName={user.email}
            userSecret={user.uid}
            />
        </div>
    )
}
export default Chats
