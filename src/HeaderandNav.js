import React from 'react'
import './HeaderandNav.css'

export default function HeaderandNav() {
    return (
    <>
    <h2>The Parenting Protocol</h2>
    <ul className="topNavtop">
      <li><button>About</button></li>
      <button>Dark/Light Mode</button>
    </ul>
    <br></br>
    <ul className="topNavbottom">
      <li>Must Haves</li>
      <li>Meal Plans</li>
      <li>Staying Active</li>
      <li>Deals</li>
    </ul>
    </>
  )
}
