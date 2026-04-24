import React from 'react'

const App = () => {
  const profiles = [
    { name : "Aman", age : 20},
    { name : "Rahul", age : 19},
    { name : "Kamlesh", age : 18},
  ];

  const updatedProfiles = profiles.map((profile, index)=> {
    // console.log(profile, index);
    return (
      <li key={index}>
        <span>Name : {profile.name}</span> |
        <small> Age : {profile.age}</small>
      </li>
      )
  });

  return (
    <div>
      <h1>Rendering JSON</h1>
      <ol>{updatedProfiles}</ol>
    </div>
  )
}


export default App