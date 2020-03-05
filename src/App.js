import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [numeroActual, setNumeroActual] = useState(Math.floor(Math.random() * 100 + 1))
  const [numeroElegido, setNumeroElegido] = useState(undefined)
  const [mensajeFeedback, setMensajeFeedback] = useState("")
  const [numeroIntentos, setNumeroIntentos] = useState(0)
  const [intentosAnteriores, setIntentosAnteriores] = useState([])

  const diferenciaNumeros = Math.abs(numeroActual - numeroElegido)

  const inputRef = useRef()

  console.log(numeroActual)
  console.log(numeroElegido)
  console.log(diferenciaNumeros)

 const calcularDiferencia = () => {
    if (diferenciaNumeros === 0) {
      if (numeroIntentos === 0) {
        setMensajeFeedback(`Adivinaste en el primer intento!`)
      } else {
        setMensajeFeedback(`Adivinaste en ${numeroIntentos + 1} intentos!`)
      }
    } else if (diferenciaNumeros <= 3) {
      setMensajeFeedback("Re caliente")
    } else if (diferenciaNumeros <= 10) {
      setMensajeFeedback("Tibio")
    } else if (diferenciaNumeros > 10) {
      setMensajeFeedback("Frio")
    } else {
      setMensajeFeedback("Intentá adivinar!")
    }
  }

  const reset = () => {
    setNumeroActual(Math.floor(Math.random() * 100 + 1))
    setNumeroElegido(undefined)
    setMensajeFeedback("")
    setNumeroIntentos(0)
    setIntentosAnteriores([])
    inputRef.current.value = ""
  }

  useEffect(() => {
    calcularDiferencia()
    setIntentosAnteriores([...intentosAnteriores, numeroElegido])
    if (intentosAnteriores.length > 0) {
      setNumeroIntentos(numeroIntentos + 1)
    }
  }, [numeroElegido])


  return (
    <div className="Card">
      <h1>title</h1>
      <div className="feedback">{mensajeFeedback}</div>
      <form onSubmit={(e) => { e.preventDefault();
          const guess = e.target.elements.inputNumber.value
          setNumeroElegido(guess)
          calcularDiferencia()}}>
        <input ref={inputRef} type="number" name="inputNumber" id="inputNumber"/>
        <button type="submit">Adivine?</button>
      </form>
      <h3>intentos: {numeroIntentos} </h3>
        <div className="attempts">Intentos anteriores: {intentosAnteriores.map((intento, index) => <p key={index}>{intento}</p>)}</div>
        {
        numeroElegido ?
        <button onClick={reset}>Reset</button>
        : <button disabled onClick={reset}>Reset</button>
        }
    </div>
  );
}

export default App;
