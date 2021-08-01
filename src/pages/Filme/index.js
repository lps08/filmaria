import './filme.css';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Filme() {
    const { id } = useParams();
    const history = useHistory();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    // https://sujeitoprogramador.com/r-api/?api=filmes/id
    useEffect(() => {
        async function loadFilme() {
            const response = await api.get(`/r-api/?api=filmes/${id}`);
            // console.log(response.data);

            if (response.data.length === 0) {
                // se não existir data, volta para a pagina inicial
                history.replace('/');
                return;
            }

            setFilme(response.data);
            setLoading(false)

        }
        loadFilme();

        // return funciona como desmontagem de componente
        return () => {
            console.log("Componente desmontado")
        }

    }, [id, history]);

    if (loading) {
        return (
            <div className="filme-info">
                <h1>CARREGANDO SEU FILME...</h1>
            </div>
        );
    }

    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div>
                <button onClick={() => {}}>Salvar</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} trailler`}>
                        Trailler
                    </a>
                </button>
            </div>
        </div>

    );
}