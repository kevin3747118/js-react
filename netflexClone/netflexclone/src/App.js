import logo from './logo.svg';
import './App.css';
import Row from './Row'
import request from './request'

function App() {
    return (
        <div className="App">
            <h1>搭起</h1>
            <Row title="NETFLEX ORIGINALS" fetchUrl={request.fetchNetflexOriginals} />
            <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
        </div>
    );
}

export default App;
