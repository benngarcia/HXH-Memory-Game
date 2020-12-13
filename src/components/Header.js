import React from 'react'
import header_image from '../Images/logo.png'

const Header = props => {

  return (
    <div className="header-div">
      <header className="header">
        <img className="logo" alt="Memory Game Header" src={header_image} />
        <div className="header-info">
        {/* Update this to display text on hover of just "About" instead of plug */}
        <p className="about">
          Built by hahahaCorn for <a href="https://theodinproject.com">The Odin Project</a>-- for contact discord: hahahaCorn#9185
        </p>
        <p className="current-score">
          Your score: {props.current_score} </p>
        <p className="high-score">
          High Score: {props.high_score} </p>
        <p className="max-score"> 
          Max Score: 18
        </p>
        </div>
      </header>
    </div>
  )
}

export default Header;
