import SearchMovie from "./components/SearchMovie/SearchMovie";
import Navigation from "./components/Templates/Snippets/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Templates/Snippets/Footer";
import Search from "./components/SearchMovie/Search";

const App = () => {
  return (
    <div className="App">
        <Navigation />
        <Search />
      <SearchMovie />
        <Footer />
    </div>
  );
}

export default App;
