import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>App<br /> Developer</h1>
      <div className="card mt-4">
        <div className="card" style={{ width: '18rem' }}>
          <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/code-512.png" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Donaciones</h5>
              <p className="card-text">Ejemplo de App de donaciones DEV para practicar con pasarela de pago <strong>STRIPE</strong> <br /> ¡Pruebalo!</p>

              <div className='form-floating mb-3 mt-4'>
                <input type="number" className="form-control" id="Monto" placeholder="digita tu monto" />
                <label htmlFor="floting-input" className="form-label">Monto</label>
              </div>

              <div  className='form-floating mt-3 mb-4'>
                <input className="form-control" type='text-area' id="mensaje" rows="3" placeholder='Escribe tu mensaje' />
                <label htmlFor="flotingTextarea" className="form-label">Mensaje</label>
              </div>

            <button href="#" className="btn btn-primary">Donar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

