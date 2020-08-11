import React from 'react'

function SEIR713() {
  let students = [
    "Levin",
    "Shane",
    "Martin",
    "David",
    "Josh",
    "Branden",
    "Anthony",
    "Margaret",
    "Alice",
    "Elaine",
    "Sameh",
    "Barent",
    "Tanner",
    "Han",
    "Alpha",
    "Channee",
    "Steven",
    "Yoel",
    "Cristina",
    "Nicholas",
    "Subrata",
    "Rohun",
    "Lizz",
    "Philip",
    "Irene"
  ]
  function pickStu(e) {
    e.preventDefault()
    let randNum = Math.round(Math.random() * students.length)
    document.querySelector(".randStu").innerText = students[randNum]
    return
  }

  return (
    <>
      <div className="buttonContainer">
        <button onClick={pickStu}>Get a random student!</button>
      </div>
      <div className="randStu"></div>
    </>
  )
}

export default SEIR713;