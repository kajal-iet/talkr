import LoginDialog from "./account/LoginDialog";
import {AppBar,Toolbar,styled,Box} from "@mui/material";

import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./Chat/ChatDialog";

const Header=styled(AppBar)`
height:125px;
background-color:#3f5f65;
box-shadow:none;
`
const LoginHeader=styled(AppBar)`
height:220px;
background-color:#3f5f65;
box-shadow:none;
`
const Component=styled(Box)`
height:100vh;
background-color:#DCDCDC;
`
const Messenger=()=>{
    const {account}=useContext(AccountContext);
    return(

        <Component>
            {
                account?
                <>
                <Header>
            <Toolbar>

            </Toolbar>
        </Header>
                <ChatDialog />
                </>
                :
            <>
        <LoginHeader>
            <Toolbar>

            </Toolbar>
        </LoginHeader>
        <LoginDialog />
        </>
}
        </Component>
    )
}
export default Messenger;