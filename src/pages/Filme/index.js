import './filme.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

export default function Filme() {
    const { id } = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    // https://sujeitoprogramador.com/r-api/?api=filmes/id
    useEffect(() => {
        async function loadFilme() {
            const response = await api.get(`/r-api/?api=filmes/${id}`);
            // console.log(response.data);
            setFilme(response.data);
            setLoading(false)
        }
        loadFilme();
    }, [id]);

    if (loading) {
        return (
            <div className="filme-info">
                <h1>CARREGANDO SEU FILME...</h1>
            </div>
        );
    }

    return(
        <div className="filme-info">
            <h1>PAGINA DETALHES DO FILME</h1>
        </div>
    );
}