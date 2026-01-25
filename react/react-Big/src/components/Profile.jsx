import React, { useState } from "react";

export const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = e => {
    const { name, value} = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>User Profile</h1>

      <div>
        <label>
            Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </label>
      </div>

      <div>
        <label>
            Age:
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          placeholder="Enter your age"/>
        </label>
      </div>

      <h3>Profile Information</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};
