import React from 'react'
import {Link} from 'react-router-dom';

function Main(props) {
  return (
    <>
      <h2>Pick a cohort:</h2>
      <ul>
        {props.cohorts.map(cohort => {
          let temp = `/${cohort}`
          return <li key={cohort}><Link to={temp}>{cohort}</Link></li>
        })}
      </ul>
    </>
  )
}

export default Main;