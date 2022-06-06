import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [fotos, setFotos] = useState([]);
  const [tabla, setTabla] = useState(<></>);

  const actualizarFotos = async () => {
    let url = 'https://jsonplaceholder.typicode.com/photos';
    let res = await axios({
      url,
      method: 'GET',
    });
    console.log(res.data);
    setFotos(res.data);
    setTabla(
      fotos.map((data) => (
        <div className='col-md-3 my-1' key={data.id}>
          <img src={data.url} width="100%"></img> 
        </div>
      ))
    )
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <input type="button" className="btn btn-primary" value="Fotos" onClick={actualizarFotos}></input>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='row' id='resultados'>
            {
              tabla
            }
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
