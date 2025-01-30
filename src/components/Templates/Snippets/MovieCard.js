const MovieCard= ({data})  => {

    return (
        <div>
            <img src={data.Poster}/>
            <h1>{data.Title}</h1>
            <p>{data.Plot}</p>
        </div>
    );
}

export default MovieCard;