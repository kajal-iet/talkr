import { Dialog,Box, List,ListItem, Typography,styled } from "@mui/material"
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from '@react-oauth/google';

import jwt_decode from 'jwt-decode'; //to decode tokens

import {addUser} from "../../service/api";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const dialogstyle={
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'none'
}
const A=styled(Box)`
display:flex;
`
const Container=styled(Box)`
padding:56px 0 56px 56px;
`
const QrCode=styled('img')({
    height:264,
    width:264,
    margin:'50px 0 0 50px'

});
const Title=styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px;
`
const StyledList=styled(List)`
&>li{
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-height:20px;
    color:#4a4a4a;

}
`
const LoginDialog=()=>{
    
const {setAccount}=useContext(AccountContext);

    const onLoginSuccess=async (res)=> {
        const decoded=jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);

    }
    const onLoginError=(res) =>{
        console.log('Login Failed',res);
     }
    return(
    <Dialog open={true}
    PaperProps={{sx:dialogstyle}}
    hideBackdrop={true}
    >
        <A>
            <Container>
                <Title>To use Talkr on your Computer</Title>
                <StyledList>
                  <ListItem>1. Sign in through google authentication</ListItem>  
                  <ListItem>2. Enter your email ID and password</ListItem>  
                  <ListItem>3. Happy Chatting!</ListItem>  
                </StyledList>
            </Container>
            <Box style={{position:'relative'}}>
            <QrCode src={qrCodeImage} alt="qr code"/>
                <Box style={{position:'absolute',top:'50%',transform:'translatex(28%)'}}>
                    <GoogleLogin 
                    onSuccess={onLoginSuccess}
                    onEror={onLoginError}
                    />
                </Box>
            </Box>
        </A>
    </Dialog>
    )
}
export default LoginDialog;