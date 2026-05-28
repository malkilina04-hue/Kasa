import Slideshow from '../components/Slideshow'
import logements from '../data/logement.json'

function Logement() {
    const logement = logements[0]

    return (
        <div>
            <Slideshow images={logement.pictures} />
            <h1>{logement.title}</h1>
        </div>
    )
}

export default Logement