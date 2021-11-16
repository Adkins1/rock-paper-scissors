import React, { useRef, useState } from 'react'
import {
    Container,
    Wrapper,
    InfoH1,
    Icons,
    Icon,
    Label,
    BotsChoice
} from './gameStyles'

const Game = () => {
    // so we need to grab some elements to change their innerHTMLs or styles
    const rockLabel = useRef()
    const paperLabel = useRef()
    const scissorLabel = useRef()
    const botsPick = useRef()
    const infoHeader = useRef()
    const background = useRef()
    
    // "bot" need to choose something (randomly) in range between 0 and 2
    const options = [
        "Rock", "Paper", "Scissors"
    ]
    const min = 0;
    const max = 2;
    const firstRandomChoice = options[Math.floor(Math.random() * (max - min + 1) ) + min]
    const [botsChoice, setBotsChoice] = useState(firstRandomChoice);

    // not sure about css possibilities to change elements not in parent/children/sibling relationship
    // so here we go
    const enterLabel = (x) => {
        x.current.style.color = "red";
        x.current.style.fontSize = "3.2rem";
    }
    const leaveLabel = (x) => {
        x.current.style.color = "black";
        x.current.style.fontSize = "3rem";
    }

    //lets play the game
    const playGame = (x) => {
        // i need it here to make a random value every click
        const randomChoice = options[Math.floor(Math.random() * (max - min + 1) ) + min]
        setBotsChoice(randomChoice)
        // inside html lies usable info, let's use it
        const playersChoice = x.current.innerHTML

        // check for a score, show the result
        if(playersChoice === botsChoice) {
            infoHeader.current.innerHTML = "Draw!"
            background.current.style.background = "white";
            if(botsChoice === "Rock") botsPick.current.innerHTML = "&#9994;" 
            if(botsChoice === "Paper") botsPick.current.innerHTML = "&#9995;" 
            if(botsChoice === "Scissors") botsPick.current.innerHTML = "&#9996;" 
        }
        if(playersChoice === "Rock" && botsChoice === "Scissors") {
            botsPick.current.innerHTML = "&#9996;" 
            infoHeader.current.innerHTML = "You Win!"
            background.current.style.background = "#b3ffb3";
        }
        if(playersChoice === "Rock" && botsChoice === "Paper") {
            botsPick.current.innerHTML = "&#9995;" 
            infoHeader.current.innerHTML = "You Lose!"
            background.current.style.background = "#ffcccc";
        }
        if(playersChoice === "Paper" && botsChoice === "Rock") {
            botsPick.current.innerHTML = "&#9994;" 
            infoHeader.current.innerHTML = "You Win!"
            background.current.style.background = "#b3ffb3";
        }
        if(playersChoice === "Paper" && botsChoice === "Scissors") {
            botsPick.current.innerHTML = "&#9996;" 
            infoHeader.current.innerHTML = "You Lose!"
            background.current.style.background = "#ffcccc";
        }
        if(playersChoice === "Scissors" && botsChoice === "Rock") {
            botsPick.current.innerHTML = "&#9994;" 
            infoHeader.current.innerHTML = "You Lose!"
            background.current.style.background = "#ffcccc";
        }
        if(playersChoice === "Scissors" && botsChoice === "Paper") {
            botsPick.current.innerHTML = "&#9995;" 
            infoHeader.current.innerHTML = "You Win!"
            background.current.style.background = "#b3ffb3";
        }
    }


    return (
        <Container ref={background}>
          <Wrapper>
                <InfoH1 ref={infoHeader}>Pick <Label ref={rockLabel}>Rock</Label>, <Label ref={paperLabel}>Paper</Label> or <Label ref={scissorLabel}>Scissors</Label>!</InfoH1>
                <h1>Bot's choice:</h1>
                <BotsChoice ref={botsPick}>
                    &#10068;
                </BotsChoice>    
                <Icons>
                    <Icon onClick={()=>playGame(rockLabel)} onMouseEnter={()=>enterLabel(rockLabel)} onMouseLeave={()=>leaveLabel(rockLabel)}>&#9994;</Icon>
                    <Icon onClick={()=>playGame(paperLabel)} onMouseEnter={()=>enterLabel(paperLabel)} onMouseLeave={()=>leaveLabel(paperLabel)}>&#9995;</Icon>
                    <Icon onClick={()=>playGame(scissorLabel)} onMouseEnter={()=>enterLabel(scissorLabel)} onMouseLeave={()=>leaveLabel(scissorLabel)}>&#9996;</Icon>
                </Icons>
          </Wrapper>
        </Container>
    )
}
export default Game
