import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import logements from '../data/logement.json'
import Collapse from '../components/Collapse'
import './Logement.scss'
import Stars from '../components/Stars'

function Logement() {
    const { id } = useParams()
    const logement = logements.find((l) => l.id === id)

    // si l'id n'existe pas, on redirige vers la page 404//
if (!logement) {
    return <Navigate to="/404" />
}

    return (
    <div className="logement">
        <Slideshow images={logement.pictures} />

        <div className="logement-info">
            <div className="logement-gauche">
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
                <div className="tags">
                    {logement.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
            <div className="logement-droite">
                <div className="host">
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt={logement.host.name} />
                </div>
                <Stars rating={logement.rating} />
            </div>
        </div>
        
        <div className="collapses">
            <Collapse titre="Description" contenu={logement.description} />
            <Collapse titre="Équipements" contenu={logement.equipments.join(', ')} />
        </div>
    </div>
)
}

export default Logement


