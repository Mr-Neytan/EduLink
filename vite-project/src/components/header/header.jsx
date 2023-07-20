import { useState } from 'react'
import React from 'react'
import './header.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Website Title</h1>
    </>
  )
}

export default Header