import './Home.scss'
import Banner from '../components/Banner'
import Card from '../components/Card'
import logements from '../data/logement.json'
import accueil from '../assets/Accueil.png'

function Home() {
    return (
        <div>
            <Banner image={accueil} titre="Chez vous, partout et ailleurs" />
            <div className="cards">
                {logements.map((logement) => (
                    <Card key={logement.id} logement={logement} />
                    
                ))}
            </div>
        </div>
    )
}

export default Home