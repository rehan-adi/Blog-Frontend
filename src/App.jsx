import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Post from "../src/pages/Post";
import Layout from "./layout/layout";
import Search from "../src/pages/Search";
import { Toaster } from "react-hot-toast";
import Premium from "../src/pages/Premium";
import Profile from "../src/pages/Profile";
import { useProfile } from "./hooks/useProfile";
import UsersProfile from "./components/UsersProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  useProfile();

  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Post />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<Search />} />
          <Route path="profile/:id" element={<UsersProfile />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </Router>
  );
}

export default App;
