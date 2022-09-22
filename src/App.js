import Card from './components/Card';
import NavBar from './components/NavBar'
import axios from 'axios';
import { Route , Routes , BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import Breif from './components/Breif';
function App() {
const[pageCount,setPageCount]=useState(0)  
  const [movies , setMovies] = useState([])
     
  // GETTING DATA FROM API from tmdb api
 
  async function MovieData() {
    const responseData = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2f0bb54a926e6b3ebb4ae84e71dc1e84&language=en-US&page=1');
    setMovies(responseData.data.results);
    setPageCount(responseData.data.total_pages)

  }
  async function CurrentPage(page) {
    const responseData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2f0bb54a926e6b3ebb4ae84e71dc1e84&language=en-US&page=1&page=${page}`);
    setMovies(responseData.data.results);
    setPageCount(responseData.data.total_pages);
  }

 // using useEffect Hook 

  useEffect(() => {
     MovieData();
    console.log(movies)
  },[])
       
  const search = async (x)=>{
    if(x==''){
      MovieData();
    }
    else{
    const responseData = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2f0bb54a926e6b3ebb4ae84e71dc1e84&language&query=${x}&language=en-US&page=1&include_adult=false`);
    setMovies(responseData.data.results);
    setPageCount(responseData.data.total_pages);
    }
  }
  return (
    <div className="App">
     <NavBar search={search} />
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<MoviesList movie={movies} CurrentPage={CurrentPage} pageCount={pageCount}/>} />

      <Route path='/movie/:id' element={ <Breif />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
