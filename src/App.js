import { Route, Routes } from "react-router-dom";
import ComfirmaEmail from "./components/confirmaEmail";
import CreateAccount from "./components/creactAccount";
import Dashboard from "./components/dashboard"; 
import Login from "./components/login";
import PasswordReset from "./components/passwordReset";
import RegistrationComplete from "./components/registrationomplete"; 
import Layout from "./layout";
import Orders from "./components/orders";
import DeleteItem from "./components/deleteItem";
import Products from "./components/products";
import Categories from "./components/categories";
import CreateCategories from "./components/createCategories";
import Customer from "./components/customer";
import CustomerInfo from "./components/customerInfo";
import Report from "./components/report";
import Coupons from "./components/coupons";
import KnowledgeBase from "./components/knowledegBase";
import IntroductionProduct from "./components/introduction";
import AddCustomer from "./components/addCustomer";
import AddProducts from "./components/addProducts";
import CreateCoupon from "./components/createCoupon";
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
          <Route path="/deleteItem" element={<DeleteItem/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/createCategories" element={<CreateCategories />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/customerInfo" element={<CustomerInfo />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/addCustomers" element={<AddCustomer />} />
          <Route path="/addProducts" element={<AddProducts />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/knowledgeBase" element={<KnowledgeBase />} />
          <Route path="/createCoupons" element={<CreateCoupon />} />
          <Route path="/introductionProduct" element={<IntroductionProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
