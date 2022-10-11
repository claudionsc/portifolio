import styled from 'styled-components'


const ConstMain = styled.div`
    
    width: 60vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    /* From https://css.glass */
    background: rgba(143, 0, 255, 0.61);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.8px);
    -webkit-backdrop-filter: blur(11.8px);
    

`
const Info = ({children}) => {

    return  <ConstMain>{children}</ConstMain>
}

export default Info