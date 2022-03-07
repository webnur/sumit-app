// import './assets/css/dark.css'
import Tutorial from './components/Tutorial';
import GlobalStyled from './components/styles/Global.styles';
import { ThemeProvider } from "styled-components";



function App() {
    return (
        <>
            <GlobalStyled />
            <Tutorial />

            {/* <ThemeProvider theme="dark">
                <Tutorial />
            </ThemeProvider> */}
            
        </>
    );
}

export default App;


