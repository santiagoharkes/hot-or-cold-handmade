import React from 'react'
import { Link } from 'react-router-dom'

function How() {
    return (
    <div className="container">
        <div className="card">
            <h1>HOT or COLD</h1>
            <hr className="card-divider"/>
            <div className="how">
            Este es un juego en donde tenés que adivinar el número:
            <ol>
                <li>
                    La súper Robotina va a elegir un número entre el 1 y el 100 y lo mantiene en secreto.
                </li>
                <li>
                    Vos tenés que intentar adivinar el número que eligió Robotina!
                </li>
                <li>
                    Como Robotina es la mejor, te va a tirar pistas de qué tan lejos o cerca estés de acertar. Mientras más lejos, más frío. Mientras más cerca, más caliente.
                </li>
            </ol>
            <p className="ready">¿Estás listo?</p>
            <hr className="card-divider"/>
            <Link to='/game'>
                <button className="wannaplay">¡Quiero jugar ya!</button>
            </Link>
            </div>
        </div>
    </div>
    )
}

export default How
