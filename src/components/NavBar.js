// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar({search}) {
  const onSearch =(word)=>{
    search(word);
  }
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href='#' style={{color : "#fff" }} >Eg-MDB</Navbar.Brand>
          
            <input type='search' onChange={(e)=> onSearch(e.target.value)} className='search' placeholder='search' />
          
            {/* <Button variant="outline-success">Search</Button> */}
       
      </Container>
    </Navbar>
  );
}

export default NavBar;