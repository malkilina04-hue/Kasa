import './index.scss'

function Banner( {image, titre } ) {
    return (
        <div className="banner" style={{backgroundImage: `url(${image})`}}>
            {titre && <p>{titre}</p>}
        </div>
    )
}

export default Banner