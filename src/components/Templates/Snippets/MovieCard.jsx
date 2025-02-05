const MovieCard= ({movie})  => {

    return (
        <div>
            <img src={movie.Poster}/>
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
        </div>
    );
}

export default MovieCard;