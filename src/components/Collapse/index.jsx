import { useState } from 'react'
import './index.scss'

function Collapse({ titre, contenu }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <button className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <span>{titre}</span>
                <i className={isOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}></i>
            </button>
            {isOpen && (
                <div className="collapse-content">
                    <p>{contenu}</p>
                </div>
            )}
        </div>
    )
}

export default Collapse