import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useLocation } from "react-router-dom";

import Login from "./page/login/Login";
import HomePage from "./page/homePage/HomePage";
import SignUp from "./page/signup/SignUp";
import Employ from "./page/employ/Employ";
import User from "./page/user/User";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/SideBar";
import AddEmploy from "./page/addEmploy/AddEmploy";
import Meters from "./page/meters/Meters";
import AddMeters from "./page/addMeters/AddMeters";
import Survey from "./page/survey/Survey";
import AddSurvey from "./page/addSurvey/AddSurvey";
import EmployDetail from "./page/employDetail/EmployDetail";
import Geography from "./page/geography/Geography";
import UserRoles from "./page/userRoles/UserRoles";
import House from "./page/houses/House";
import Dashboard from "./page/dashboard/Dashboard";
import AllocateProduct from "./page/allcoateProduct/AllocateProduct";
import Stocks from "./page/stocks/Stock";
import Installation from "./page/installation/installation";
import Mapping from "./page/mapping/mapping";
import AddAllottee from "./page/addAllottee/addAllottee";
import AddVendor from "./page/addVendor/addVendor";

function App() {
  const user = localStorage.getItem("token");
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";
  const showBars = !isLoginPage && !isSignupPage;
  return (
    <div>
    {showBars && <NavBar />}
    {showBars && <SideBar />}

      <div
        style={{
          marginLeft: showBars ? "14%": null,
          padding:showBars? "100px 0 0 20px" : null,
          backgroundColor: showBars ? "#f6f9fa" : null,
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employ" element={<Employ />} />
          <Route path="/user" element={<User />} />
          <Route path="/add-employ" element={<AddEmploy />} />
          <Route path="/add-allottee" element={<AddAllottee />} />
          <Route path="/add-vendor" element={<AddVendor/>} />
          <Route path="/meters"
           element={<Stocks/>} 
           />
          <Route path="/add-meters" element={<AddMeters />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/houses" element={<House/>}/>
          <Route path="/start-survey" element={<AddSurvey />} />
          <Route path="/employ-detail" element={<EmployDetail/>}/>
          <Route path="/geography" element={<Geography/>} />
          <Route path="/user-roles" element={<UserRoles/>}/>
          <Route path="/allocate-product" element={<AllocateProduct/>} />
          <Route path="/stocks" element={<Meters/>} />
          <Route path="/installation" element={<Installation/>} />
          <Route path="/mapping" element={<Mapping/>} />
          <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;