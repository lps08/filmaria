
import './notfound.css'
import { Link } from 'react-router-dom';

export default function NotFound() {

    return (
        <div className="not-found">
            <h1>Error 404!</h1>
            <h2>Essa página não existe!</h2>
            <Link to="/">Veja todos os filmes</Link>
        </div>
    );
}