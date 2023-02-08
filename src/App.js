import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./Components/Pages/Home/Home";
import Home_Rules from "./Components/Pages/Home/Home_Rules";
import Login from "./Components/Pages/Forms/Login/Login";
import SignUp from "./Components/Pages/Forms/SignUp/SignUp";
import Account from "./Components/Pages/Account/Account";

// Steam Signup
import SteamSignUp from "./Components/Pages/Forms/Steam SignUp/SteamSignUp";

// AdminPage
import AdminVerfi from "./Components/Admin Page/AdminVerfi/AdminVerfi";
import AdminPage from "./Components/Admin Page/AdminPanel/AdminPage";
import AddQu from "./Components/Admin Page/AdminPanel/Add Qu/AddQu";
import Users from "./Components/Admin Page/AdminPanel/Users/Users";
import DeleteAccount from "./Components/Pages/Account/DeleteAccount/DeleteAccount";
import DeleteQues from "./Components/Admin Page/AdminPanel/Delete Qu/DeleteQues";
import EditQues from "./Components/Admin Page/AdminPanel/Edit Qu/EditQues";
import EditDetails from "./Components/Admin Page/AdminPanel/Edit Qu/EditDetails/EditDetails";
import UserDetails from "./Components/Admin Page/AdminPanel/Users/UserDetails/UserDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Pages */}
          <Route path="/home" element={<  Home/>}/>
          <Route path="/rules" element={<  Home_Rules/>}/>
          <Route path="/login" element={<  Login/>}/>
          <Route path="/signup" element={<  SignUp/>}/>
          <Route path="/account" element={<  Account/>}/>
          <Route path="/logout" element={<  DeleteAccount/>}/>

          {/* Steam Signup */}
          <Route path="/steamsignup" element={<  SteamSignUp/>}/>

          {/* AdminPage */}
          <Route path="/admin" element={<  AdminVerfi/>}/>
          <Route path="/adminpage" element={<  AdminPage/>}/>
          <Route path="/addquestion" element={<  AddQu/>}/>
          <Route path="/deletequestion" element={<  DeleteQues/>}/>
          <Route path="/editquestion" element={<  EditQues/>}/>
          <Route path="/editquestion/:id" element={<  EditDetails/>} />
          <Route path="/users" element={<  Users/>}/>
          <Route path="/usersdetails/:id" element={<  UserDetails/>}/>
          
          {/* Navigate */}
          <Route path="/" element={<Navigate to="/home"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
