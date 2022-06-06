import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [fotos, setFotos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [tabla, setTabla] = useState(<></>);

  const actualizarPosts = async () => {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let res = await axios({
      url,
      method: 'GET',
    });
    console.log(res.data);
    setPosts(res.data);
    setTabla(
      <div className='row'>
        <div className='col-md-2'><b>Id</b></div>
        <div className='col-md-2'><b>Usuario</b></div>
        <div className='col-md-4'><b>Título</b></div>
        <div className='col-md-4'><b>Contenido</b></div>
        {
          posts.map((data) => (
            <div className='row' key={data.id}>
              <div className='col-md-2'>
                <label className='my-2'>{data.id}</label>
              </div>
              <div className='col-md-2'>
                <label className='my-2'>{data.userId}</label>
              </div>
              <div className='col-md-4'>
                <h3 className='my-2'>{data.title}</h3>
              </div>
              <div className='col-md-4'>
                <p className='my-2'>{data.body}</p>
              </div>
            </div>
          ))
        }
      </div>
    )
  }

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
          <label>{data.id}</label>
          <img src={data.url} alt={data.id} width="100%"></img> 
        </div>
      ))
    )
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='row my-3'>
          <h2>Segundo Examen</h2>
          <h4>Hernández Márquez Nelly Mariana</h4>
          <p>Seleccione una opción:</p>
        </div>
        <div className='row'>
        <div className='col-md-6'>
            <input type="button" className="btn btn-primary" value="Posts" onClick={actualizarPosts}></input>
          </div>
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
