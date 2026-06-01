function Stars({ rating }) {
    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((etoile) => (
                <i key={etoile} className={etoile <= rating ? 'fa-solid fa-star active' : 'fa-solid fa-star'}></i>
            ))}
        </div>
    )
}

export default Stars