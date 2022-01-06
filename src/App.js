import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

//import BoilingVerdict from './components/Boiling/BoilingVerdict';
// import Calculator from './components/Boiling/Calculator';
//import Form from './components/Clock/Form';
// import Clock from './components/Clock/Clock';
// import ClockList from './components/Clock/ClockList';
// import Emoji from './components/Composition/Emoji';
// import Bracket from './components/Composition/Bracket';
// import Text from './components/Composition/Text';



function App() {
  return (
    // <Emoji>
    //     {({addEmoji}) => (
    //     <Bracket>
    //       {({addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket}></Text>}
    //     </Bracket>
    //       )}
    //   </Emoji>

    <div>
      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
);


}

export default App;
