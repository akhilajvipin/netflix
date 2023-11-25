import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <Nav/>

      <Banner fetchURL={requests.fetchNetflixOriginals}/>

      <Row isPoster={true} title="Trending movies" fetchURL={requests.fetchTrending}></Row>

      <Row  title="NetflixOriginals" fetchURL={requests.fetchNetflixOriginals}></Row>
      
      <Row title="Top Rated Movies" fetchURL={requests.fetchTopRated}></Row>

      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}></Row>

      <Row title="Comedy Movies" fetchURL={requests. fetchComedyMovies}></Row>

      <Row title="Horror Movies" fetchURL={requests. fetchHorrorMovies}></Row>

      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}></Row>

      <Row title="Documentaries" fetchURL={requests. fetchDocumentaries}></Row>


     
      <Row/>
    </div>
  );
}

export default App;
