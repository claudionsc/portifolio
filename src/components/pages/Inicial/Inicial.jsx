import Main from "./Main";
import img from '../../img/img.jpg'
import { Button } from "../../Buttons/Button";



export function Inicial(){

    return (
        <>
            <Main>
                <div>
                    <img src={img} style={{ width: '150px', borderRadius: '50%', marginBottom: '10px' }}/>
                </div>

                <div style={{ 
                    width: '85%', height:'9%', backgroundColor: '#3A0044', margin: '20px 0', 
                    display: 'flex', justifyContent: "center", alignItems: 'center', borderRadius: '10px', }}>
                    <Button>Contatos</Button>
                    <Button>Frontend</Button>
                    <Button>Backend</Button>
                    <Button>Design</Button>
                </div>
                <div style={{ 
                    width: '75%', height:'55%', backgroundColor: '#3A0044', margin: '20px 0', 
                    display: 'flex', justifyContent: "center", alignItems: 'center', borderRadius: '10px',
                    padding: '0 20px'
                    }}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                            laborum
                        </p>
                </div>

            </Main>
        </>
    )
    }
