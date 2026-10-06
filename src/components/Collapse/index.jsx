import { useState } from 'react'
import './index.scss'

function Collapse({ titre, contenu }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <div className="collapse-header" >
                <span>{titre}</span>
                <button onClick={() => setIsOpen(!isOpen)}>
                <i className={isOpen ? 'arrow open fa-solid fa-chevron-up' : 'arrow fa-solid fa-chevron-up'}></i>
            </button>
            </div>
                <div className={isOpen ? 'collapse-content open' : 'collapse-content'}>
                    <p>{contenu}</p>
                </div>
        </div>
    )
}

export default Collapse