import logo from './logo.svg';
import './App.css';
// import writers from './writers.json'
import  ProfileCard from './ProfileCard';
import {useEffect, useState } from "react";
import ProfileForm from './components/ProfileForm';
// import {useState} from "react";

function App() {
const [allProfile, setAllProfile] = useState([
  {
    firstName: "h",
    lastName: "n",
    email: "n@n.ocm",
    phone: "12",
  }
]);

const submit = (profile)=> {
  const arr = allProfile;
  arr.push(profile);
  setAllProfile(arr);
}

  return (
    <div>
      <h1>Writer Profiles</h1>
      <div className="container">
        <ProfileForm />
          {allProfile.map((writer) => (
            <ProfileCard key={writer.id} writer={writer} />
          ))}
      </div>
    </div>
  );
}

export default App;
