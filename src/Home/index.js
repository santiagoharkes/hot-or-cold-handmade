import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
    <div className="container">
        <div className="card">
            <h1>HOT or COLD</h1>
            <hr className="card-divider"/>
            <div className="home">
                <Link to='/game'>
                    <button className="start">Jugar</button>
                </Link>
                <Link to='/how'>
                    <button className="how">¿Cómo jugar?</button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Home
