import React, { useState, useEffect } from 'react'
import Header from './Header';
import Card from './Card';
import killua_image from '../Images/killua.jpeg'
import gon_image from '../Images/gon.jpeg'
import hisoka_image from '../Images/hisoka.jpeg'
import kurapika_image from '../Images/kurapika.jpeg'
import leorio_image from '../Images/leorio.jpeg'
import ging_image from '../Images/ging.jpeg'
import illumi_image from '../Images/illumi.jpeg'
import mereum_image from '../Images/mereum.jpeg'
import neferpitou_image from '../Images/neferpitou.jpeg'
import alluka_image from '../Images/alluka.jpeg'
import kalluto_image from '../Images/kalluto.jpeg'
import chrollo_image from '../Images/chrollo.jpeg'
import netero_image from '../Images/netero.jpeg'
import milluki_image from '../Images/milluki.jpeg'
import silva_image from '../Images/silva.jpeg'
import bisky_image from '../Images/bisky.jpeg'
import meleoron_image from '../Images/meleoron.jpeg'
import kite_image from '../Images/kite.jpeg'

const Game = () => {

  const [currentScore, setCurrentScore] = useState(0);
  const [currentHighScore, setCurrentHighScore] = useState(0);
  const [comparisonArray, setComparisonArray] = useState([]);

  const characters = [{name: "Killua Zoldyck", image: killua_image}, {name: "Gon Freecss", image: gon_image}, 
  {name: "Hisoka", image: hisoka_image}, {name: "Kurapika", image: kurapika_image}, {name: "Leorio", image: leorio_image}, 
  {name: "Ging", image: ging_image}, {name: "Illumi", image: illumi_image}, {name: "Mereum", image: mereum_image}, 
  {name: "Neferpitou", image: neferpitou_image}, {name: "Alluka", image: alluka_image}, {name: "Kalluto", image: kalluto_image}, 
  {name: "Chrollo", image: chrollo_image}, {name: "Netero", image: netero_image}, {name: "Milluki", image: milluki_image},
  {name: "Silva", image: silva_image}, {name: "Bisky", image: bisky_image}, {name: "Meleoron", image: meleoron_image}, 
  {name: "Kite", image: kite_image}]

  const shuffle_array = a => {
    let j, x, i;

    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
  }

  const incrementGame = (clickedName) => {
    // If the character has already been clicked
    if (comparisonArray.includes(clickedName)) {
      setComparisonArray([]);
      setCurrentScore(0);
    }
    // If the character hasn't been clicked
    else {
      setComparisonArray([...comparisonArray, clickedName]);
      setCurrentScore(currentScore + 1);
      
    }
    
  }

//Updates currentHighScore here instead of incrementGame, because this will run after incrementGame, 
//which is the best way I found to capture the gamestate accurately
  useEffect(() => {
    if (currentScore > currentHighScore) {
      setCurrentHighScore(currentScore);
    }
  }, [currentScore, currentHighScore])

  return (
    <div className="full-app">
      <Header current_score={currentScore} high_score={currentHighScore} />
      <div className="cards-container">
        {shuffle_array(characters).map((character) => {
          return <Card source={character.image} name={character.name} incrementGame={(clickedName) => {incrementGame(clickedName)}} />
        })}
      </div>
    </div>
  )
} 

export default Game;
