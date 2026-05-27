import './index.scss'

function Card({ logement }) {
    return (
        <div className="card">
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
        </div>
    )
}

export default Card