import './Filme.css'
type FilmeProps = {
    titulo:string,
    sinopse:string,
    imagem:string
}
function Filme(props:FilmeProps){
    return(
        <div className="filme-content">
            <div className="foto_filme">
                <img className="img-filme" src={props.imagem} alt="" />
            </div>
            <div className="text-barbie">
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.sinopse}</p>
            </div>
        </div>
    )
}
export default Filme

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('URL_DO_SEU_BACKEND/api/filmes');
        setMovies(response.data);
      } catch (error) {
        console.error('Erro ao obter os dados dos filmes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
       <h1>Lista de Filmes</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;