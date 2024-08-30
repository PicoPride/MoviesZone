import React, { useState } from 'react'
import { movies } from './data'
import CategoryBtn from './CategoryBtn'
import './css/movies.css'

const Movies = () => {
    const [MoviesList, setMoviesList] = useState(movies);

    const filterByCategory = (cat) => {
        if (cat === 'All') {
            setMoviesList(movies)
        } else {
            setMoviesList(movies.filter((data) => data.category === cat))
        }
    }

    return (
        <div className='container'>
            <CategoryBtn onClick={() => filterByCategory("All")} label="All" />
            <CategoryBtn onClick={() => filterByCategory("Action")} label="Action" />
            <CategoryBtn onClick={() => filterByCategory("Thriller")} label="Thriller" />
            <CategoryBtn onClick={() => filterByCategory("Animation")} label="Animation" />
            <CategoryBtn onClick={() => filterByCategory("Horror")} label="Horror" />
            <CategoryBtn onClick={() => filterByCategory("Drama")} label="Drama" />
            <CategoryBtn onClick={() => filterByCategory("Sci-Fi")} label="Sci-Fi" />

            <div className='main-container'>
                {MoviesList.map((data) => (
                    <div key={data.id} className='content-box'>
                        <div className='img-container'>
                            <img src={data.poster_path} alt={data.title} className='poster-img' />
                        </div>
                        <h3>{data.title}</h3>
                        <p>{data.release_date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movies
