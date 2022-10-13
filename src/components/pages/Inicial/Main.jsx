import React from 'react'
import styled from 'styled-components'


const ConstMain = styled.div`
    
    width: 80vw;
    height: auto;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    padding: 5vh 5vh;
    margin: 90px 0;
    background-image: linear-gradient(25deg, #0200245f 0%, #44065e5a 24%, #7963095c 67%, #00d5ff7a 100%);
    /* background: rgba( 38, 38, 38, 0.15 ); */
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border-radius: 10px;
    z-index: 1;
  
    

`
const Main = ({children}) => {

    return  <ConstMain>{children}</ConstMain>
}

export default Main