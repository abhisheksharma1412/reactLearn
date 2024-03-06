import HardikButton from "./component/Firstcomp";
import Random from "./component/Random";
function App(){
  return <div>
  <h1>
    Hey, Hardik Sharma this side
  </h1>
  <HardikButton></HardikButton>
  {/* we can also use Component like this */}
  <Random />  
  <Random />
  <Random />
  <Random />
  </div>
}

export default App;