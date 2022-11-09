import React from 'react'

function History() {
    const history = localStorage.getItem("username") || [];
  return (
    <div>History</div>
  )
}

export default History