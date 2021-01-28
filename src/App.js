import React, { useEffect, useState } from "react";
/* import Button from "./components/Button" */
import Joke  from "./components/Joke"
import Footer from "./components/Footer"
import axios from "axios"


function App () {

    //const joke = "la joke se pasa por fucking props! madafuck!"

    const [joke, setJoke] = useState("")
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
            <h1>React chist manager</h1>
            
            <button onClick={() => setFetching(!fetching) }>next chist</button>

            {/* <Button actualFetch={() => setFetching(!fetching)}/> */}

            <Joke actualJoke={joke} /> {/* the mutherFuckin fetched joke passes though the Joke component via props */}
            <Footer />
        </div>
    );
};

export default App;

