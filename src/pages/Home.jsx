import './Home.scss'
import Banner from '../components/Banner'
import Card from '../components/Card'
import logements from '../data/logement.json'

function Home() {
    return (
        <div>
            <Banner />
            <div className="cards">
                {logements.map((logement) => (
                    <Card key={logement.id} logement={logement} />
                ))}
            </div>
        </div>
    )
}

export default Home