import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import './home.css';

// https://sujeitoprogramador.com/r-api/?api=filmes/

export default function Home () {
    const [filmes, setFimes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('/r-api/?api=filmes/')
            // console.log(response.data)
            setFimes(response.data)
        }
        loadFilmes();
    }, [])

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt={filme.nome} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}