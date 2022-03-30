import React, {useState} from 'react'

const ProfileForm = () => {

    const [profile, setProfile] = useState({
        firstName:"",
        lastName:"",
        email: "",
        phone: "",
    });

const handleChange = e =>{
    const {name, value} = e.target;
    setProfile(prevState => ({...prevState, [name]: value}))
}

const handleSubmit = (e) =>{
    e.preventDefault();
    setProfile(profile);
}
    
  return (
      <form>
          <fieldset>
              <legend>Personal information</legend>
              <input type="text" name="firstName" onChange= {handleChange} value={profile.firstName}/>
              <input type="text" name="lastName" onChange= {handleChange} value={profile.lastName}/>
              <input type="email" name="email" onChange= {handleChange} value={profile.email}/>
              <input type="text" name="tel" onChange= {handleChange} value={profile.tel}/>
          </fieldset>
          <button className="form" onClick={handleSubmit}> Add Witer</button>
      </form>
  )
}

export default ProfileForm