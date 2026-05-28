import { useParams } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import logements from '../data/logement.json'
import Collapse from '../components/Collapse'
import './Logement.scss'

function Logement() {
    const { id } = useParams()
    const logement = logements.find((l) => l.id === id)

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
                <div className="rating">
                    {[1, 2, 3, 4, 5].map((etoile) => (
                        <i key={etoile} className={etoile <= logement.rating ? 'fa-solid fa-star active' : 'fa-solid fa-star'}></i>
                    ))}
                </div>
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