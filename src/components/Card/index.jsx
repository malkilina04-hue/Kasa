import { Link } from 'react-router-dom'
import './index.scss'

function Card({ logement }) {
    return (
        <Link to={`/logement/${logement.id}`}>
        <div className="card">
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
        </div>
        </Link>
    )
}

export default Card