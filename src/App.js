import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

const Home = () => {
  return <div>This is Home Component</div>;
};

const About = () => {
  return <div>This is About Component</div>;
};

const Contact = () => {
  return <div>This is Contact Component</div>;
};

const Profile = () => {
  const { userName } = useParams();
  return <div>This is Profile:{userName}</div>;
};

const App = () => {
  return (
    <>
      <div>
        <Link to="/" className="mr-3">
          Home
        </Link>
        <Link to="/about" className="mr-3">
          About
        </Link>
        <Link to="/contact" className="mr-3">
          Contact
        </Link>
        <Link to="/profile/ritesh" className="mr-3">
          Profile
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/profile/:userName" element={<Profile />}></Route>
      </Routes>
    </>
  );
};

export default App;
