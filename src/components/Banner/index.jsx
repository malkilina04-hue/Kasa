import './index.scss'
import accueil from '../../assets/Accueil.png'

function Banner() {
    return (
        <div className="banner" style={{backgroundImage: `url(${accueil})`}}>
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner