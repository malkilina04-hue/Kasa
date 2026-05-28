import { useState } from 'react'
import './index.scss'

function Slideshow({ images }) {
    const [indexActuel, setIndexActuel] = useState(0)

    // si une seule image pas de flèches
    if (images.length === 1) {
        return (
            <div className="slideshow">
                <img src={images[0]} alt="logement" />
            </div>
        )
    }

    function imagePrecedente() {
        if (indexActuel === 0) {
            setIndexActuel(images.length - 1)
        } else {
            setIndexActuel(indexActuel - 1)
        }
    }

    function imageSuivante() {
        if (indexActuel === images.length - 1) {
            setIndexActuel(0)
        } else {
            setIndexActuel(indexActuel + 1)
        }
    }

    return (
        <div className="slideshow">
            <img src={images[indexActuel]} alt="logement" />
            <button className="fleche gauche" onClick={imagePrecedente}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="fleche droite" onClick={imageSuivante}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
            <p className="numerotation">{indexActuel + 1}/{images.length}</p>
        </div>
    )
}

export default Slideshow