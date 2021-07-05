import { useState } from 'react'
import axios from 'axios'

function App() {

  const [result, setResult] = useState(0)
  const [state, setState] = useState({ valor1: 0, valor2: 0 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }
  const multiplicar = () => {
    axios.get(`http://localhost:8000/multiplicar/${state.valor1}/${state.valor2}`)
      .then(response => {
        setResult(response.data.result);
      })  
  }

  return (
    <div className="app">
      <input name="valor1" onChange={handleChange} />
      <input name="valor2" onChange={handleChange} />
      <button onClick={multiplicar}>multiplicar</button>
      <p>O resultado da soma de  {state.valor1} + {state.valor2} = { result }</p>
    </div>
  );
}

export default App;
