import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";
function App() {
  const clientId='565913582044-lu3qujgtjn0eag1macstn2p5q2vl06r6.apps.googleusercontent.com';
  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}> 
      <AccountProvider>
      <Messenger />
      </AccountProvider>
      
      </GoogleOAuthProvider>;
     
    </div>
  );
}

export default App;
