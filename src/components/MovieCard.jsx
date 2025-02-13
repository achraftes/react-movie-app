

const MovieCard = ({movie:
     {title,vote_average, poster_path, release_date, original_language} }) => {
    return (
        <div className="movie-card"> 
        <div className="mt-4">
                <div className="content">
                    <div className="rating">
                        <img src="star.svg" alt="Star Icon" />
                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                    </div>
                    <span>•</span>
                    <p className="year">{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                </div>
            </div>
            <img src={poster_path ?
                `https://image.tmdb.org/t/p/w500/${poster_path}` :'/no-movie.png'}
            alt={title}
            />
        </div>
    )
}

export default MovieCard
