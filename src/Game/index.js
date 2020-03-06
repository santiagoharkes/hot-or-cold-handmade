import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [numeroActual, setNumeroActual] = useState(Math.floor(Math.random() * 100 + 1))
  const [numeroElegido, setNumeroElegido] = useState(undefined)
  const [mensajeFeedback, setMensajeFeedback] = useState(``)
  const [numeroIntentos, setNumeroIntentos] = useState(0)
  const [intentosAnteriores, setIntentosAnteriores] = useState([])
  const [feedbackCode, setFeedbackCode] = useState("")

  const diferenciaNumeros = Math.abs(numeroActual - numeroElegido)

  const inputRef = useRef()

  console.log(intentosAnteriores)
  console.log(numeroIntentos)

 const calcularDiferencia = () => {
    if (diferenciaNumeros === 0) {
      if (numeroIntentos === 0) {
        setMensajeFeedback(`Adivinaste en el primer intento! El número elegido era el ${numeroActual}!`)
        setFeedbackCode("win")
      } else {
        setMensajeFeedback(`Adivinaste en ${numeroIntentos + 1} intentos! El número elegido era el ${numeroActual}!`)
        setFeedbackCode("win")
      }
    } else if (diferenciaNumeros <= 3) {
      setMensajeFeedback("Re caliente")
      setFeedbackCode("hot")
    } else if (diferenciaNumeros <= 10) {
      setMensajeFeedback("Tibio")
      setFeedbackCode("warm")
    } else if (diferenciaNumeros > 10) {
      setMensajeFeedback("Frio")
      setFeedbackCode("cold")
    } else {
      setMensajeFeedback("Intentá adivinar!")
      setFeedbackCode("default")
    }
  }

  const reset = () => {
    setNumeroActual(Math.floor(Math.random() * 100 + 1))
    setNumeroElegido(undefined)
    setMensajeFeedback("")
    setNumeroIntentos(0)
    setIntentosAnteriores([])
    inputRef.current.value = ""
    setFeedbackCode("")
  }

  useEffect(() => {
    calcularDiferencia()
    numeroElegido && setIntentosAnteriores([...intentosAnteriores, numeroElegido])
    numeroElegido && setNumeroIntentos(numeroIntentos + 1)
  }, [numeroElegido])


  return (
    <div className={`container ${feedbackCode}`}>
      <div className={`card ${feedbackCode}`}>
        <h1>HOT or COLD</h1>
        <hr className={`card-divider ${feedbackCode}`}/>
        <div className={`feedback ${feedbackCode}`}>{mensajeFeedback}</div>
        <form onSubmit={(e) => { e.preventDefault();
            const guess = e.target.elements.inputNumber.value
            setNumeroElegido(guess)
            calcularDiferencia()}}>
          <input placeholder="Colocá tu numero..." ref={inputRef} type="number" name="inputNumber" id="inputNumber" required />
          {
            feedbackCode === "win" ?
            <button type="submit" disabled>Adivine?</button>
            : <button type="submit">Adivine?</button>
          }
        </form>
        <h3>Intentos: {numeroIntentos} </h3>
        {
          intentosAnteriores.length > 0 ?
          <div className={`attempts ${feedbackCode}`}>
          <p>Intentos anteriores: {intentosAnteriores.map((intento, index) => (index ? ', ' : '') + intento )}</p>
          </div>
          : <div className={`attempts ${feedbackCode}`}>
          <p>Todavía no intentaste ninguna vez!</p>
          </div>
        }
        {
        numeroElegido ?
        <button className="card-reset-button" onClick={reset}>Reset</button>
        : <button disabled className="card-reset-button" onClick={reset}>Reset</button>
        }
      </div>
    </div>
  );
}

export default App;
