import { useState } from 'react'
import './index.scss'

function Collapse({ titre, contenu }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <div className="collapse-header" >
                <span>{titre}</span>
                <button onClick={() => setIsOpen(!isOpen)}>
                <i className={isOpen ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'}></i>
            </button>
            </div>
            {isOpen && (
                <div className="collapse-content">
                    <p>{contenu}</p>
                </div>
            )}
        </div>
    )
}

export default Collapse