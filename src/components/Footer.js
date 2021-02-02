import styled from 'styled-components'

function Footer () {
    return(
        <div>
            <hr></hr>
            <Footie>Copyright 2021 Marc Eugeni made with <a href="https://reactjs.org/">  React</a></Footie>
        
        </div>  
    )
}

const Footie = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
`

export default Footer;