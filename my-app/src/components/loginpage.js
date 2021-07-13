import React from 'react'
import "firebase/app";
import {auth} from "../firebase"
import firebase  from 'firebase/app';
import { Card, Button, CardTitle, CardText,CardFooter, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


function Loginpage() {
    return (
        <div style={{display:"flex",justifyContent:"center" ,marginTop:"10%"}}>
         <Card body className="text-center" style={{maxWidth:"500px"}}>
             <CardBody>
        <CardTitle tag="h2" style={{fontWeight:"900"}}>CHAT APP</CardTitle>
        <hr/>
        <CardText>This site is end to end encrypted </CardText>
        <Button color="primary" onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} ><FontAwesomeIcon icon={faGoogle} /> Signin With Google </Button>
        </CardBody>
        <CardFooter style={{backgroundColor:"grey",color:"#fff"}}>Copyright©codewizard.All right reserved</CardFooter>
      </Card>
        </div>
    )
}

export default Loginpage
