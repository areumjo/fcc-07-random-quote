import React, { useState } from "react";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const bgColorList =  ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

const Quote = ({ quotes, bgColor, setBgColor }) => {
    // console.log(quotes)
    
    const getRandom = numb => {
        let randomNum = Math.floor(Math.random() * numb) + 1  
        // console.log('inside getRandom', randomNum);
        return randomNum
    }
    const firstQuote = quotes[getRandom(102)]
    const [newQuote, setNewQuote] = useState([firstQuote]);
    
    const getNewQuote = () => {
        console.log('button clicked!')
        setNewQuote(quotes[getRandom(102)])
        setBgColor(bgColorList[getRandom(11)])
    }
    

    return (
        <>{firstQuote && 
            <div id="inner-box" className="inner-box" >
                <p id="text" style={{fontSize: "30px"}}><FontAwesomeIcon icon={faQuoteLeft} className="iconspace"/> {firstQuote.quote} <FontAwesomeIcon icon={faQuoteRight} className="iconspace"/></p>
                <p id="author" style={{fontSize: "20px"}}>- {firstQuote.author} -</p>
                <button id="new-quote" onClick={getNewQuote}>Get a new quote!</button>
                <a href={`https://twitter.com/intent/tweet?text=${firstQuote.quote} ${firstQuote.author}`} target='_blank' id="tweet-quote"><FontAwesomeIcon icon={faTwitterSquare} size="2x" color="#00acee" /></a>
            </div>
        }
        </>
    )
}

export default Quote