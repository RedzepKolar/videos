const MovieCard= ({movie})  => {
    return (
        <div className="col-3 text-white col-4 p-2">
            <img className="w-80" src={movie.Poster}/>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    );
}

export default MovieCard;