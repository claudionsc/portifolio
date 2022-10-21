import React from 'react'
import styled from 'styled-components'


const ConstMain = styled.div`
    
    width: 90vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    padding-top: 90px;
    background-image: linear-gradient(25deg, #0200245f 0%, #44065e5a 24%, #7963095c 67%, #00d5ff7a 100%);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border-radius: 10px;
    z-index: 1;

    @media(max-width: 500px) {
        display: flex;
        flex-direction: column;
        height: 80vh;
    }
    
  
    

`
const Main = ({children}) => {

    return  <ConstMain>{children}</ConstMain>
}

export default Main