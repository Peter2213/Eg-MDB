import React from 'react'
import {Row, Card , Col} from "react-bootstrap"
import MovieCard from '../components/Card'
import PaginationOfMovies from './Pagination'
const MoviesList = ({movie , CurrentPage , pageCount}) => {
    
    return (
    
    <Row className="mt-3">
        {movie.length >= 1 ? (movie.map((moviee) => {
           return (<MovieCard key={moviee.id} moviee={moviee}/>)
        })) : <h2 className='text-center p-5'>no movies found</h2> } 
        <PaginationOfMovies CurrentPage={CurrentPage} pageCount={pageCount} />
        </Row>
        
  )
}

export default MoviesList