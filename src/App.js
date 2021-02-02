import React, { useState, useEffect } from "react";
import Joke  from "./components/Joke"
import axios from "axios"
import styled from 'styled-components'

function App () {

    const [joke, setJoke] = useState("")
    /* const [disableNext, nextIsNowDisabled] = useState(false)

    function handleClick() {
        disableNext(true);
        axios.get("https://icanhazdadjoke.com/", {
            headers:{
                "Accept": "application/json"
            }

        }).then((response) => {
            setJoke(response.data.joke);
            disableNext(false);
        });
    } */

    const [fetching, setFetching] = useState(false) 

        useEffect (() => {
        const fetchData = async () => {
            const result = await axios ("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general")
            
            setJoke(`${result.data[0].setup} ${result.data[0].punchline}`)
        }
        fetchData()
    }, [fetching]) 


    return (
        <div>
            <Card>
                <H1>
                    
                    <h1>React Joke Manager</h1>
                </H1>

                

                <Joke actualJoke={joke} /> {/* the mutherFuckin fetched joke passes to the Joke component via props */}
                <Buttion onClick={() => setFetching(!fetching) }>next one!</Buttion>
            </Card>

            
            
        </div>
    );
};

export default App;

const H1 = styled.div`

    background-color: #D08770;
    color: whitesmoke;
    border-radius: 0px 0px 25px 25px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 100px;
`

const Card = styled.div`
    max-height: 500px;
    max-width: 500px;
    background-color: #2D4258;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    font-family: 'Montserrat', sans-serif;
`


/* const Headerr = styled.h1`
    height: 100px;
    background-color: #88C0D0;
    color: whitesmoke;
    margin-bottom: 15px;
    text-align: center;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
` */

const Buttion = styled.button`
    
  border: none;
  outline: none;
  border-radius: 25px 25px 0px 0px;
  background-color: #5E81AC;
  color: whitesmoke;
  font-family: "Montserrat", sans-serif;
  padding: 15px;
  font-size: 1.5rem;
  max-width: 500px;


`