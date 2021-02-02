import styled from 'styled-components'

function Joke (props) {
    return(
        <H3>{props.actualJoke}</H3>
    )
}

const H3 = styled.h3`
    color: whitesmoke;
    padding: 25px;
    
`

export default Joke;