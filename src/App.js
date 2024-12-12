import './App.css';
import SearchMovie from "./components/SearchMovie/SearchMovie";

// http://www.omdbapi.com/?apikey=[yourkey]&
console.log(process.env.REACT_APP_OMDBAPI_KEY, process.env.REACT_APP_OMDBAPI_URL)

// axios.get(`${process.env.REACT_APP_OMDBAPI_URL}?t=Terminator&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`)
//     .then(response => {
//         console.log(response.data);
//     }).catch(error => {
//         console.log(error);
// })

function App() {
  return (
    <div className="App">
      <SearchMovie />
    </div>
  );
}

export default App;
