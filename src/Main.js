import React from 'react'
import {Link} from 'react-router-dom';

function Main() {
  let cohorts = ['SEIR-713']

  return (
    <>
      <h2>Pick a cohort:</h2>
      <ul>
        {cohorts.map(cohort => {
          let temp = `/${cohort}`
          return <li key={cohort}><Link to={temp}>{cohort}</Link></li>
        })}
      </ul>
    </>
  )
}

export default Main;