import React, {useState} from 'react'

function SEIR713(props) {
  let [displayText, setDisplayText] = useState([''])
  let [students, setstudents] = useState(props.students)

  function pickStu() {
    let randNum = Math.round(Math.random() * (students.length-1))
    setDisplayText([students[randNum]])
    return
  }

  function shuff() {
    // shuffle array with Fisher-Yates
    // medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    let tempStudents = students
    for (let i = tempStudents.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = tempStudents[i]
      tempStudents[i] = tempStudents[j]
      tempStudents[j] = temp
    }
    let studentArray = tempStudents.map((student, index) => {
      return <li key={index}>{student}</li>
    })
    setDisplayText(studentArray)
  }

  return (
    <>
      <div className="buttonContainer">
        <button onClick={pickStu}>Get a random student!</button>
        <button onClick={shuff}>Shuffle class!</button>
      </div>
      <div className="randStu">
        <ol>
          {displayText.map(item => {
            return item
          })}
        </ol>
      </div>
    </>
  )
}

export default SEIR713;