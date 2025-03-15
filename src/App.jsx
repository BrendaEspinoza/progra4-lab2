
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Components/Counter'

function App() {


  //function useCounter () {
  //const [count, setCount] = useState (0)

  //const [count, setCount] = useState(0)
  /*const dicreaseCount = () =>  {
    if (count > 0)
      setCount ((count) =>  count -1)
  }

  const increaseCount = () => {
    setCount ((count) =>  count +1)
  }
  return {count, increaseCount,dicreaseCount}
 }*/

  //const {count, increaseCount, dicreaseCount} = useCounter ()



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Counter />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
