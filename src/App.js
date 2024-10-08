import { Route, Routes } from "react-router-dom";
import ComfirmaEmail from "./components/confirmaEmail";
import CreateAccount from "./components/creactAccount";
import Dashboard from "./components/dashboard"; 
import Login from "./components/login";
import PasswordReset from "./components/passwordReset";
import RegistrationComplete from "./components/registrationomplete"; 
import Layout from "./layout";
import Orders from "./components/orders";

function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/passwordReset" element={<PasswordReset/>} />
          <Route path="/registrationComplete" element={<RegistrationComplete/>} />
          <Route path="/createAccount" element={<CreateAccount/>} />
          <Route path="/comfirmaEmail" element={<ComfirmaEmail/>} />
          <Route path="/orders" element={<Orders/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
