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

  const cookiesString = document.cookie;

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
          <Route path="/" element={cookiesString ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/employ" element={<Employ />} />
          <Route path="/user" element={<User />} />
          <Route path="/add-employ" element={<AddEmploy />} />
          <Route path="/add-allottee" element={<AddAllottee />} />
          <Route path="/add-vendor" element={<AddVendor/>} />
          <Route path="/meters"
           element={<Stocks/>} 
           />
          <Route
            path="/employ"
            element={cookiesString ? <Employ /> : <Navigate to="/login" />}
          />
          <Route
            path="/user"
            element={cookiesString ? <User /> : <Navigate to="/login" />}
          />
          <Route
            path="/add-employ"
            element={cookiesString ? <AddEmploy /> : <Navigate to="/login" />}
          />
          <Route
            path="/add-allottee"
            element={cookiesString ? <AddAllottee /> : <Navigate to="/login" />}
          />
          <Route
            path="/add-vendor"
            element={cookiesString ? <AddVendor /> : <Navigate to="/login" />}
          />
          <Route
            path="/meters"
            element={cookiesString ? <Stocks /> : <Navigate to="/login" />}
          />
          <Route
            path="/add-meters"
            element={cookiesString ? <AddMeters /> : <Navigate to="/login" />}
          />
          <Route
            path="/survey"
            element={cookiesString ? <Survey /> : <Navigate to="/login" />}
          />
          <Route
            path="/houses"
            element={cookiesString ? <House /> : <Navigate to="/login" />}
          />
          <Route
            path="/start-survey"
            element={cookiesString ? <AddSurvey /> : <Navigate to="/login" />}
          />
          <Route
            path="/employ-detail"
            element={cookiesString ? <EmployDetail /> : <Navigate to="/login" />}
          />
          <Route
            path="/geography"
            element={cookiesString ? <Geography /> : <Navigate to="/login" />}
          />
          <Route
            path="/user-roles"
            element={cookiesString ? <UserRoles /> : <Navigate to="/login" />}
          />
          <Route
            path="/allocate-product"
            element={cookiesString ? <AllocateProduct /> : <Navigate to="/login" />}
          />
          <Route
            path="/stocks"
            element={cookiesString ? <Meters /> : <Navigate to="/login" />}
          />
          <Route
            path="/installation"
            element={cookiesString ? <Installation /> : <Navigate to="/login" />}
          />
          <Route
            path="/mapping"
            element={cookiesString ? <Mapping /> : <Navigate to="/login" />}
          />
          <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;