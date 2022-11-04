import CalcProvider from './context/CalcContext';
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import { ButtonBox, bcCalculator, scCalculator} from './components/ButtonBox'
import { UseDarkMode } from './styles/UseDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/GlobalStyles';
import { Toggle } from './styles/Toggle';
import { ThemeProvider } from 'styled-components';
import { UseScCal } from './sc-calculator/UseScCal';
import { ScToggle } from './sc-calculator/ScToggle';
import "./App.css"



function App() {
  const [ theme, toggleTheme] = UseDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const [ scCal, toggleScCal] = UseScCal();
  const changeCal = scCal === 'bc' ? bcCalculator : scCalculator;
  return (
      <ThemeProvider theme={themeMode}>
      <CalcProvider>
      <Wrapper>
        <GlobalStyles />
        <div className='toggle'>
          <ScToggle scCal={scCal} toggleScCal={toggleScCal}/>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <Screen />
        <ButtonBox scCal={changeCal} />
      </Wrapper>
      </CalcProvider>
    </ThemeProvider>
    
  );
}

export default App;