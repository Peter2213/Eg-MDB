import React from 'react'
import {Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const MovieCard = ({moviee}) => {
  return (
   <Col xs="7" sm="6" md="4" lg="3" className="my-1">
    <Link to={`/movie/${moviee.id}`}>
    <div className='card'>
        <img src ={'https://image.tmdb.org/t/p/w500/' + moviee.poster_path} className='card__image' alt='zzz' /> 
        <div className='card__overlay'>
            <div className='overlay__text text-center w-100 p-2'>
            <p>Movie Name : {moviee.title} </p>
            <p>Release date : {moviee.release_date}</p>
            <p>Vote Count : {moviee.vote_count}</p>
            <p>Rating : {moviee.vote_average}</p>
        </div>
      </div>
    </div>
   </Link>
   </Col>
  )
}

export default MovieCard