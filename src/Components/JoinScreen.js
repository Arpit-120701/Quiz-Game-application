import React from 'react'

function JoinScreen({start}) {
  return (
    <>
        <div className='join-screen'>
        <h2>Join Quiz </h2>
        <p>Select the most appropriate answer for each multiple-choice question based on the technical concepts provided</p>
        <button onClick={start}>Start</button>
        </div>
    </>
  )
}

export default JoinScreen
