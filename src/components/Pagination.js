import Pagination from 'react-bootstrap/Pagination';
import ReactPaginate from 'react-paginate';
function PaginationOfMovies({CurrentPage}) {
    const handlePageClick =(data)=>{
          CurrentPage(data.selected+1)
    }
const pageCount =500;
  return (
 
      <ReactPaginate
        breakLabel="..."
        nextLabel="next>"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
  );
}

export default  PaginationOfMovies;